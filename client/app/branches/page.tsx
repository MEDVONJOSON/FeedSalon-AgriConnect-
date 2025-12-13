import Link from 'next/link'
import { ArrowRight, Sprout, Fish, Tractor, BookOpen, TrendingUp, Microscope, Leaf, Droplets, Users, GraduationCap, Activity, Database } from 'lucide-react'

export default function BranchesPage() {
  const branches = [
    {
      name: "Agronomy",
      description: "Crop production & soil management",
      icon: Sprout,
      href: "/branches/agronomy",
      feature: "Crop Rotation Planner",
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Horticulture",
      description: "Fruits, vegetables & ornamentals",
      icon: Leaf,
      href: "/branches/horticulture",
      feature: "Orchard & Garden Manager",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      name: "Animal Science",
      description: "Livestock care & breeding",
      icon: Activity,
      href: "/branches/livestock",
      feature: "Livestock Health Tracker",
      color: "bg-orange-100 text-orange-600"
    },
    {
      name: "Fisheries",
      description: "Aquaculture & fish farming",
      icon: Fish,
      href: "/branches/fisheries",
      feature: "Aquaculture Monitor",
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Forestry",
      description: "Forest conservation & wildlife",
      icon: TreeDeciduous,
      href: "/branches/forestry",
      feature: "Agroforestry Planner",
      color: "bg-teal-100 text-teal-600"
    },
    {
      name: "Agri-Engineering",
      description: "Machinery & irrigation systems",
      icon: Tractor,
      href: "/branches/engineering",
      feature: "Irrigation Designer",
      color: "bg-slate-100 text-slate-600"
    },
    {
      name: "Soil Science",
      description: "Soil fertility & classification",
      icon: Database,
      href: "/branches/soil-science",
      feature: "Digital Soil Lab",
      color: "bg-amber-100 text-amber-600"
    },
    {
      name: "Agri-Economics",
      description: "Farm business & finance",
      icon: TrendingUp,
      href: "/branches/economics",
      feature: "Farm Financial Manager",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      name: "Agri-Extension",
      description: "Education & community outreach",
      icon: Users,
      href: "/branches/extension",
      feature: "Mentorship Network",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      name: "Crop Science",
      description: "Genetics & crop improvement",
      icon: Microscope,
      href: "/branches/crop-science",
      feature: "Variety Trial Tracker",
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Biotechnology",
      description: "Genetic engineering & tissue culture",
      icon: Dna,
      href: "/branches/biotech",
      feature: "Bio-Tech Knowledge Bank",
      color: "bg-pink-100 text-pink-600"
    },
    {
      name: "Agri-Education",
      description: "Student training & skills",
      icon: GraduationCap,
      href: "/branches/education",
      feature: "Internship Portal",
      color: "bg-cyan-100 text-cyan-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Branches of Agriculture</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Explore specialized tools and features designed for every sector of the agricultural ecosystem.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <Link 
              key={index} 
              href={branch.href}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${branch.color}`}>
                  <branch.icon className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{branch.name}</h3>
              <p className="text-gray-600 mb-4 text-sm">{branch.description}</p>
              <div className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                Feature: {branch.feature}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// Missing icons import fix
import { TreeDeciduous, Dna } from 'lucide-react'
