'use client'

import { Activity, Heart, Scale, Syringe } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function LivestockPage() {
  const herd = [
    { id: 'C-102', type: 'Cattle', breed: 'Ndama', weight: '350kg', health: 'Good', lastVac: 'Sep 15' },
    { id: 'G-045', type: 'Goat', breed: 'WAD', weight: '25kg', health: 'Excellent', lastVac: 'Oct 01' },
    { id: 'S-088', type: 'Sheep', breed: 'Djallonke', weight: '30kg', health: 'Monitor', lastVac: 'Aug 20' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Animal Science: Livestock Health Tracker</h1>
          </div>
          <p className="text-primary-foreground/90 max-w-2xl">
            Keep detailed records of your herd's health, vaccination schedules, breeding cycles, and growth performance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card p-4 rounded-xl shadow-sm flex items-center gap-4 border border-border">
            <div className="p-3 bg-destructive/10 text-destructive rounded-lg">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Health Alerts</div>
              <div className="font-bold text-xl text-foreground">1 Active</div>
            </div>
          </div>
          <Card className="p-4 rounded-xl shadow-sm flex items-center gap-4 border border-border">
            <div className="p-3 bg-info/10 text-info rounded-lg">
              <Syringe className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Vaccinations</div>
              <div className="font-bold text-xl text-foreground">2 Due</div>
            </div>
          </Card>
          <div className="bg-card p-4 rounded-xl shadow-sm flex items-center gap-4 border border-border">
            <div className="p-3 bg-primary/10 text-primary rounded-lg">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Avg Weight</div>
              <div className="font-bold text-xl text-foreground">+5%</div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-sm overflow-hidden border border-border">
          <table className="w-full text-left">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium text-muted-foreground">Tag ID</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Type/Breed</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Weight</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Health Status</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Last Vaccination</th>
                <th className="px-6 py-4 font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {herd.map((animal, index) => (
                <tr key={index} className="hover:bg-muted/30">
                  <td className="px-6 py-4 font-medium text-foreground">{animal.id}</td>
                  <td className="px-6 py-4 text-muted-foreground">{animal.type} ({animal.breed})</td>
                  <td className="px-6 py-4 text-muted-foreground">{animal.weight}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border-none ${animal.health === 'Good' || animal.health === 'Excellent'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-warning/20 text-warning'
                      }`}>
                      {animal.health}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{animal.lastVac}</td>
                  <td className="px-6 py-4">
                    <button className="text-primary hover:text-primary/80 font-medium text-sm">Update</button>
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
