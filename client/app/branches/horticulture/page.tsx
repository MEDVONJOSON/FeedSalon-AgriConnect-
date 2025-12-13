'use client'

import { Leaf, Droplets, Scissors, Sun } from 'lucide-react'

export default function HorticulturePage() {
  const plants = [
    { name: 'Mango Tree', type: 'Fruit Tree', status: 'Flowering', nextAction: 'Pest Monitor', date: 'Oct 25' },
    { name: 'Tomato Garden', type: 'Vegetable', status: 'Fruiting', nextAction: 'Harvest', date: 'Oct 22' },
    { name: 'Citrus Grove', type: 'Fruit Tree', status: 'Vegetative', nextAction: 'Pruning', date: 'Nov 10' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-emerald-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Horticulture: Orchard & Garden Manager</h1>
          </div>
          <p className="text-emerald-100 max-w-2xl">
            Manage your fruit trees, vegetable gardens, and ornamental plants with precise care schedules and growth tracking.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">Irrigation</span>
              <Droplets className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-2xl font-bold">Daily</div>
            <div className="text-sm text-gray-500">Next: 6:00 AM</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">Pruning</span>
              <Scissors className="w-5 h-5 text-orange-500" />
            </div>
            <div className="text-2xl font-bold">3 Trees</div>
            <div className="text-sm text-gray-500">Due this week</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-500 text-sm">Sunlight</span>
              <Sun className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="text-2xl font-bold">Optimal</div>
            <div className="text-sm text-gray-500">UV Index: Moderate</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-900">My Plants</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {plants.map((plant, index) => (
              <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div>
                  <h3 className="font-medium text-gray-900">{plant.name}</h3>
                  <p className="text-sm text-gray-500">{plant.type} • {plant.status}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-emerald-600">{plant.nextAction}</div>
                  <div className="text-xs text-gray-400">Due: {plant.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
