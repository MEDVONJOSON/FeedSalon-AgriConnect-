'use client'

import { Dna, Microscope, ShieldCheck, BookOpen } from 'lucide-react'

export default function BiotechPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Dna className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Biotechnology: Knowledge Bank</h1>
          </div>
          <p className="text-accent-foreground/90 max-w-2xl">
            Access information on improved crop varieties, tissue culture techniques, and biosafety regulations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-border">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
              <Microscope className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tissue Culture</h3>
            <p className="text-gray-600 text-sm">
              Learn about rapid multiplication of disease-free planting materials for cassava and bananas.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-border">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Dna className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Improved Genetics</h3>
            <p className="text-gray-600 text-sm">
              Catalog of drought-tolerant and pest-resistant crop varieties available in Sierra Leone.
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Biosafety</h3>
            <p className="text-gray-600 text-sm">
              Guidelines and regulations regarding the use of genetically modified organisms (GMOs).
            </p>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-sm p-8 border border-border">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
            <BookOpen className="w-6 h-6 text-muted-foreground" />
            Latest Research & Resources
          </h2>
          <div className="space-y-6">
            {[
              { title: 'High-Yielding Cassava Varieties for 2024', type: 'Report', date: 'Oct 15, 2023' },
              { title: 'Tissue Culture Lab Protocols: A Beginner Guide', type: 'Manual', date: 'Sep 22, 2023' },
              { title: 'Impact of Bio-Fortified Rice on Nutrition', type: 'Study', date: 'Aug 10, 2023' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                <div>
                  <h4 className="font-medium text-lg text-foreground hover:text-accent cursor-pointer transition-colors">{item.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-medium bg-muted px-2 py-0.5 rounded text-muted-foreground">{item.type}</span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                </div>
                <button className="text-accent font-medium text-sm hover:underline">Read</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
