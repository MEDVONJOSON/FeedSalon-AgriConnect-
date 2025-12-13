'use client'

import { Dna, Microscope, ShieldCheck, BookOpen } from 'lucide-react'

export default function BiotechPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Dna className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Biotechnology: Knowledge Bank</h1>
          </div>
          <p className="text-pink-100 max-w-2xl">
            Access information on improved crop varieties, tissue culture techniques, and biosafety regulations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <Microscope className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tissue Culture</h3>
            <p className="text-gray-600 text-sm">
              Learn about rapid multiplication of disease-free planting materials for cassava and bananas.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Dna className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Improved Genetics</h3>
            <p className="text-gray-600 text-sm">
              Catalog of drought-tolerant and pest-resistant crop varieties available in Sierra Leone.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Biosafety</h3>
            <p className="text-gray-600 text-sm">
              Guidelines and regulations regarding the use of genetically modified organisms (GMOs).
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-gray-700" />
            Latest Research & Resources
          </h2>
          <div className="space-y-6">
            {[
              { title: 'High-Yielding Cassava Varieties for 2024', type: 'Report', date: 'Oct 15, 2023' },
              { title: 'Tissue Culture Lab Protocols: A Beginner Guide', type: 'Manual', date: 'Sep 22, 2023' },
              { title: 'Impact of Bio-Fortified Rice on Nutrition', type: 'Study', date: 'Aug 10, 2023' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div>
                  <h4 className="font-medium text-lg text-gray-900 hover:text-pink-600 cursor-pointer transition-colors">{item.title}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">{item.type}</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                </div>
                <button className="text-pink-600 font-medium text-sm hover:underline">Read</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
