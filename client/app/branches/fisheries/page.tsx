'use client'

import { Fish, Thermometer, Droplets, Activity } from 'lucide-react'

export default function FisheriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Fish className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Fisheries: Aquaculture Monitor</h1>
          </div>
          <p className="text-blue-100 max-w-2xl">
            Monitor water quality parameters, track feeding schedules, and manage fish growth for your aquaculture ponds.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Temperature</h3>
              <Thermometer className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">26.5°C</div>
            <div className="text-sm text-green-600 mt-1">Optimal Range</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-cyan-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">pH Level</h3>
              <Droplets className="w-5 h-5 text-cyan-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">7.2</div>
            <div className="text-sm text-green-600 mt-1">Neutral</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-indigo-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Dissolved O2</h3>
              <Activity className="w-5 h-5 text-indigo-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">6.8 mg/L</div>
            <div className="text-sm text-green-600 mt-1">Good</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-teal-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Ammonia</h3>
              <Activity className="w-5 h-5 text-teal-500" />
            </div>
            <div className="text-3xl font-bold text-gray-900">0.02 ppm</div>
            <div className="text-sm text-green-600 mt-1">Safe</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-lg mb-4">Feeding Schedule</h3>
            <div className="space-y-4">
              {[
                { time: '08:00 AM', amount: '5kg', status: 'Completed' },
                { time: '12:00 PM', amount: '3kg', status: 'Pending' },
                { time: '04:00 PM', amount: '5kg', status: 'Pending' },
              ].map((feed, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium">{feed.time}</div>
                  <div className="text-gray-600">{feed.amount} Pellets</div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    feed.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>{feed.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-lg mb-4">Pond Status</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Pond A (Tilapia)</span>
                  <span className="text-sm text-gray-500">Day 45/120</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '37%' }}></div>
                </div>
                <div className="mt-2 text-sm text-gray-600">Estimated Harvest: Dec 15</div>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Pond B (Catfish)</span>
                  <span className="text-sm text-gray-500">Day 90/150</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <div className="mt-2 text-sm text-gray-600">Estimated Harvest: Jan 20</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
