import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  RefreshControl,
  ActivityIndicator,
  Alert
} from 'react-native';
import { useRouter } from 'expo-router';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  Heart,
  MessageSquare,
  Share2,
  Camera,
  Plus,
  Search,
  MapPin,
  CommunityIcon,
  ChevronLeft,
  ShieldCheck,
  TrendingUp,
  Image as ImageIcon
} from '../components/icons';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/Colors';
import API_URL from '../lib/api-config';

interface Post {
  id: string;
  author_name: string;
  isSpecialist?: boolean;
  location: string;
  content: string;
  likes_count: number;
  comments_count: number;
  timestamp: string;
  image_url?: string;
  liked?: boolean;
}

export default function FarmerConnectScreen() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [creating, setCreating] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/community/posts`);
      if (!res.ok) throw new Error('Failed to fetch posts');
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.error(error);
      // Fallback for demo or error state
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchPosts();
  };

  const handleCreatePost = async () => {
    if (!newPostContent.trim()) return;

    setCreating(true);
    try {
      const res = await fetch(`${API_URL}/api/community/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          author: 'Mobile User', // Hardcoded for simplified mobile context
          location: 'Freetown',
          content: newPostContent,
          tags: []
        })
      });

      if (res.ok) {
        setNewPostContent('');
        fetchPosts(); // Refresh feed
        Alert.alert('Success', 'Post created successfully!');
      } else {
        Alert.alert('Error', 'Failed to create post');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error');
    } finally {
      setCreating(false);
    }
  };

  const toggleLike = async (id: string) => {
    // Optimistic Update
    setPosts(prev => prev.map(post => {
      if (post.id === id) {
        return {
          ...post,
          liked: !post.liked,
          likes_count: post.liked ? post.likes_count - 1 : post.likes_count + 1
        };
      }
      return post;
    }));

    try {
      await fetch(`${API_URL}/api/community/posts/${id}/like`, { method: 'POST' });
    } catch (error) {
      console.error('Like failed', error);
      fetchPosts(); // Revert on failure
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#fff" />}
      >
        {/* Cinematic Header */}
        <LinearGradient
          colors={['#8B5CF6', '#6D28D9']}
          style={styles.header}
        >
          <View style={styles.headerNav}>
            <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
              <ChevronLeft size={24} color="#fff" />
            </TouchableOpacity>
            <View style={styles.headerTitleContainer}>
              <CommunityIcon size={24} color="#fff" />
              <Text style={styles.headerTitle}>Social Hub</Text>
            </View>
            <TouchableOpacity style={styles.profileBtn}>
              <View style={styles.avatarMini}>
                <Text style={styles.avatarTextMini}>M</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.headerContent}>
            <Text style={styles.greeting}>Farmer Connect</Text>
            <Text style={styles.statsSubtitle}>Join 25k+ farmers solving challenges together</Text>

            <View style={styles.metricsRow}>
              <View style={styles.metricItem}>
                <TrendingUp size={16} color="rgba(255,255,255,0.7)" />
                <Text style={styles.metricValue}>1.2k</Text>
                <Text style={styles.metricLabel}>Daily Posts</Text>
              </View>
              <View style={styles.metricDivider} />
              <View style={styles.metricItem}>
                <ShieldCheck size={16} color="rgba(255,255,255,0.7)" />
                <Text style={styles.metricValue}>500+</Text>
                <Text style={styles.metricLabel}>Experts</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* Create Post Section */}
        <Card style={styles.createPostCard}>
          <View style={styles.createPostTop}>
            <View style={styles.avatarSmall}>
              <Text style={styles.avatarTextSmall}>M</Text>
            </View>
            <View style={styles.inputShadow}>
              <TextInput
                placeholder="What's happening on your farm?"
                placeholderTextColor="#9CA3AF"
                style={styles.inputField}
                value={newPostContent}
                onChangeText={setNewPostContent}
                multiline
              />
            </View>
          </View>
          <View style={styles.createPostActions}>
            <TouchableOpacity style={styles.postActionBtn}>
              <View style={[styles.actionIconBg, { backgroundColor: '#E0F2FE' }]}>
                <ImageIcon size={18} color="#0EA5E9" />
              </View>
              <Text style={styles.actionBtnText}>Photo</Text>
            </TouchableOpacity>

            {/* Post Button */}
            <TouchableOpacity
              style={[styles.postSubmitBtn, (!newPostContent && !creating) && styles.disabledBtn]}
              onPress={handleCreatePost}
              disabled={!newPostContent || creating}
            >
              <Text style={styles.postSubmitText}>{creating ? '...' : 'Post'}</Text>
            </TouchableOpacity>

          </View>
        </Card>

        {/* Discovery Sections */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Community Feed</Text>
            <View style={styles.filterChip}>
              <TrendingUp size={12} color={Colors.primary} />
              <Text style={styles.filterText}>Trending</Text>
            </View>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color={Colors.primary} style={{ marginTop: 20 }} />
          ) : (
            posts.map((post) => (
              <Card key={post.id} style={styles.postCard}>
                <View style={styles.postHeader}>
                  <View style={styles.authorSection}>
                    <View style={[styles.authorAvatar, post.isSpecialist && { borderColor: Colors.primary, borderWidth: 2 }]}>
                      <Text style={styles.authorAvatarText}>{post.author_name ? post.author_name.charAt(0) : '?'}</Text>
                    </View>
                    <View style={styles.authorDetails}>
                      <View style={styles.nameRow}>
                        <Text style={styles.authorName}>{post.author_name}</Text>
                        {post.isSpecialist && (
                          <ShieldCheck size={14} color={Colors.primary} style={styles.verifyIcon} />
                        )}
                      </View>
                      <View style={styles.metaRow}>
                        <MapPin size={10} color="#6B7280" />
                        <Text style={styles.metaText}>{post.location} • {new Date(post.timestamp).toLocaleDateString()}</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.moreBtn}>
                    <Plus size={20} color="#9CA3AF" style={{ transform: [{ rotate: '45deg' }] }} />
                  </TouchableOpacity>
                </View>

                <Text style={styles.postContent}>{post.content}</Text>

                {post.image_url ? (
                  <View style={styles.postImageContainer}>
                    <LinearGradient
                      colors={['transparent', 'rgba(0,0,0,0.6)']}
                      style={styles.imageOverlay}
                    />
                    <View style={styles.imageBadge}>
                      <Text style={styles.imageBadgeText}>Image</Text>
                    </View>
                  </View>
                ) : null}

                <View style={styles.postFooter}>
                  <View style={styles.interactionRow}>
                    <TouchableOpacity
                      style={[styles.interactionBtn, post.liked && styles.btnActive]}
                      onPress={() => toggleLike(post.id)}
                    >
                      <Heart
                        size={20}
                        color={post.liked ? Colors.error : "#64748B"}
                        fill={post.liked ? Colors.error : 'none'}
                      />
                      <Text style={[styles.interactionText, post.liked && { color: Colors.error }]}>{post.likes_count}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.interactionBtn}>
                      <MessageSquare size={20} color="#64748B" />
                      <Text style={styles.interactionText}>{post.comments_count}</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.shareBtn}>
                    <Share2 size={20} color="#64748B" />
                  </TouchableOpacity>
                </View>
              </Card>
            ))
          )}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={() => { }}>
        <LinearGradient
          colors={['#8B5CF6', '#7C3AED']}
          style={styles.fabGradient}
        >
          <Plus size={30} color="#fff" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 24,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    elevation: 10,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  headerNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  profileBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    padding: 2,
  },
  avatarMini: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarTextMini: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  headerContent: {
    alignItems: 'center',
  },
  greeting: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    letterSpacing: -0.5,
  },
  statsSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 24,
    textAlign: 'center',
  },
  metricsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  metricItem: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  metricValue: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  metricLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: 2,
  },
  metricDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  createPostCard: {
    margin: 16,
    marginTop: -20,
    padding: 16,
    borderRadius: 24,
    elevation: 8,
  },
  createPostTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarSmall: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarTextSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9CA3AF',
  },
  inputShadow: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  inputField: {
    minHeight: 40,
    fontSize: 14,
    color: '#374151',
  },
  createPostActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 16,
  },
  postActionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionIconBg: {
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4B5563',
  },
  postSubmitBtn: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  disabledBtn: {
    backgroundColor: '#E5E7EB',
  },
  postSubmitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform: 'uppercase',
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary + '20',
  },
  filterText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  postCard: {
    marginBottom: 16,
    padding: 0,
    borderRadius: 28,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  authorAvatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#64748B',
  },
  authorDetails: {
    gap: 2,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  verifyIcon: {
    marginTop: 1,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#64748B',
  },
  moreBtn: {
    padding: 4,
  },
  postContent: {
    fontSize: 15,
    lineHeight: 24,
    color: '#334155',
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  postImageContainer: {
    height: 220,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
    borderRadius: 20,
    overflow: 'hidden',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    zIndex: 1,
  },
  imageBadge: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    zIndex: 2,
  },
  imageBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    marginTop: 8,
  },
  interactionRow: {
    flexDirection: 'row',
    gap: 20,
  },
  interactionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  interactionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#64748B',
  },
  btnActive: {
    // Opacity for active state
  },
  shareBtn: {
    // Styling for share button
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 24,
    borderRadius: 30,
    elevation: 10,
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  fabGradient: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
