import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { ArrowRight, Sprout, Fish, Tractor, BookOpen, TrendingUp, Microscope, Leaf, Droplets, Users, GraduationCap, Activity, Database, TreeDeciduous, Dna, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

// Premium Branches Collection for Agri Connect
export default function BranchesPage() {
  const branches = [
    {
      name: "Agronomy",
      description: "Crop production & soil management",
      icon: Sprout,
      href: "/branches/agronomy",
      feature: "Crop Rotation Planner",
      color: "text-[#1EB53A]",
      bg: "bg-[#1EB53A]/10"
    },
    {
      name: "Horticulture",
      description: "Fruits, vegetables & ornamentals",
      icon: Leaf,
      href: "/branches/horticulture",
      feature: "Orchard & Garden Manager",
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      name: "Animal Science",
      description: "Livestock care & breeding",
      icon: Activity,
      href: "/branches/livestock",
      feature: "Livestock Health Tracker",
      color: "text-rose-500",
      bg: "bg-rose-500/10"
    },
    {
      name: "Fisheries",
      description: "Aquaculture & fish farming",
      icon: Fish,
      href: "/branches/fisheries",
      feature: "Aquaculture Monitor",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      name: "Forestry",
      description: "Forest conservation & wildlife",
      icon: TreeDeciduous,
      href: "/branches/forestry",
      feature: "Agroforestry Planner",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      name: "Agri-Engineering",
      description: "Machinery & irrigation systems",
      icon: Tractor,
      href: "/branches/engineering",
      feature: "Irrigation Designer",
      color: "text-slate-600",
      bg: "bg-slate-100"
    },
    {
      name: "Soil Science",
      description: "Soil fertility & classification",
      icon: Database,
      href: "/branches/soil-science",
      feature: "Digital Soil Lab",
      color: "text-amber-600",
      bg: "bg-amber-100"
    },
    {
      name: "Agri-Economics",
      description: "Farm business & finance",
      icon: TrendingUp,
      href: "/branches/economics",
      feature: "Farm Financial Manager",
      color: "text-indigo-500",
      bg: "bg-indigo-50/50"
    },
    {
      name: "Agri-Extension",
      description: "Education & community outreach",
      icon: Users,
      href: "/branches/extension",
      feature: "Mentorship Network",
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      name: "Crop Science",
      description: "Genetics & crop improvement",
      icon: Microscope,
      href: "/branches/crop-science",
      feature: "Variety Trial Tracker",
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    },
    {
      name: "Biotechnology",
      description: "Genetic engineering & tissue culture",
      icon: Dna,
      href: "/branches/biotech",
      feature: "Bio-Tech Knowledge Bank",
      color: "text-pink-500",
      bg: "bg-pink-50"
    },
    {
      name: "Agri-Education",
      description: "Student training & skills",
      icon: GraduationCap,
      href: "/branches/education",
      feature: "Internship Portal",
      color: "text-[#0072C6]",
      bg: "bg-[#0072C6]/10"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50/50 relative">
      <Navigation />

      {/* Dynamic Header with National Colors */}
      <div className="bg-[#0072C6] pt-32 pb-24 relative overflow-hidden border-b-4 border-[#1EB53A]">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[120px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-full bg-[#1EB53A]/10 blur-[100px] rounded-full -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-6 py-1.5 mb-6 font-black uppercase tracking-widest text-[10px]">
            National Agricultural Sectors
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter shadow-sm">
            Branches of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Agriculture</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium leading-relaxed">
            Exploring the specialized ecosystems that drive <span className="text-[#1EB53A] font-bold">Sierra Leone's</span> agricultural productivity and food security.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <Link key={index} href={branch.href} className="group">
              <Card className="h-full bg-white rounded-[2rem] border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative p-8">
                <div className={`absolute top-0 left-0 w-full h-1.5 ${branch.bg.replace('10', '40')}`}></div>

                <div className="flex items-start justify-between mb-8">
                  <div className={`p-5 rounded-2xl ${branch.bg} ${branch.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm shadow-black/5`}>
                    <branch.icon className="w-8 h-8" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 group-hover:rotate-45 duration-300">
                    <ArrowRight className="w-5 h-5 text-slate-400" />
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-[#0072C6] transition-colors">{branch.name}</h3>
                <p className="text-slate-500 font-medium mb-8 leading-relaxed">{branch.description}</p>

                <div className="flex items-center gap-3">
                  <div className="px-5 py-2 rounded-xl bg-slate-50 text-slate-400 group-hover:bg-[#1EB53A]/10 group-hover:text-[#1EB53A] transition-all flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">{branch.feature}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
