'use client'

import { useState } from 'react'
import { Sprout, Calendar, ArrowRight, RotateCw, AlertCircle } from 'lucide-react'

export default function AgronomyPage() {
  const [selectedSeason, setSelectedSeason] = useState('Season 1')
  
  const rotationPlan = [
    { season: 'Season 1', crop: 'Maize', family: 'Grass', nutrient: 'Heavy Feeder' },
    { season: 'Season 2', crop: 'Beans', family: 'Legume', nutrient: 'Nitrogen Fixer' },
    { season: 'Season 3', crop: 'Cassava', family: 'Root', nutrient: 'Moderate Feeder' },
    { season: 'Season 4', crop: 'Fallow', family: 'Cover Crop', nutrient: 'Restorative' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sprout className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Agronomy: Crop Rotation Planner</h1>
          </div>
          <p className="text-green-100 max-w-2xl">
            Plan your planting cycles to maintain soil health, break pest cycles, and optimize yields through scientific crop rotation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <RotateCw className="w-5 h-5 text-green-600" />
                Current Rotation Plan
              </h2>
              
              <div className="space-y-4">
                {rotationPlan.map((plan, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border rounded-lg hover:border-green-200 transition-colors">
                    <div className="w-24 font-medium text-gray-500">{plan.season}</div>
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{plan.crop}</div>
                      <div className="text-sm text-gray-500">{plan.family} • {plan.nutrient}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      plan.family === 'Legume' ? 'bg-blue-100 text-blue-700' :
                      plan.family === 'Grass' ? 'bg-yellow-100 text-yellow-700' :
                      plan.family === 'Root' ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {plan.family}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Rotation Tip</h3>
                <p className="text-blue-800 text-sm">
                  Always follow a heavy feeder (like Maize) with a legume (like Beans) to replenish soil nitrogen naturally. Avoid planting crops from the same family consecutively to prevent disease buildup.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold mb-4">Crop Library</h3>
              <div className="space-y-2">
                {['Rice', 'Groundnut', 'Sweet Potato', 'Sorghum', 'Vegetables'].map((crop) => (
                  <button key={crop} className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-gray-700 text-sm transition-colors">
                    + Add {crop}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
