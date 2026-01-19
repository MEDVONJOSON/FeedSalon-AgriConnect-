
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { MessageSquare, X, Send, Bot } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([
        { role: 'bot', content: 'Hello! I am your Agri AI assistant. Ask me about weather, crops, or market prices.' }
    ])
    const [input, setInput] = useState('')

    const handleSend = () => {
        if (!input.trim()) return
        setMessages(prev => [...prev, { role: 'user', content: input }])
        setInput('')

        // Mock response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'bot', content: 'That is a great question! Based on current data, I recommend checking the weather forecast first.' }])
        }, 1000)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {!isOpen && (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="h-14 w-14 rounded-full bg-primary shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                    <MessageSquare className="h-6 w-6 text-white" />
                </Button>
            )}

            {isOpen && (
                <Card className="w-80 sm:w-96 shadow-2xl border-none overflow-hidden animate-in slide-in-from-bottom-5">
                    <div className="bg-primary p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-full">
                                <Bot className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">Agri AI Assistant</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                                    <span className="text-[10px] text-emerald-100 font-medium">Online</span>
                                </div>
                            </div>
                        </div>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-white/20 h-8 w-8 rounded-full"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="h-96 bg-slate-50 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "max-w-[80%] rounded-2xl p-3 text-sm",
                                    msg.role === 'user'
                                        ? "ml-auto bg-primary text-white rounded-tr-none"
                                        : "bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none"
                                )}
                            >
                                {msg.content}
                            </div>
                        ))}
                    </div>

                    <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
                        <Input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask anything..."
                            className="border-slate-200 focus-visible:ring-primary/20"
                        />
                        <Button onClick={handleSend} size="icon" className="bg-primary hover:bg-primary/90">
                            <Send className="h-4 w-4" />
                        </Button>
                    </div>
                </Card>
            )}
        </div>
    )
}
