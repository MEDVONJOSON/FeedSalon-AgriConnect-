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
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Sprout className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Agronomy: Crop Rotation Planner</h1>
          </div>
          <p className="text-primary-foreground/90 max-w-2xl">
            Plan your planting cycles to maintain soil health, break pest cycles, and optimize yields through scientific crop rotation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
                <RotateCw className="w-5 h-5 text-primary" />
                Current Rotation Plan
              </h2>

              <div className="space-y-4">
                {rotationPlan.map((plan, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/20 transition-colors">
                    <div className="w-24 font-medium text-muted-foreground">{plan.season}</div>
                    <ArrowRight className="w-4 h-4 text-border" />
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{plan.crop}</div>
                      <div className="text-sm text-muted-foreground">{plan.family} • {plan.nutrient}</div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${plan.family === 'Legume' ? 'bg-secondary/10 text-secondary' :
                      plan.family === 'Grass' ? 'bg-warning/10 text-warning' :
                        plan.family === 'Root' ? 'bg-info/10 text-info' :
                          'bg-primary/10 text-primary'
                      }`}>
                      {plan.family}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-secondary mb-1">Rotation Tip</h3>
                <p className="text-secondary/80 text-sm">
                  Always follow a heavy feeder (like Maize) with a legume (like Beans) to replenish soil nitrogen naturally. Avoid planting crops from the same family consecutively to prevent disease buildup.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl shadow-sm p-6">
              <h3 className="font-semibold mb-4">Crop Library</h3>
              <div className="space-y-2">
                {['Rice', 'Groundnut', 'Sweet Potato', 'Sorghum', 'Vegetables'].map((crop) => (
                  <button key={crop} className="w-full text-left px-4 py-2 rounded-lg hover:bg-muted text-muted-foreground text-sm transition-colors">
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
