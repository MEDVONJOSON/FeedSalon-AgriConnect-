'use client'

import { GraduationCap, MapPin, Briefcase, Calendar } from 'lucide-react'

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-cyan-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Agri-Education: Internship Portal</h1>
          </div>
          <p className="text-cyan-100 max-w-2xl">
            Connect with leading farms and agribusinesses for hands-on training, internships, and research opportunities.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-lg mb-4">Filter Opportunities</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select className="w-full p-2 border rounded-lg bg-gray-50">
                    <option>All Districts</option>
                    <option>Bo</option>
                    <option>Kenema</option>
                    <option>Freetown</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-cyan-600" defaultChecked />
                      <span className="text-sm text-gray-600">Farm Internship</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-cyan-600" />
                      <span className="text-sm text-gray-600">Research Assistant</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-cyan-600" />
                      <span className="text-sm text-gray-600">Agri-Business Admin</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 space-y-4">
            {[
              { title: 'Organic Farming Intern', farm: 'Green Valley Farms', loc: 'Bo District', dur: '3 Months', type: 'Paid' },
              { title: 'Livestock Management Trainee', farm: 'Salone Cattle Ranch', loc: 'Koinadugu', dur: '6 Months', type: 'Stipend' },
              { title: 'Rice Value Chain Research', farm: 'SLARI', loc: 'Rokupr', dur: '2 Months', type: 'Academic Credit' },
              { title: 'Agro-Processing Assistant', farm: 'Tropical Foods Ltd', loc: 'Freetown', dur: '4 Months', type: 'Paid' },
            ].map((job, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-cyan-100">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <span className="bg-cyan-50 text-cyan-700 text-xs font-medium px-2 py-1 rounded-full">{job.type}</span>
                </div>
                <div className="text-gray-600 font-medium mb-4">{job.farm}</div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.loc}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {job.dur}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    Full-time
                  </div>
                </div>
                <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-cyan-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
