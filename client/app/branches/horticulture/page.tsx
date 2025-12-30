'use client'

import { Leaf, Droplets, Scissors, Sun } from 'lucide-react'

export default function HorticulturePage() {
  const plants = [
    { name: 'Mango Tree', type: 'Fruit Tree', status: 'Flowering', nextAction: 'Pest Monitor', date: 'Oct 25' },
    { name: 'Tomato Garden', type: 'Vegetable', status: 'Fruiting', nextAction: 'Harvest', date: 'Oct 22' },
    { name: 'Citrus Grove', type: 'Fruit Tree', status: 'Vegetative', nextAction: 'Pruning', date: 'Nov 10' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Horticulture: Orchard & Garden Manager</h1>
          </div>
          <p className="text-primary-foreground/90 max-w-2xl">
            Manage your fruit trees, vegetable gardens, and ornamental plants with precise care schedules and growth tracking.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-xl shadow-sm border border-border border-l-4 border-l-secondary">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm">Irrigation</span>
              <Droplets className="w-5 h-5 text-secondary" />
            </div>
            <div className="text-2xl font-bold text-foreground">Daily</div>
            <div className="text-sm text-muted-foreground">Next: 6:00 AM</div>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm border border-border border-l-4 border-l-primary">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm">Pruning</span>
              <Scissors className="w-5 h-5 text-primary" />
            </div>
            <div className="text-2xl font-bold text-foreground">3 Trees</div>
            <div className="text-sm text-muted-foreground">Due this week</div>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm border border-border border-l-4 border-l-accent">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground text-sm">Sunlight</span>
              <Sun className="w-5 h-5 text-accent" />
            </div>
            <div className="text-2xl font-bold text-foreground">Optimal</div>
            <div className="text-sm text-muted-foreground">UV Index: Moderate</div>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-sm overflow-hidden border border-border">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="font-semibold text-foreground">My Plants</h2>
          </div>
          <div className="divide-y divide-border">
            {plants.map((plant, index) => (
              <div key={index} className="p-6 flex items-center justify-between hover:bg-muted/50 transition-colors">
                <div>
                  <h3 className="font-medium text-foreground">{plant.name}</h3>
                  <p className="text-sm text-muted-foreground">{plant.type} • {plant.status}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-primary">{plant.nextAction}</div>
                  <div className="text-xs text-muted-foreground">Due: {plant.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
