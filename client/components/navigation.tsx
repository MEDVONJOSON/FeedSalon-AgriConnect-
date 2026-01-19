'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Home, Menu, X, MapPin, Cloud, Settings, Bug, Sprout, Building2, RefreshCw, Calendar, TrendingUp, User, Users, LogOut, LayoutDashboard, Factory, ShieldCheck, Globe, GraduationCap, Radio, DollarSign, ClipboardList, Target, Banknote, PieChart, Search, ShoppingCart, Briefcase, FileText, UserPlus, HeartHandshake, Calculator, MessageCircle, Download } from 'lucide-react'
import { usePWA } from '@/hooks/use-pwa'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

import { auth, type User as AuthUser } from '@/lib/auth'

export function Navigation() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    setMounted(true)
    // Initial load
    setUser(auth.getUser())

    // Listen for auth changes
    const handleAuthChange = () => {
      setUser(auth.getUser())
    }

    window.addEventListener('auth-change', handleAuthChange)
    return () => window.removeEventListener('auth-change', handleAuthChange)
  }, [])

  const agriOppCategories = [
    { name: 'Government Support', icon: Building2 },
    { name: 'Jobs in Agriculture', icon: Briefcase },
    { name: 'Training & Capacity', icon: GraduationCap },
    { name: 'Grants & Funding', icon: DollarSign },
    { name: 'Market Opportunities', icon: TrendingUp },
    { name: 'Business Tools', icon: FileText },
    { name: 'Youth Opportunities', icon: UserPlus },
    { name: 'NGO & Partners', icon: HeartHandshake },
  ]

  const features = [
    { name: 'Land Management', href: '/land-management', icon: MapPin },
    { name: 'Weather', href: '/weather', icon: Cloud },
    { name: 'Land Preparation', href: '/land-preparation', icon: Settings },
    { name: 'Disease Detection', href: '/disease-detection', icon: Bug },
    { name: 'Crop Recommendation', href: '/crop-recommendation', icon: Sprout },
    { name: 'Government Schemes', href: '/government-schemes', icon: Building2 },
    { name: 'Crop Calendar', href: '/crop-calendar', icon: Calendar },
    { name: 'Market Analysis', href: '/market-analysis', icon: TrendingUp },
  ]

  const agriPlatformFeatures = [
    { name: 'Agri Industry', href: '/agri-industry', icon: Factory, desc: 'Industrial processing' },
    { name: 'Crop Insurance', href: '/crop-insurance', icon: ShieldCheck, desc: 'Protect your crops' },
    { name: 'Diaspora Invest', href: '/diaspora-invest', icon: Globe, desc: 'Investment opportunities' },
    { name: 'Education', href: '/education', icon: GraduationCap, desc: 'Learn modern farming' },
    { name: 'Extension Hub', href: '/extension-hub', icon: Radio, desc: 'Expert advice' },
    { name: 'Farm Finances', href: '/farm-finances', icon: DollarSign, desc: 'Track earnings' },
    { name: 'Farm Management', href: '/farm-management', icon: ClipboardList, desc: 'Manage operations' },
    { name: 'Feed Salone', href: '/feed-salone', icon: Target, desc: 'National strategy' },
    { name: 'Financial Services', href: '/financial-services', icon: Banknote, desc: 'Loans & Banking' },
    { name: 'Food Security', href: '/food-security', icon: PieChart, desc: 'National stats' },
    { name: 'Traceability', href: '/traceability', icon: Search, desc: 'Track your produce' },
  ]

  const scientificBranches = [
    { name: 'Agronomy', href: '/branches/agronomy' },
    { name: 'Biotechnology', href: '/branches/biotech' },
    { name: 'Crop Science', href: '/branches/crop-science' },
    { name: 'Agri Economics', href: '/branches/economics' },
    { name: 'Engineering', href: '/branches/engineering' },
    { name: 'Extension', href: '/branches/extension' },
    { name: 'Fisheries', href: '/branches/fisheries' },
    { name: 'Forestry', href: '/branches/forestry' },
    { name: 'Horticulture', href: '/branches/horticulture' },
    { name: 'Livestock', href: '/branches/livestock' },
    { name: 'Soil Science', href: '/branches/soil-science' },
  ]
  const { isInstallable, installApp } = usePWA()

  const PWAInstallButton = ({ mobile = false }) => {
    if (!isInstallable) return null

    return (
      <Button
        onClick={installApp}
        className={`${mobile
          ? 'w-full py-4 text-sm mb-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80'
          : 'bg-primary/10 hover:bg-primary text-primary hover:text-white border border-primary/20 h-10 px-4 rounded-full font-black text-xs uppercase tracking-tighter'
          } flex items-center justify-center gap-2 transition-all shadow-lg`}
      >
        <Download className="w-4 h-4" />
        <span>Install App</span>
      </Button>
    )
  }


  return (
    <>
      <nav className="glass-card sticky top-0 z-50 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <Link href="/" className="flex items-center gap-3 relative z-[60]">
              <div className="flex items-center gap-2">
                {/* Logo */}
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="Agri-connect.sl Logo" className="object-contain w-full h-full" />
                </div>
                <div>
                  <h1
                    className="text-2xl font-black text-branded tracking-tight text-shadow-premium"
                  >
                    Agri-Connect.sl
                  </h1>
                  <p className="text-xs text-muted-foreground">Agricultural Platform</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/marketplace"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-all font-bold bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full border border-primary/10"
              >
                <ShoppingCart className="w-4 h-4 text-primary" />
                <span className="uppercase tracking-widest text-[11px]">Marketplace</span>
              </Link>
              <Link
                href="/community"
                className="flex items-center gap-2 text-foreground hover:text-primary transition-all font-bold bg-primary/5 hover:bg-primary/10 px-4 py-2 rounded-full border border-primary/10"
              >
                <Users className="w-4 h-4 text-primary" />
                <span className="uppercase tracking-widest text-[11px]">Community</span>
              </Link>
              {/* Agri-Opp Portal - Highlighted Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold data-[state=open]:bg-secondary/80">
                    <Building2 className="w-4 h-4 mr-2" />
                    Agri-Opp Portal
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 glass-card border-none shadow-2xl p-2">
                  <DropdownMenuItem asChild>
                    <Link href="/agri-opp-portal" className="cursor-pointer flex items-center gap-2 font-bold bg-secondary/10 text-secondary hover:bg-secondary/20 rounded-md mb-1 px-3 py-2">
                      <Building2 className="w-4 h-4" />
                      <span>Portal Overview</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {agriOppCategories.map((category) => (
                    <DropdownMenuItem key={category.name} asChild>
                      <Link href="/agri-opp-portal" className="cursor-pointer flex items-center gap-2">
                        <category.icon className="w-4 h-4 text-muted-foreground" />
                        <span>{category.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>


              {/* Agri Platform Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/5">
                    <LayoutDashboard className="w-4 h-4 mr-2" />
                    Agri Platform
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 glass-card border-none shadow-2xl p-2 max-h-[80vh] overflow-y-auto">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard#agri-platform" className="cursor-pointer flex items-center gap-2 font-bold bg-[#1EB53A]/10 text-[#1EB53A] hover:bg-[#1EB53A]/20 rounded-md mb-1 px-3 py-2">
                      <LayoutDashboard className="w-4 h-4" />
                      <span>Platform Overview</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  {agriPlatformFeatures.map((feature) => {
                    const Icon = feature.icon
                    return (
                      <DropdownMenuItem key={feature.name} asChild>
                        <Link href={feature.href} className="cursor-pointer flex items-start gap-3 py-2.5 px-3 hover:bg-primary/5 rounded-md transition-all group">
                          <Icon className="w-5 h-5 text-[#1EB53A] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-800 group-hover:text-[#1EB53A]">{feature.name}</span>
                            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-extrabold">{feature.desc}</span>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Scientific Branches Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/5">
                    <Factory className="w-4 h-4 mr-2" />
                    Agri Branches
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 glass-card border-none shadow-2xl p-2 max-h-[70vh] overflow-y-auto">
                  {scientificBranches.map((branch) => (
                    <DropdownMenuItem key={branch.href} asChild>
                      <Link href={branch.href} className="cursor-pointer flex items-center gap-2 py-2 px-3 hover:bg-primary/5 rounded-md">
                        <span className="font-bold text-slate-800 hover:text-primary">{branch.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Features Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-primary/5">
                    <Sprout className="w-4 h-4 mr-2" />
                    AI Powered Service
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-64 glass-card border-none shadow-2xl p-2">
                  {features.map((feature) => {
                    const Icon = feature.icon
                    return (
                      <DropdownMenuItem key={feature.href} asChild>
                        <Link href={feature.href} className="cursor-pointer flex items-center gap-3 py-2.5 px-3 hover:bg-primary/5 rounded-md transition-all group">
                          <Icon className="w-5 h-5 text-[#1EB53A] shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="font-bold text-slate-800 group-hover:text-[#1EB53A]">{feature.name}</span>
                        </Link>
                      </DropdownMenuItem>
                    )
                  })}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </Link>

              {/* User Account */}
              <div className="flex items-center gap-4">
                {/* WhatsApp Support Link */}
                <a
                  href="https://wa.me/23233013411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
                >
                  <MessageCircle className="w-4 h-4 group-hover:animate-bounce" />
                  <span className="hidden xl:inline">WhatsApp Support</span>
                </a>

                {/* PWA Install Button */}
                <PWAInstallButton />

                {/* Ministry Coat of Arms */}
                <div className="h-12 w-12 relative hidden md:block" title="Ministry of Agriculture and Food Security">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/coat-of-arms.png" alt="MAFS Coat of Arms" className="object-contain w-full h-full" />
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 h-auto py-1.5 px-4 rounded-xl shadow-lg border-2 border-primary-foreground/20">
                      <User className="w-4 h-4" />
                      <div className="flex flex-col items-start text-xs leading-none">
                        <span className="font-bold text-sm">{mounted && user ? user.name : 'Loading...'}</span>
                        {mounted && user && <span className="opacity-80 capitalize text-[10px] font-black tracking-widest">{user.role}</span>}
                        {!mounted && <span className="opacity-0 capitalize text-[10px]">placeholder</span>}
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 glass-card">
                    {user ? (
                      <>
                        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground flex items-center justify-between">
                          <span>{user.email === 'guest@agriconnect.sl' ? 'Guest Access' : 'My Account'}</span>
                          <Badge variant="outline" className="capitalize text-xs py-0 h-5">{user.role}</Badge>
                        </div>
                        <DropdownMenuItem asChild>
                          <Link href="/dashboard" className="cursor-pointer">
                            <LayoutDashboard className="w-4 h-4 mr-2" />
                            Dashboard
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/profile" className="cursor-pointer">
                            <User className="w-4 h-4 mr-2" />
                            Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          onClick={() => {
                            auth.logout()
                            window.location.href = '/'
                          }}
                          className="cursor-pointer text-destructive focus:text-destructive"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <>
                        <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                          Get Started
                        </div>
                        <DropdownMenuItem asChild>
                          <Link href="/auth/login" className="cursor-pointer">
                            <User className="w-4 h-4 mr-2" />
                            Login
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/auth/signup" className="cursor-pointer">
                            <Sprout className="w-4 h-4 mr-2" />
                            Sign Up
                          </Link>
                        </DropdownMenuItem>
                      </>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-primary relative z-[60]"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

        </div>
      </nav >

      {/* Mobile Menu Overlay - Moved outside nav to escape containing block context */}
      {
        mobileMenuOpen && (
          <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[60] lg:hidden flex flex-col overflow-y-auto animate-in fade-in slide-in-from-bottom-10 duration-200">
            <div className="flex items-center justify-between p-4 border-b border-primary/10">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="relative w-10 h-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="Logo" className="object-contain w-full h-full" />
                </div>
                <span className="font-black text-lg text-branded tracking-tighter">Agri-Connect.sl</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col gap-2 p-6 pb-20">
              {/* Mobile Auth Check */}
              {!user ? (
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 border border-slate-100 rounded-2xl active:bg-slate-100 hover:border-primary/50 transition-all"
                  >
                    <User className="w-6 h-6 text-slate-600" />
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-600">Login</span>
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-branded text-white shadow-lg shadow-primary/20 rounded-2xl active:scale-95 transition-transform"
                  >
                    <Sprout className="w-6 h-6" />
                    <span className="font-bold text-xs uppercase tracking-wider">Join Now</span>
                  </Link>
                </div>
              ) : (
                <div className="bg-slate-900 text-white p-6 rounded-[2rem] mb-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl font-bold border border-white/20">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{user.name}</div>
                        <div className="text-xs text-white/60 uppercase tracking-wider">{user.role}</div>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false)
                        auth.logout()
                        window.location.href = '/'
                      }}
                      className="p-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-all"
                    >
                      <LogOut className="w-5 h-5" />
                    </button>
                  </div>
                  <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="block w-full py-3 text-center bg-white/10 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                    Go to Dashboard
                  </Link>
                </div>
              )}

              <div className="px-2 py-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                Quick Access
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="col-span-2">
                  <PWAInstallButton mobile={true} />
                </div>
                <Link
                  href="/marketplace"
                  onClick={() => setMobileMenuOpen(false)}
                  className="col-span-2 flex items-center justify-center gap-3 p-4 bg-branded text-white shadow-lg rounded-2xl active:scale-95 transition-transform text-center"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span className="text-sm font-black uppercase tracking-widest">Marketplace</span>
                </Link>
                <Link
                  href="/community"
                  onClick={() => setMobileMenuOpen(false)}
                  className="col-span-2 flex items-center justify-center gap-3 p-4 bg-white text-slate-900 border border-slate-200 hover:border-primary/50 shadow-sm rounded-2xl active:scale-95 transition-transform text-center"
                >
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-sm font-black uppercase tracking-widest">Community Hub</span>
                </Link>
              </div>

              <div className="px-2 py-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                Agri Platform
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {agriPlatformFeatures.slice(0, 6).map((feature) => (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-center gap-3 p-4 bg-slate-50 hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 rounded-2xl transition-all text-center"
                  >
                    <feature.icon className="w-8 h-8 text-primary/80" />
                    <span className="text-xs font-bold text-slate-600 leading-tight">{feature.name}</span>
                  </Link>
                ))}
                <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="col-span-2 flex items-center justify-center gap-2 p-3 text-xs font-bold text-primary uppercase tracking-widest bg-primary/5 rounded-xl mt-2 hover:bg-primary/10">
                  View All Platform Tools <span className="text-lg">→</span>
                </Link>
              </div>

              <div className="px-2 py-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                Agri Branches
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {scientificBranches.map((branch) => (
                  <Link
                    key={branch.href}
                    href={branch.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 rounded-xl transition-all text-[10px] font-bold text-slate-600 uppercase tracking-widest"
                  >
                    {branch.name}
                  </Link>
                ))}
              </div>

              <div className="px-2 py-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                AI Services
              </div>

              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 px-4 py-4 text-slate-600 hover:bg-slate-50 hover:text-primary rounded-2xl transition-colors font-medium border-b border-slate-50 last:border-0"
                  >
                    <Icon className="w-5 h-5 text-slate-400" />
                    <span>{feature.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )
      }
    </>
  )
}
