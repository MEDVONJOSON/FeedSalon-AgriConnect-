'use client'

import { useState, useRef, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import {
    Bot, Send, Paperclip, FileText, CloudRain, TrendingUp,
    Sprout, AlertTriangle, CheckCircle2, ChevronRight, Loader2
} from 'lucide-react'

interface Message {
    id: string
    role: 'user' | 'assistant'
    content: string
    context?: string
    action?: string
    timestamp: Date
}

export default function AgriAnalystPage() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'Hello! I am your Agri-Analyst AI. I can help you optimize your farm using your connected data sources. Ask me about fertilizer rates, profit margins, or pest risks.',
            timestamp: new Date()
        }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            const response = await fetch('http://localhost:5000/api/agri-analyst/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: userMessage.content })
            })

            const data = await response.json()

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: data.answer,
                context: data.context,
                action: data.action,
                timestamp: new Date()
            }

            setMessages(prev => [...prev, botMessage])
        } catch (error) {
            console.error('Error sending message:', error)
            // Fallback error message
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: 'Sorry, I encountered an error processing your request. Please ensure the backend server is running.',
                timestamp: new Date()
            }])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navigation />

            <div className="flex-1 container mx-auto px-4 py-6 flex gap-6 h-[calc(100vh-64px)]">
                {/* Sidebar - Data Sources */}
                <div className="hidden md:flex flex-col w-80 gap-4">
                    <Card className="p-4 flex-1 bg-white shadow-sm border-none">
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-green-600" />
                            Data Sources
                        </h3>

                        <div className="space-y-3">
                            <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-sm text-green-900">Soil Reports</span>
                                    <Badge variant="outline" className="bg-white text-green-700 border-green-200">Active</Badge>
                                </div>
                                <p className="text-xs text-green-700">Last updated: 2 days ago</p>
                            </div>

                            <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-sm text-blue-900">Weather Models</span>
                                    <Badge variant="outline" className="bg-white text-blue-700 border-blue-200">Live</Badge>
                                </div>
                                <p className="text-xs text-blue-700">Local Station: Bo District</p>
                            </div>

                            <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-sm text-purple-900">Market Prices</span>
                                    <Badge variant="outline" className="bg-white text-purple-700 border-purple-200">Live</Badge>
                                </div>
                                <p className="text-xs text-purple-700">Source: National Exchange</p>
                            </div>

                            <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-medium text-sm text-orange-900">Pest Logs</span>
                                    <Badge variant="outline" className="bg-white text-orange-700 border-orange-200">Active</Badge>
                                </div>
                                <p className="text-xs text-orange-700">3 recent entries</p>
                            </div>
                        </div>

                        <Button variant="outline" className="w-full mt-6 border-dashed">
                            <Paperclip className="w-4 h-4 mr-2" />
                            Connect New Source
                        </Button>
                    </Card>
                </div>

                {/* Main Chat Area */}
                <div className="flex-1 flex flex-col bg-white rounded-xl shadow-sm border overflow-hidden">
                    {/* Chat Header */}
                    <div className="p-4 border-b bg-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-100 p-2 rounded-lg">
                                <Bot className="w-6 h-6 text-green-700" />
                            </div>
                            <div>
                                <h2 className="font-bold text-gray-900">Agri-Analyst AI</h2>
                                <p className="text-xs text-gray-500">Powered by Advanced Agricultural Models</p>
                            </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-50 text-green-700">
                            <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                            Online
                        </Badge>
                    </div>

                    {/* Messages Area */}
                    <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                        <div className="space-y-6">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-green-100'
                                        }`}>
                                        {msg.role === 'user' ? (
                                            <span className="text-sm font-bold text-gray-600">You</span>
                                        ) : (
                                            <Bot className="w-5 h-5 text-green-700" />
                                        )}
                                    </div>

                                    <div className={`flex flex-col gap-2 max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                        {/* Main Content */}
                                        <div className={`p-4 rounded-2xl ${msg.role === 'user'
                                                ? 'bg-primary text-primary-foreground rounded-tr-none'
                                                : 'bg-gray-100 text-gray-800 rounded-tl-none'
                                            }`}>
                                            <p className="text-sm leading-relaxed">{msg.content}</p>
                                        </div>

                                        {/* Structured Response (Assistant Only) */}
                                        {msg.role === 'assistant' && (msg.context || msg.action) && (
                                            <div className="w-full space-y-2 mt-1">
                                                {/* Contextual Insight */}
                                                {msg.context && (
                                                    <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl text-sm">
                                                        <div className="flex items-center gap-2 text-blue-700 font-semibold mb-1">
                                                            <TrendingUp className="w-4 h-4" />
                                                            Contextual Insight
                                                        </div>
                                                        <p className="text-blue-800">{msg.context}</p>
                                                    </div>
                                                )}

                                                {/* Actionable Next Step */}
                                                {msg.action && (
                                                    <div className="bg-green-50 border border-green-100 p-3 rounded-xl text-sm">
                                                        <div className="flex items-center gap-2 text-green-700 font-semibold mb-1">
                                                            <CheckCircle2 className="w-4 h-4" />
                                                            Actionable Next Step
                                                        </div>
                                                        <p className="text-green-800">{msg.action}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        <span className="text-xs text-gray-400 px-1">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-5 h-5 text-green-700" />
                                    </div>
                                    <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                                        <span className="text-sm text-gray-500">Analyzing data...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>

                    {/* Input Area */}
                    <div className="p-4 border-t bg-white">
                        <div className="flex gap-2">
                            <Input
                                placeholder="Ask about your crops, soil, or market trends..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                className="flex-1"
                                disabled={isLoading}
                            />
                            <Button onClick={handleSend} disabled={isLoading || !input.trim()} className="bg-green-600 hover:bg-green-700">
                                <Send className="w-4 h-4" />
                            </Button>
                        </div>
                        <p className="text-xs text-center text-gray-400 mt-2">
                            Agri-Analyst AI can make mistakes. Please verify critical farming decisions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
