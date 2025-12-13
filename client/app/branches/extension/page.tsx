'use client'

import { Users, MessageSquare, Star, Award } from 'lucide-react'

export default function ExtensionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Agri-Extension: Mentorship Network</h1>
          </div>
          <p className="text-indigo-100 max-w-2xl">
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
            <div key={i} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 overflow-hidden">
                <div className="w-full h-full bg-indigo-100 flex items-center justify-center text-indigo-300">
                  <Users className="w-12 h-12" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{mentor.name}</h3>
              <p className="text-indigo-600 font-medium mb-1">{mentor.role}</p>
              <div className="flex items-center gap-1 text-yellow-500 mb-4">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-gray-700 font-medium">{mentor.rating}</span>
                <span className="text-gray-400 text-sm">({mentor.exp} Exp)</span>
              </div>
              
              <div className="w-full bg-gray-50 rounded-lg p-3 mb-6">
                <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">Specialization</div>
                <div className="text-gray-900 font-medium">{mentor.spec}</div>
              </div>

              <div className="flex gap-3 w-full">
                <button className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                  Profile
                </button>
                <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2">
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
