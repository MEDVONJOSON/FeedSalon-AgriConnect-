'use client'

import { TreeDeciduous, Sprout, Wind, Layers } from 'lucide-react'

export default function ForestryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <TreeDeciduous className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Forestry: Agroforestry Planner</h1>
          </div>
          <p className="text-teal-100 max-w-2xl">
            Integrate trees into your farming system to improve soil health, provide shade, and generate additional income from timber or fruits.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Recommended Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:border-teal-500 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-teal-100 text-teal-600 rounded-lg">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold">Alley Cropping</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Planting rows of trees with crops in between. Good for soil fertility and erosion control.</p>
                  <div className="text-xs font-medium text-teal-600">Best for: Maize, Beans</div>
                </div>

                <div className="border rounded-lg p-4 hover:border-teal-500 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-teal-100 text-teal-600 rounded-lg">
                      <Wind className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold">Windbreaks</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Planting trees around field borders to protect crops from strong winds.</p>
                  <div className="text-xs font-medium text-teal-600">Best for: Vegetables, Fruit Orchards</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Tree Species Library</h2>
              <div className="space-y-3">
                {[
                  { name: 'Gliricidia sepium', use: 'Nitrogen Fixing', growth: 'Fast' },
                  { name: 'Leucaena leucocephala', use: 'Fodder & Fuel', growth: 'Very Fast' },
                  { name: 'Acacia mangium', use: 'Timber & Shade', growth: 'Moderate' },
                  { name: 'Moringa oleifera', use: 'Food & Medicine', growth: 'Fast' }
                ].map((tree, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{tree.name}</div>
                      <div className="text-sm text-gray-500">{tree.use}</div>
                    </div>
                    <span className="text-xs bg-white border px-2 py-1 rounded text-gray-600">{tree.growth} Growth</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 h-fit">
            <h3 className="font-semibold text-teal-900 mb-4">Benefits Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Farm Size (Acres)</label>
                <input type="number" className="w-full p-2 border rounded-lg" placeholder="e.g. 5" />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal-800 mb-1">Tree Density</label>
                <select className="w-full p-2 border rounded-lg">
                  <option>Low (Boundary only)</option>
                  <option>Medium (Intercropping)</option>
                  <option>High (Woodlot)</option>
                </select>
              </div>
              <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Calculate Impact
              </button>
              <div className="pt-4 border-t border-teal-200">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-teal-800">Carbon Sequestered:</span>
                  <span className="font-bold text-teal-900">-- tons/yr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-teal-800">Est. Timber Value:</span>
                  <span className="font-bold text-teal-900">-- SLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
