'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, ThumbsUp, Eye, Clock, Plus, Search, User, Filter, Share2 } from 'lucide-react'

interface Discussion {
    id: number
    title: string
    author: string
    time: string
    replies: number
    views: number
    likes: number
    tags: string[]
    content: string
}

export default function ForumPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [discussions] = useState<Discussion[]>([
        {
            id: 1,
            title: 'Best practices for rice farming in Western Area?',
            author: 'John K.',
            time: '2 hours ago',
            replies: 5,
            views: 120,
            likes: 15,
            tags: ['Rice', 'Farming', 'Western Area'],
            content: 'I am looking for advice on the best rice varieties to plant in the Western Area during the rainy season. Any recommendations?'
        },
        {
            id: 2,
            title: 'Dealing with cassava diseases during rainy season',
            author: 'Fatmata M.',
            time: '1 day ago',
            replies: 12,
            views: 340,
            likes: 45,
            tags: ['Cassava', 'Disease Control', 'Rainy Season'],
            content: 'My cassava plants are showing yellowing leaves. I suspect it is mosaic disease. What are the best organic treatments?'
        },
        {
            id: 3,
            title: 'Market prices for cocoa in Kenema town?',
            author: 'Sahr T.',
            time: '3 days ago',
            replies: 8,
            views: 210,
            likes: 28,
            tags: ['Cocoa', 'Market Prices', 'Kenema'],
            content: 'Does anyone know the current buying price for dried cocoa beans in Kenema town? I have 5 bags ready for sale.'
        }
    ])

    const filteredDiscussions = discussions.filter(discussion =>
        discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        discussion.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Premium Gradient Header */}
            <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
                {/* Dynamic Accents */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1 flex items-center gap-2">
                                <MessageSquare className="w-3 h-3" />
                                NATIONAL DISCUSSION HUB
                            </Badge>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">Farmer Community Forum</h1>
                        <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto mb-12">
                            Connect, share knowledge, and learn from <span className="text-white font-black underline decoration-2 underline-offset-4">thousands of fellow farmers</span> across Sierra Leone.
                        </p>

                        {/* Search Bar - Premium National Style */}
                        <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-md p-2 rounded-[2.5rem] shadow-2xl flex flex-col md:row gap-2 border border-white/20">
                            <div className="flex-1 relative flex items-center">
                                <div className="absolute left-6 text-slate-400">
                                    <Search className="w-5 h-5" />
                                </div>
                                <Input
                                    placeholder="Search discussions, topics, or questions..."
                                    className="h-16 border-none shadow-none focus-visible:ring-0 px-16 text-lg font-bold text-slate-800 placeholder:text-slate-400"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <Button className="h-16 px-12 bg-[#0072C6] hover:bg-slate-800 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-all">
                                Search Topics
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 -mt-12 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Sidebar Filters */}
                        <div className="w-full lg:w-1/4 space-y-8">
                            <Card className="p-8 border-none shadow-2xl rounded-[2rem] bg-white sticky top-24">
                                <div className="flex items-center gap-2 mb-8 border-b border-slate-50 pb-4">
                                    <Filter className="w-5 h-5 text-[#1EB53A]" />
                                    <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">Categories</h3>
                                </div>
                                <div className="space-y-3 px-1">
                                    {['General Advice', 'Crop Disease', 'Market Trends', 'Agri-Tech'].map((cat) => (
                                        <div key={cat} className="flex items-center justify-between group cursor-pointer">
                                            <span className="text-sm font-bold text-slate-500 group-hover:text-[#1EB53A] transition-colors">{cat}</span>
                                            <Badge className="bg-slate-50 text-slate-400 group-hover:bg-[#1EB53A]/10 group-hover:text-[#1EB53A]">12</Badge>
                                        </div>
                                    ))}
                                </div>
                                <Button className="w-full h-14 mt-10 bg-[#1EB53A] text-white rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-green-900/10">
                                    <Plus className="w-4 h-4 mr-2" /> New Topic
                                </Button>
                            </Card>
                        </div>

                        {/* Discussions Feed */}
                        <div className="w-full lg:w-3/4 space-y-6">
                            {filteredDiscussions.map((discussion, i) => (
                                <Card key={discussion.id} className="group p-10 border-none shadow-xl hover:shadow-2xl transition-all rounded-[2.5rem] bg-white border-l-8 hover:-translate-y-1" style={{ borderLeftColor: i % 2 === 0 ? '#1EB53A' : '#0072C6' }}>
                                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {discussion.tags.map((tag, idx) => (
                                                    <Badge key={idx} className="bg-slate-50 text-slate-400 border-none font-black px-3 py-1 rounded-full text-[8px] uppercase tracking-widest group-hover:bg-slate-100">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-branded transition-colors leading-tight">
                                                {discussion.title}
                                            </h3>
                                            <div className="flex items-center gap-6 text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">
                                                <span className="flex items-center gap-2 text-slate-700">
                                                    <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                                                        <User className="w-3 h-3" />
                                                    </div>
                                                    {discussion.author}
                                                </span>
                                                <span className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" /> {discussion.time}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex md:flex-col gap-4">
                                            <div className="text-center p-3 bg-slate-50 rounded-2xl min-w-[80px]">
                                                <div className="text-lg font-black text-slate-900">{discussion.replies}</div>
                                                <div className="text-[8px] font-black text-slate-400 uppercase">Replies</div>
                                            </div>
                                            <div className="text-center p-3 bg-slate-50 rounded-2xl min-w-[80px]">
                                                <div className="text-lg font-black text-slate-900">{discussion.views}</div>
                                                <div className="text-[8px] font-black text-slate-400 uppercase">Views</div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 font-medium mb-8 line-clamp-2 px-1 text-lg leading-relaxed">{discussion.content}</p>

                                    <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                                        <div className="flex items-center gap-6 px-1">
                                            <button className="flex items-center gap-2 text-slate-400 hover:text-[#1EB53A] transition-colors font-black uppercase text-[10px] tracking-widest">
                                                <ThumbsUp className="w-5 h-5" /> {discussion.likes} Kudos
                                            </button>
                                            <button className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors font-black uppercase text-[10px] tracking-widest">
                                                <Share2 className="w-5 h-5" /> Share
                                            </button>
                                        </div>
                                        <Button variant="link" className="text-slate-900 font-black uppercase tracking-widest text-[10px] p-0 hover:text-[#1EB53A]">
                                            Open Conversation &rarr;
                                        </Button>
                                    </div>
                                </Card>
                            ))}

                            <div className="pt-12 text-center">
                                <Button className="h-16 px-12 bg-white border border-slate-100 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                                    Load More Conversations
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
