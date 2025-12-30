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
      color: "bg-primary/10 text-primary"
    },
    {
      name: "Horticulture",
      description: "Fruits, vegetables & ornamentals",
      icon: Leaf,
      href: "/branches/horticulture",
      feature: "Orchard & Garden Manager",
      color: "bg-info/10 text-info"
    },
    {
      name: "Animal Science",
      description: "Livestock care & breeding",
      icon: Activity,
      href: "/branches/livestock",
      feature: "Livestock Health Tracker",
      color: "bg-warning/10 text-warning"
    },
    {
      name: "Fisheries",
      description: "Aquaculture & fish farming",
      icon: Fish,
      href: "/branches/fisheries",
      feature: "Aquaculture Monitor",
    },
    {
      name: "Forestry",
      description: "Forest conservation & wildlife",
      icon: TreeDeciduous,
      href: "/branches/forestry",
      feature: "Agroforestry Planner",
      color: "bg-primary/10 text-primary"
    },
    {
      name: "Agri-Engineering",
      description: "Machinery & irrigation systems",
      icon: Tractor,
      href: "/branches/engineering",
      feature: "Irrigation Designer",
    },
    {
      name: "Soil Science",
      description: "Soil fertility & classification",
      icon: Database,
      href: "/branches/soil-science",
      feature: "Digital Soil Lab",
      color: "bg-warning/10 text-warning"
    },
    {
      name: "Agri-Economics",
      description: "Farm business & finance",
      icon: TrendingUp,
      href: "/branches/economics",
      feature: "Farm Financial Manager",
    },
    {
      name: "Agri-Extension",
      description: "Education & community outreach",
      icon: Users,
      href: "/branches/extension",
      feature: "Mentorship Network",
      color: "bg-secondary/10 text-secondary"
    },
    {
      name: "Crop Science",
      description: "Genetics & crop improvement",
      icon: Microscope,
      href: "/branches/crop-science",
      feature: "Variety Trial Tracker",
    },
    {
      name: "Biotechnology",
      description: "Genetic engineering & tissue culture",
      icon: Dna,
      href: "/branches/biotech",
      feature: "Bio-Tech Knowledge Bank",
      color: "bg-accent/10 text-accent"
    },
    {
      name: "Agri-Education",
      description: "Student training & skills",
      icon: GraduationCap,
      href: "/branches/education",
      feature: "Internship Portal",
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-primary-foreground">Branches of Agriculture</h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl">
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
              className="bg-card rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-border group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${branch.color}`}>
                  <branch.icon className="w-6 h-6" />
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{branch.name}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{branch.description}</p>
              <div className="inline-flex items-center text-xs font-medium bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
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
