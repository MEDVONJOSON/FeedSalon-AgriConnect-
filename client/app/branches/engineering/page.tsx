'use client'

import { Tractor, Droplets, Settings, PenTool } from 'lucide-react'

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Tractor className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Agri-Engineering: Irrigation Designer</h1>
          </div>
          <p className="text-primary-foreground/90 max-w-2xl">
            Design efficient irrigation systems, calculate water requirements, and manage farm machinery maintenance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-sm p-6 mb-8 border border-border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
                <PenTool className="w-5 h-5 text-primary" />
                System Layout Planner
              </h2>
              <div className="aspect-video bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex items-center justify-center mb-4">
                <div className="text-center text-slate-500">
                  <Settings className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>Interactive Canvas Placeholder</p>
                  <p className="text-sm">Drag and drop pipes, sprinklers, and pumps here</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Add Main Line
                </button>
                <button className="flex-1 bg-white border border-slate-300 text-slate-700 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                  Add Sprinkler
                </button>
                <button className="flex-1 bg-white border border-slate-300 text-slate-700 py-2 rounded-lg hover:bg-slate-50 transition-colors">
                  Add Drip Tape
                </button>
              </div>
            </div>

            <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Machinery Maintenance Log</h2>
              <div className="space-y-4">
                {[
                  { machine: 'Tractor MF-375', task: 'Oil Change', due: 'In 50 Hours', status: 'Pending' },
                  { machine: 'Water Pump 5HP', task: 'Filter Clean', due: 'Overdue', status: 'Urgent' },
                  { machine: 'Harvester', task: 'Blade Sharpening', due: 'Next Week', status: 'Scheduled' },
                ].map((log, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">{log.machine}</div>
                      <div className="text-sm text-muted-foreground">{log.task}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${log.status === 'Urgent' ? 'text-destructive' : 'text-muted-foreground'
                        }`}>{log.due}</div>
                      <div className="text-xs text-muted-foreground">{log.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-foreground">
                <Droplets className="w-5 h-5 text-secondary" />
                Water Requirement Calc
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Crop Type</label>
                  <select className="w-full p-2 border border-border rounded-lg bg-muted/50 text-foreground">
                    <option>Vegetables (Leafy)</option>
                    <option>Maize/Cereals</option>
                    <option>Fruit Trees</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Area (sq meters)</label>
                  <input type="number" className="w-full p-2 border rounded-lg bg-gray-50" placeholder="1000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1">Soil Type</label>
                  <select className="w-full p-2 border border-border rounded-lg bg-muted/50 text-foreground">
                    <option>Sandy</option>
                    <option>Loamy</option>
                    <option>Clay</option>
                  </select>
                </div>
                <div className="p-4 bg-info/10 rounded-lg mt-4">
                  <div className="text-sm text-info mb-1">Daily Water Need:</div>
                  <div className="text-2xl font-bold text-foreground">4,500 Liters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
