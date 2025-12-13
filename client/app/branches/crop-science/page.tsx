'use client'

import { Microscope, ClipboardList, BarChart2, Sprout } from 'lucide-react'

export default function CropSciencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Microscope className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Crop Science: Variety Trial Tracker</h1>
          </div>
          <p className="text-purple-100 max-w-2xl">
            Participate in citizen science by logging the performance of new crop varieties on your farm and accessing shared trial data.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <ClipboardList className="w-5 h-5 text-purple-600" />
                Log New Observation
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Crop Variety</label>
                    <select className="w-full p-2 border rounded-lg bg-gray-50">
                      <option>NERICA Rice L-19</option>
                      <option>Cassava SLICASS-4</option>
                      <option>Maize DMR-ESR-W</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Growth Stage</label>
                    <select className="w-full p-2 border rounded-lg bg-gray-50">
                      <option>Germination</option>
                      <option>Vegetative</option>
                      <option>Flowering</option>
                      <option>Maturity</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Performance Rating (1-5)</label>
                  <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <label key={num} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="rating" className="text-purple-600" />
                        <span>{num}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Observations (Pests, Disease, Yield)</label>
                  <textarea className="w-full p-2 border rounded-lg bg-gray-50 h-24" placeholder="e.g. Showed high resistance to stem borers..."></textarea>
                </div>

                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Submit Data
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Community Trial Results</h2>
              <div className="space-y-4">
                {[
                  { variety: 'NERICA Rice L-19', location: 'Bo', yield: 'High', resistance: 'Good', reporter: 'Farmer John' },
                  { variety: 'Cassava SLICASS-4', location: 'Kenema', yield: 'Very High', resistance: 'Excellent', reporter: 'Co-op Alpha' },
                  { variety: 'Maize DMR-ESR-W', location: 'Makeni', yield: 'Moderate', resistance: 'Fair', reporter: 'Farm Tech Ltd' },
                ].map((result, i) => (
                  <div key={i} className="p-4 border rounded-lg bg-gray-50">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{result.variety}</h3>
                      <span className="text-xs text-gray-500">{result.location}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                      <div>Yield: <span className="font-medium text-gray-900">{result.yield}</span></div>
                      <div>Resistance: <span className="font-medium text-gray-900">{result.resistance}</span></div>
                    </div>
                    <div className="text-xs text-gray-400">Reported by {result.reporter}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
              <h3 className="font-semibold text-purple-900 mb-4 flex items-center gap-2">
                <BarChart2 className="w-5 h-5" />
                Top Performers
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-purple-800">Cassava SLICASS-4</span>
                    <span className="font-bold text-purple-900">92% Success</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-purple-800">Sweet Potato IP-12</span>
                    <span className="font-bold text-purple-900">88% Success</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-green-600" />
                Active Trials
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Join ongoing research trials to receive free seed samples and technical support.
              </p>
              <button className="w-full border border-purple-600 text-purple-600 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
                View Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
