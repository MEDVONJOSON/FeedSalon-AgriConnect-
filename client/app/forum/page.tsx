'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, ThumbsUp, Eye, Clock, Plus, Search, User } from 'lucide-react'

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
    const [discussions, setDiscussions] = useState<Discussion[]>([
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
            title: 'Market prices for cocoa in Kenema',
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
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero Section */}
            <section className="bg-green-700 text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">💬 Farmer Community Forum</h1>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Connect, share knowledge, and learn from fellow farmers across Sierra Leone.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto bg-white rounded-full p-2 shadow-xl flex items-center transform hover:scale-[1.02] transition-transform duration-300">
                        <Search className="text-gray-400 ml-4 w-6 h-6" />
                        <input
                            type="text"
                            placeholder="Search discussions, topics, or questions..."
                            className="flex-1 px-4 py-3 outline-none text-gray-700 rounded-full"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button className="rounded-full px-8 py-6 bg-green-600 hover:bg-green-700">
                            Search
                        </Button>
                    </div>
                </div>
            </section>

            {/* Forum Content */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Recent Discussions</h2>
                        <Button className="bg-green-600 hover:bg-green-700">
                            <Plus className="w-4 h-4 mr-2" /> Start New Discussion
                        </Button>
                    </div>

                    <div className="grid gap-6">
                        {filteredDiscussions.map((discussion) => (
                            <Card key={discussion.id} className="hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-green-500">
                                <CardContent className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-green-700 transition-colors">
                                                {discussion.title}
                                            </h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <User className="w-4 h-4" /> {discussion.author}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" /> {discussion.time}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            {discussion.tags.map((tag, idx) => (
                                                <Badge key={idx} variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mb-4 line-clamp-2">{discussion.content}</p>

                                    <div className="flex items-center gap-6 text-sm text-gray-500 border-t pt-4">
                                        <span className="flex items-center gap-2 hover:text-green-600 transition-colors">
                                            <MessageSquare className="w-4 h-4" /> {discussion.replies} Replies
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Eye className="w-4 h-4" /> {discussion.views} Views
                                        </span>
                                        <span className="flex items-center gap-2 hover:text-green-600 transition-colors">
                                            <ThumbsUp className="w-4 h-4" /> {discussion.likes} Likes
                                        </span>
                                        <div className="ml-auto">
                                            <Button variant="link" className="text-green-600 hover:text-green-700 p-0">
                                                View Discussion &rarr;
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline" className="rounded-full px-8">
                            Load More Discussions
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
