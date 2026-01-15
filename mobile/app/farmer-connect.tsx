import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import {
  Heart,
  MessageSquare,
  Share2,
  Camera,
  Plus,
  Search,
  MapPin,
  CommunityIcon
} from '../components/icons';
import { LinearGradient } from 'expo-linear-gradient';

interface Post {
  id: string;
  author: string;
  location: string;
  content: string;
  likes: number;
  comments: number;
  time: string;
  image?: string;
  liked?: boolean;
}

export default function FarmerConnectScreen() {
  const [location, setLocation] = useState('');
  const [cropInterest, setCropInterest] = useState('all');
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'Mohamed Kamara',
      location: 'Bo District',
      content: 'Just harvested my rice crop! Used the NERICA variety and got excellent yields. Happy to share tips!',
      likes: 24,
      comments: 5,
      time: '2h ago',
      liked: true,
    },
    {
      id: '2',
      author: 'Fatmata Bangura',
      location: 'Kenema',
      content: 'Looking for advice on cassava farming. Any experienced farmers in the area?',
      likes: 12,
      comments: 8,
      time: '5h ago',
    },
    {
      id: '3',
      author: 'Ibrahim Sesay',
      location: 'Makeni',
      content: 'Weather forecast looks good for planting next week. Who else is preparing their fields?',
      likes: 18,
      comments: 3,
      time: '1d ago',
    },
  ]);

  const toggleLike = (id: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === id) {
        return {
          ...post,
          liked: !post.liked,
          likes: post.liked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient
          colors={[Colors.primary, '#15803d']}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.title}>Farmer Connect</Text>
              <Text style={styles.subtitle}>Sierra Leone's Farming Community</Text>
            </View>
            <CommunityIcon size={32} color={Colors.white} />
          </View>
        </LinearGradient>

        <Card style={styles.statsCard}>
          <View style={styles.statsRow}>
            {[
              { val: '25K+', label: 'Farmers' },
              { val: '15K+', label: 'Solutions' },
              { val: '500+', label: 'Advisors' }
            ].map((stat, i) => (
              <View key={i} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.val}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </Card>

        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Search size={20} color={Colors.textSecondary} />
            <TextInput
              placeholder="Search by location or crop..."
              style={styles.searchInput}
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </View>

        <View style={styles.postsContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.postsTitle}>Community Feed</Text>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterText}>Most Recent</Text>
            </TouchableOpacity>
          </View>

          {posts.map((post) => (
            <Card key={post.id} style={styles.postCard}>
              <View style={styles.postHeader}>
                <View style={styles.authorInfo}>
                  <View style={styles.avatarGradient}>
                    <Text style={styles.avatarText}>{post.author.charAt(0)}</Text>
                  </View>
                  <View>
                    <Text style={styles.authorName}>{post.author}</Text>
                    <View style={styles.locationWrapper}>
                      <MapPin size={10} color={Colors.textSecondary} />
                      <Text style={styles.authorLocation}>{post.location}</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.postTime}>{post.time}</Text>
              </View>

              <Text style={styles.postContent}>{post.content}</Text>

              <View style={styles.postActions}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => toggleLike(post.id)}
                >
                  <Heart scale={0.8} color={post.liked ? Colors.error : Colors.textSecondary} fill={post.liked ? Colors.error : 'none'} />
                  <Text style={[styles.actionText, post.liked && { color: Colors.error }]}>{post.likes}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                  <MessageSquare size={18} color={Colors.textSecondary} />
                  <Text style={styles.actionText}>{post.comments}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                  <Share2 size={18} color={Colors.textSecondary} />
                  <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>
              </View>
            </Card>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <LinearGradient
          colors={['#1EB53A', '#15803d']}
          style={styles.fabGradient}
        >
          <Plus size={28} color={Colors.white} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAF8',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.9,
    marginTop: 4,
  },
  statsCard: {
    margin: 16,
    marginTop: -25,
    padding: 20,
    borderRadius: 24,
    elevation: 8,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  searchSection: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 15,
    color: Colors.text,
  },
  postsContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  postsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: Colors.primary + '10',
  },
  filterText: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: '600',
  },
  postCard: {
    marginBottom: 16,
    padding: 16,
    borderRadius: 20,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarGradient: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  authorName: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  authorLocation: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  postTime: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  postContent: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 16,
  },
  postActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    paddingTop: 12,
    justifyContent: 'space-around',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  actionText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 8,
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
