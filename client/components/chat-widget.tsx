'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2, Mic, MicOff, Image as ImageIcon, Volume2, VolumeX } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'

interface Message {
    id: string
    role: 'user' | 'assistant'
    content: string
    context?: string
    action?: string
    timestamp: Date
    imageUrl?: string
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'Hi! I\'m Agri Connect, your agricultural assistant. I can help with crop recommendations, disease prediction, and soil health. How can I assist you today?',
            timestamp: new Date()
        }
    ])
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isRecording, setIsRecording] = useState(false)
    const [isSpeaking, setIsSpeaking] = useState(false)
    const [selectedImage, setSelectedImage] = useState<File | null>(null)
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const messagesEndRef = useRef<HTMLDivElement>(null)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const audioChunksRef = useRef<Blob[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null)
    const speechSynthesisRef = useRef<SpeechSynthesisUtterance | null>(null)

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages, isOpen])

    const sendMessage = async () => {
        if ((!input.trim() && !selectedImage) || isLoading) return

        const userMessage = {
            id: Date.now().toString(),
            role: 'user' as const,
            content: input || (selectedImage ? '📷 [Image uploaded]' : ''),
            imageUrl: imagePreview || undefined,
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        try {
            let response;

            // If image is uploaded, use disease detection API
            if (selectedImage) {
                const reader = new FileReader()
                reader.onloadend = async () => {
                    const diseaseResponse = await fetch('http://localhost:5000/api/ai/disease-detection', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            imageData: reader.result,
                            cropType: 'unknown'
                        })
                    })

                    const diseaseData = await diseaseResponse.json()
                    let botContent = `🔍 Disease Analysis:\n\n**${diseaseData.diagnosis.disease}**\nConfidence: ${diseaseData.diagnosis.confidence}\nSeverity: ${diseaseData.diagnosis.severity}\n\n**Treatment:**\n${diseaseData.treatment}\n\n**Prevention:**\n${diseaseData.prevention}`

                    const botMessage = {
                        id: (Date.now() + 1).toString(),
                        role: 'assistant' as const,
                        content: botContent,
                        timestamp: new Date()
                    }

                    setMessages(prev => [...prev, botMessage])
                    speakResponse(botContent)
                    setIsLoading(false)
                    setSelectedImage(null)
                    setImagePreview(null)
                }
                reader.readAsDataURL(selectedImage)
                return
            }

            // Regular text chat
            response = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input })
            })

            const data = await response.json()

            let botContent = data.answer
            if (data.tips && data.tips.length > 0) {
                botContent += '\n\n💡 Tips:\n' + data.tips.map((tip: string) => `• ${tip}`).join('\n')
            }

            const botMessage = {
                id: (Date.now() + 1).toString(),
                role: 'assistant' as const,
                content: botContent,
                timestamp: new Date()
            }

            setMessages(prev => [...prev, botMessage])
            speakResponse(data.answer)
        } catch (error) {
            console.error('Error sending message:', error)
            const errorMessage = {
                id: (Date.now() + 1).toString(),
                role: 'assistant' as const,
                content: 'Sorry, I encountered an error. Please try again later.',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
            const mediaRecorder = new MediaRecorder(stream)
            mediaRecorderRef.current = mediaRecorder
            audioChunksRef.current = []

            mediaRecorder.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data)
            }

            mediaRecorder.onstop = async () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
                await transcribeAudio(audioBlob)
                stream.getTracks().forEach(track => track.stop())
            }

            mediaRecorder.start()
            setIsRecording(true)
        } catch (error) {
            console.error('Error accessing microphone:', error)
            alert('Could not access microphone. Please check permissions.')
        }
    }

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop()
            setIsRecording(false)
        }
    }

    const transcribeAudio = async (audioBlob: Blob) => {
        setInput('🎤 Voice input detected. Please type your question...')
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setSelectedImage(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const speakResponse = (text: string) => {
        if (!('speechSynthesis' in window)) return

        window.speechSynthesis.cancel()

        const cleanText = text
            .replace(/[#*_`~]/g, '')
            .replace(/💡|🌾|✓|⚠|🌱|📷|🔍/g, '')
            .replace(/\n+/g, '. ')

        const utterance = new SpeechSynthesisUtterance(cleanText)
        utterance.rate = 0.9
        utterance.pitch = 1
        utterance.volume = 1

        utterance.onstart = () => setIsSpeaking(true)
        utterance.onend = () => setIsSpeaking(false)

        speechSynthesisRef.current = utterance
        window.speechSynthesis.speak(utterance)
    }

    const toggleSpeech = () => {
        if (isSpeaking) {
            window.speechSynthesis.cancel()
            setIsSpeaking(false)
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#1EB53A] via-[#0072C6] to-[#1EB53A] p-4 flex items-center justify-between text-white shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 p-1 rounded-full backdrop-blur-sm overflow-hidden w-10 h-10 flex items-center justify-center border-2 border-white/30">
                                    <img src="/rubot-icon.png" alt="Agri Connect" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Agri Connect</h3>
                                    <div className="flex items-center gap-1.5 opacity-90">
                                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                        <span className="text-xs font-medium">Online Support</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={toggleSpeech}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm overflow-hidden ${msg.role === 'user' ? 'bg-white' : 'bg-green-100'
                                        }`}>
                                        {msg.role === 'user' ? (
                                            <span className="text-xs font-bold text-slate-700">You</span>
                                        ) : (
                                            <img src="/rubot-icon.png" alt="Agri Connect" className="w-full h-full object-cover" />
                                        )}
                                    </div>

                                    <div className={`flex flex-col gap-1 max-w-[80%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                        <div className={`rounded-2xl px-4 py-2 shadow-sm ${msg.role === 'user'
                                            ? 'bg-[#1EB53A] text-white rounded-tr-none'
                                            : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'
                                            }`}>
                                            {msg.imageUrl && (
                                                <img src={msg.imageUrl} alt="Uploaded" className="max-w-full rounded-lg mb-2" />
                                            )}
                                            <p className="text-sm whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                                        </div>
                                        <span className="text-xs text-slate-400 px-2">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                                        <img src="/rubot-icon.png" alt="Agri Connect" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
                                        <Loader2 className="w-3 h-3 animate-spin text-slate-400" />
                                        <span className="text-xs text-slate-500">Agri Connect is thinking...</span>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Image Preview */}
                        {imagePreview && (
                            <div className="px-4 py-2 bg-slate-100 border-t border-slate-200">
                                <div className="relative inline-block">
                                    <img src={imagePreview} alt="Preview" className="h-20 rounded-lg" />
                                    <button
                                        onClick={() => {
                                            setSelectedImage(null)
                                            setImagePreview(null)
                                        }}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                    >
                                        <X className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-4 bg-white border-t border-slate-200">
                            <div className="flex gap-2">
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="hidden"
                                />
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-600"
                                    title="Upload image"
                                >
                                    <ImageIcon className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={isRecording ? stopRecording : startRecording}
                                    className={`p-2 rounded-lg transition-colors ${isRecording ? 'bg-red-100 text-red-600' : 'hover:bg-slate-100 text-slate-600'
                                        }`}
                                    title={isRecording ? 'Stop recording' : 'Start voice input'}
                                >
                                    {isRecording ? <MicOff className="w-5 h-5 animate-pulse" /> : <Mic className="w-5 h-5" />}
                                </button>
                                <Input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                                    placeholder="Ask about crops, diseases..."
                                    className="flex-1 border-slate-200 focus:border-green-500 focus:ring-green-500"
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={isLoading || (!input.trim() && !selectedImage)}
                                    className="p-2 bg-[#0072C6] text-white rounded-lg hover:bg-[#005a9e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="lg"
                className={`rounded-full w-16 h-16 shadow-xl transition-all duration-300 hover:scale-105 p-0 overflow-hidden ${isOpen
                    ? 'bg-red-500 hover:bg-red-600 rotate-90'
                    : 'bg-transparent hover:bg-transparent shadow-none'
                    }`}
            >
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <div className="w-full h-full relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/rubot-icon.png"
                            alt="Chat with Agri Connect"
                            className="w-full h-full object-contain drop-shadow-lg"
                        />
                    </div>
                )}
            </Button>
        </div>
    )
}
