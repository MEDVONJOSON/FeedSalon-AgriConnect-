'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
    Heart, MessageSquare, Share2, Camera, Search, MapPin,
    ShieldCheck, TrendingUp, Image as ImageIcon, Plus,
    MoreHorizontal, ThumbsUp, Users, Award, PlayCircle
} from 'lucide-react'
import { auth, type User as AuthUser } from '@/lib/auth'

export default function CommunityPage() {
    const [user, setUser] = useState<AuthUser | null>(null)
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [newPostContent, setNewPostContent] = useState('')

    const fetchPosts = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/community/posts')
            const data = await res.json()
            if (Array.isArray(data)) {
                setPosts(data)
            }
        } catch (error) {
            console.error('Failed to fetch posts:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setUser(auth.getUser())
        fetchPosts()
    }, [])

    const handleCreatePost = async () => {
        if (!newPostContent.trim() || !user) return

        try {
            const res = await fetch('http://localhost:5000/api/community/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    author: user.name,
                    location: 'Sierra Leone', // Could be dynamic
                    content: newPostContent,
                    tags: []
                })
            })
            if (res.ok) {
                setNewPostContent('')
                fetchPosts() // Refresh feed
            }
        } catch (error) {
            console.error('Failed to create post:', error)
        }
    }

    const toggleLike = async (id: string) => {
        try {
            await fetch(`http://localhost:5000/api/community/posts/${id}/like`, { method: 'POST' })
            // Optimistic update
            setPosts(prev => prev.map(post => {
                if (post.id === id) {
                    return {
                        ...post,
                        liked: !post.liked,
                        likes_count: post.liked ? post.likes_count - 1 : post.likes_count + 1
                    }
                }
                return post
            }))
        } catch (error) {
            console.error('Failed to like post:', error)
        }
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />

            {/* Cinematic Header - Synchronized with Mobile & Landing */}
            <div className="bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] pt-32 pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1.5 mb-6 inline-flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
                        <Users className="w-3 h-3" />
                        Farmer Connect Hub
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                        The National <br />
                        <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Farming Community</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
                        Join <span className="text-white font-bold">25,000+ farmers</span> sharing knowledge, solving challenges, and growing together across Sierra Leone.
                    </p>

                    {/* Header Metrics */}
                    <div className="flex justify-center gap-8 mt-12">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-white">1.2k</span>
                            <span className="text-xs uppercase tracking-widest text-white/60 font-bold">Daily Posts</span>
                        </div>
                        <div className="w-px h-12 bg-white/20"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-black text-white">500+</span>
                            <span className="text-xs uppercase tracking-widest text-white/60 font-bold">Experts Online</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-20 relative z-20 pb-20">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Left Sidebar - Profile & Filters */}
                    <aside className="lg:w-80 space-y-6 hidden lg:block">
                        <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
                            <div className="h-24 bg-gradient-to-r from-slate-800 to-slate-900"></div>
                            <div className="px-6 pb-6 -mt-10 text-center">
                                <div className="w-20 h-20 mx-auto bg-white rounded-2xl p-1 shadow-lg mb-3 flex items-center justify-center">
                                    <div className="w-full h-full bg-slate-100 rounded-xl flex items-center justify-center text-2xl font-black text-slate-400">
                                        {user?.name?.charAt(0) || 'G'}
                                    </div>
                                </div>
                                <h3 className="font-black text-slate-900 text-lg">{user?.name || 'Guest User'}</h3>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">{user?.role || 'Visitor'}</p>

                                <div className="grid grid-cols-2 gap-2 text-center py-4 border-t border-slate-100">
                                    <div>
                                        <div className="font-black text-slate-900 text-lg">12</div>
                                        <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Posts</div>
                                    </div>
                                    <div>
                                        <div className="font-black text-slate-900 text-lg">148</div>
                                        <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Likes</div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card className="border-none shadow-xl rounded-[2rem] p-6">
                            <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">Trending Topics</h4>
                            <div className="space-y-3">
                                {['#RiceHarvest2025', '#PestControl', '#MarketPrices', '#ClimateSmart', '#AgriTech'].map(tag => (
                                    <div key={tag} className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-sm font-semibold text-slate-600 group-hover:text-branded transition-colors">{tag}</span>
                                        <span className="text-xs text-slate-400 font-medium">2.4k</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </aside>

                    {/* Main Feed */}
                    <main className="flex-1 max-w-3xl mx-auto w-full space-y-6">

                        {/* Create Post Widget */}
                        <Card className="border-none shadow-xl rounded-[2rem] p-6 bg-white overflow-hidden">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-xl flex-shrink-0 flex items-center justify-center text-lg font-black text-slate-400">
                                    {user?.name?.charAt(0) || 'G'}
                                </div>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        value={newPostContent}
                                        onChange={(e) => setNewPostContent(e.target.value)}
                                        placeholder="What's happening on your farm today?"
                                        className="w-full h-12 bg-slate-50 rounded-xl px-4 font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all placeholder:text-slate-400"
                                    />
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex gap-2">
                                            <Button variant="ghost" className="h-9 px-3 rounded-lg text-slate-500 hover:text-sky-500 hover:bg-sky-50 transition-colors gap-2">
                                                <ImageIcon className="w-4 h-4" />
                                                <span className="text-xs font-bold uppercase tracking-wider">Photo</span>
                                            </Button>
                                            <Button variant="ghost" className="h-9 px-3 rounded-lg text-slate-500 hover:text-emerald-500 hover:bg-emerald-50 transition-colors gap-2">
                                                <PlayCircle className="w-4 h-4" />
                                                <span className="text-xs font-bold uppercase tracking-wider">Video</span>
                                            </Button>
                                            <Button variant="ghost" className="h-9 px-3 rounded-lg text-slate-500 hover:text-purple-500 hover:bg-purple-50 transition-colors gap-2 hidden sm:flex">
                                                <Award className="w-4 h-4" />
                                                <span className="text-xs font-bold uppercase tracking-wider">Milestone</span>
                                            </Button>
                                        </div>
                                        <Button onClick={handleCreatePost} disabled={loading} className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl px-6 font-bold text-xs uppercase tracking-widest shadow-lg shadow-purple-500/20">
                                            {loading ? '...' : 'Post'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Feed Posts */}
                        {posts.map(post => (
                            <Card key={post.id} className="border-none shadow-lg rounded-[2.5rem] overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex gap-3">
                                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-lg font-black text-slate-500 border border-slate-100">
                                                {post.author_name ? post.author_name.charAt(0) : '?'}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="font-black text-slate-900">{post.author_name}</h3>
                                                    {post.isSpecialist && (
                                                        <ShieldCheck className="w-4 h-4 text-[#8B5CF6] fill-[#8B5CF6]/10" />
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {post.location || 'Unknown'}</span>
                                                    <span>•</span>
                                                    <span>{post.timestamp ? new Date(post.timestamp).toLocaleDateString() : 'Just now'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Button variant="ghost" className="h-8 w-8 p-0 rounded-full hover:bg-slate-100 text-slate-400">
                                            <MoreHorizontal className="w-5 h-5" />
                                        </Button>
                                    </div>

                                    <p className="text-slate-700 leading-relaxed mb-4 font-medium text-[15px]">
                                        {post.content}
                                    </p>

                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.map((tag: string) => (
                                                <span key={tag} className="text-[#8B5CF6] text-sm font-bold hover:underline cursor-pointer">{tag}</span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Mock Image for Post 1 (id check might fail if types differ) */}
                                    {post.image_url && (
                                        <div className="mb-4 rounded-2xl overflow-hidden bg-slate-100 h-64 relative group cursor-pointer">
                                            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-black uppercase tracking-widest bg-slate-200">
                                                Image
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                        <div className="flex gap-6">
                                            <button
                                                onClick={() => toggleLike(post.id)}
                                                className={`flex items-center gap-2 text-sm font-bold transition-colors ${post.liked ? 'text-rose-500' : 'text-slate-500 hover:text-rose-500'}`}
                                            >
                                                <Heart className={`w-5 h-5 ${post.liked ? 'fill-rose-500' : ''}`} />
                                                <span>{post.likes_count}</span>
                                            </button>
                                            <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-[#8B5CF6] transition-colors">
                                                <MessageSquare className="w-5 h-5" />
                                                <span>{post.comments_count}</span>
                                            </button>
                                        </div>
                                        <button className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">
                                            <Share2 className="w-5 h-5" />
                                            <span className="hidden sm:inline">Share</span>
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        ))}

                        <div className="py-8 text-center">
                            <Button variant="ghost" className="text-slate-400 font-black uppercase tracking-widest text-xs hover:text-[#8B5CF6] hover:bg-transparent">
                                Load More Updates
                            </Button>
                        </div>

                    </main>

                    {/* Right Sidebar - Suggested & Events */}
                    <aside className="lg:w-80 space-y-6 hidden xl:block">
                        <Card className="border-none shadow-xl rounded-[2rem] p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest">Suggested Experts</h4>
                                <a href="#" className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-widest">View All</a>
                            </div>
                            <div className="space-y-4">
                                {['Dr. Samuel Coker', 'AgriTech Solutions', 'Green Valley Co-op'].map((expert, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 text-xs">
                                                {expert.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">{expert}</div>
                                                <div className="text-[10px] text-slate-400 font-bold uppercase">Specialist</div>
                                            </div>
                                        </div>
                                        <Button size="sm" variant="outline" className="h-8 rounded-full text-[10px] font-black uppercase tracking-wider px-3 border-slate-200 hover:border-[#8B5CF6] hover:text-[#8B5CF6]">
                                            Follow
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="border-none shadow-xl rounded-[2rem] p-6 bg-gradient-to-br from-[#1EB53A] to-[#15803d] text-white">
                            <h4 className="text-xs font-black  uppercase tracking-widest mb-2 opacity-80">Upcoming Event</h4>
                            <h3 className="font-black text-xl mb-1">National Rice Fair</h3>
                            <div className="flex items-center gap-2 text-xs font-medium opacity-90 mb-4">
                                <PlayCircle className="w-4 h-4" /> Virtual & In-Person
                            </div>
                            <Button className="w-full bg-white text-[#15803d] hover:bg-white/90 font-black uppercase tracking-widest text-[10px] rounded-xl h-10 shadow-lg">
                                Register Now
                            </Button>
                        </Card>
                    </aside>
                </div>
            </div>
        </div>
    )
}
