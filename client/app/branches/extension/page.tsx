'use client'

import { Users, MessageSquare, Star, Award } from 'lucide-react'

export default function ExtensionPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Agri-Extension: Mentorship Network</h1>
          </div>
          <p className="text-secondary-foreground/90 max-w-2xl">
            Connect with experienced farmers and extension officers for personalized guidance, problem-solving, and knowledge sharing.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { name: 'Dr. Samuel Kamara', role: 'Soil Scientist', exp: '15 Years', spec: 'Soil Fertility', rating: 4.9 },
            { name: 'Mariama Sesay', role: 'Master Farmer', exp: '20 Years', spec: 'Rice Cultivation', rating: 5.0 },
            { name: 'John Koroma', role: 'Agri-Business Consultant', exp: '10 Years', spec: 'Market Linkages', rating: 4.8 },
            { name: 'Fatmata Bangura', role: 'Extension Officer', exp: '8 Years', spec: 'Pest Management', rating: 4.7 },
            { name: 'Ibrahim Turay', role: 'Livestock Specialist', exp: '12 Years', spec: 'Poultry & Small Ruminants', rating: 4.9 },
            { name: 'Sarah Conteh', role: 'Climate Expert', exp: '7 Years', spec: 'Climate Smart Agriculture', rating: 4.8 },
          ].map((mentor, i) => (
            <div key={i} className="bg-card rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow border border-border">
              <div className="w-24 h-24 bg-muted rounded-full mb-4 overflow-hidden">
                <div className="w-full h-full bg-secondary/10 flex items-center justify-center text-secondary/40">
                  <Users className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{mentor.name}</h3>
              <p className="text-secondary font-medium mb-1">{mentor.role}</p>
              <div className="flex items-center gap-1 text-warning mb-4">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span className="text-foreground font-medium">{mentor.rating}</span>
                <span className="text-muted-foreground text-sm">({mentor.exp} Exp)</span>
              </div>

              <div className="w-full bg-muted/50 rounded-lg p-3 mb-6">
                <div className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-1">Specialization</div>
                <div className="text-foreground font-medium">{mentor.spec}</div>
              </div>

              <div className="flex gap-3 w-full">
                <button className="flex-1 border border-secondary text-secondary py-2 rounded-lg font-medium hover:bg-secondary/10 transition-colors">
                  Profile
                </button>
                <button className="flex-1 bg-secondary text-secondary-foreground py-2 rounded-lg font-medium hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
