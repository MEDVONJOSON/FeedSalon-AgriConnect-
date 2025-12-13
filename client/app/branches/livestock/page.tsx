'use client'

import { Activity, Heart, Scale, Syringe } from 'lucide-react'

export default function LivestockPage() {
  const herd = [
    { id: 'C-102', type: 'Cattle', breed: 'Ndama', weight: '350kg', health: 'Good', lastVac: 'Sep 15' },
    { id: 'G-045', type: 'Goat', breed: 'WAD', weight: '25kg', health: 'Excellent', lastVac: 'Oct 01' },
    { id: 'S-088', type: 'Sheep', breed: 'Djallonke', weight: '30kg', health: 'Monitor', lastVac: 'Aug 20' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-orange-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Animal Science: Livestock Health Tracker</h1>
          </div>
          <p className="text-orange-100 max-w-2xl">
            Keep detailed records of your herd's health, vaccination schedules, breeding cycles, and growth performance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
            <div className="p-3 bg-red-100 text-red-600 rounded-lg">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Health Alerts</div>
              <div className="font-bold text-xl">1 Active</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <Syringe className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Vaccinations</div>
              <div className="font-bold text-xl">2 Due</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Avg Weight</div>
              <div className="font-bold text-xl">+5%</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-medium text-gray-500">Tag ID</th>
                <th className="px-6 py-4 font-medium text-gray-500">Type/Breed</th>
                <th className="px-6 py-4 font-medium text-gray-500">Weight</th>
                <th className="px-6 py-4 font-medium text-gray-500">Health Status</th>
                <th className="px-6 py-4 font-medium text-gray-500">Last Vaccination</th>
                <th className="px-6 py-4 font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {herd.map((animal, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{animal.id}</td>
                  <td className="px-6 py-4 text-gray-600">{animal.type} ({animal.breed})</td>
                  <td className="px-6 py-4 text-gray-600">{animal.weight}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      animal.health === 'Good' || animal.health === 'Excellent' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {animal.health}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{animal.lastVac}</td>
                  <td className="px-6 py-4">
                    <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
