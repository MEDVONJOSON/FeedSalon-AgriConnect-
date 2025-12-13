'use client'

import { Database, Layers, FlaskConical, FileText } from 'lucide-react'

export default function SoilSciencePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-amber-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Soil Science: Digital Soil Lab</h1>
          </div>
          <p className="text-amber-100 max-w-2xl">
            Analyze your soil test results, track fertility trends over time, and get precise amendment recommendations.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-amber-500">
            <div className="text-gray-500 text-sm mb-1">Soil pH</div>
            <div className="text-3xl font-bold text-gray-900">6.2</div>
            <div className="text-xs text-green-600 mt-1">Slightly Acidic (Good)</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-blue-500">
            <div className="text-gray-500 text-sm mb-1">Nitrogen (N)</div>
            <div className="text-3xl font-bold text-gray-900">Low</div>
            <div className="text-xs text-red-600 mt-1">Needs Amendment</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-purple-500">
            <div className="text-gray-500 text-sm mb-1">Phosphorus (P)</div>
            <div className="text-3xl font-bold text-gray-900">Med</div>
            <div className="text-xs text-yellow-600 mt-1">Maintenance Dose</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-b-4 border-orange-500">
            <div className="text-gray-500 text-sm mb-1">Potassium (K)</div>
            <div className="text-3xl font-bold text-gray-900">High</div>
            <div className="text-xs text-green-600 mt-1">No Action Needed</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-600" />
              Soil Profile History
            </h2>
            <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-between p-4 border border-dashed border-gray-300">
               {/* Simulated Chart */}
               {[40, 55, 45, 60, 65, 62].map((h, i) => (
                 <div key={i} className="w-12 bg-amber-200 rounded-t-lg relative group hover:bg-amber-300 transition-colors" style={{ height: `${h}%` }}>
                   <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                     {h}% OM
                   </div>
                 </div>
               ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-500 px-2">
              <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Organic Matter Content (%) Trend</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <FlaskConical className="w-5 h-5 text-purple-600" />
                Recommendations
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2"></div>
                  <p className="text-sm text-gray-600">Apply <span className="font-semibold text-gray-900">NPK 15-15-15</span> at 50kg/acre to boost Nitrogen levels.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2"></div>
                  <p className="text-sm text-gray-600">Incorporate organic compost to maintain pH stability.</p>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <p className="text-sm text-gray-600">Schedule next soil test for <span className="font-semibold text-gray-900">April 2024</span>.</p>
                </li>
              </ul>
              <button className="w-full mt-6 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" />
                Download Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
