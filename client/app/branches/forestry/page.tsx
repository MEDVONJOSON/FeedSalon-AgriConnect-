'use client'

import { TreeDeciduous, Sprout, Wind, Layers } from 'lucide-react'

export default function ForestryPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <TreeDeciduous className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Forestry: Agroforestry Planner</h1>
          </div>
          <p className="text-primary-foreground/90 max-w-2xl">
            Integrate trees into your farming system to improve soil health, provide shade, and generate additional income from timber or fruits.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
              <h2 className="text-xl font-semibold mb-6 text-foreground">Recommended Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold">Alley Cropping</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Planting rows of trees with crops in between. Good for soil fertility and erosion control.</p>
                  <div className="text-xs font-medium text-primary">Best for: Maize, Beans</div>
                </div>

                <div className="border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      <Wind className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold">Windbreaks</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Planting trees around field borders to protect crops from strong winds.</p>
                  <div className="text-xs font-medium text-primary">Best for: Vegetables, Fruit Orchards</div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Tree Species Library</h2>
              <div className="space-y-3">
                {[
                  { name: 'Gliricidia sepium', use: 'Nitrogen Fixing', growth: 'Fast' },
                  { name: 'Leucaena leucocephala', use: 'Fodder & Fuel', growth: 'Very Fast' },
                  { name: 'Acacia mangium', use: 'Timber & Shade', growth: 'Moderate' },
                  { name: 'Moringa oleifera', use: 'Food & Medicine', growth: 'Fast' }
                ].map((tree, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">{tree.name}</div>
                      <div className="text-sm text-muted-foreground">{tree.use}</div>
                    </div>
                    <span className="text-xs bg-card border border-border px-2 py-1 rounded text-muted-foreground">{tree.growth} Growth</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 h-fit">
            <h3 className="font-semibold text-primary mb-4">Benefits Calculator</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Farm Size (Acres)</label>
                <input type="number" className="w-full p-2 border border-border rounded-lg bg-card text-foreground" placeholder="e.g. 5" />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-1">Tree Density</label>
                <select className="w-full p-2 border border-border rounded-lg bg-card text-foreground">
                  <option>Low (Boundary only)</option>
                  <option>Medium (Intercropping)</option>
                  <option>High (Woodlot)</option>
                </select>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Calculate Impact
              </button>
              <div className="pt-4 border-t border-border">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Carbon Sequestered:</span>
                  <span className="font-bold text-foreground">-- tons/yr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-primary">-- SLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
