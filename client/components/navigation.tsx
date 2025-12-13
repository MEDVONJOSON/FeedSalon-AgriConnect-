'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Home, Menu, X, MapPin, Cloud, Settings, Bug, Sprout, Building2, RefreshCw, Calendar, TrendingUp, User, LogOut, LayoutDashboard, Factory, ShieldCheck, Globe, GraduationCap, Radio, DollarSign, ClipboardList, Target, Banknote, PieChart, Search, ShoppingCart, Briefcase, FileText, UserPlus, HeartHandshake, Calculator } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

import { auth, User as AuthUser } from '@/lib/auth'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
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
    { name: 'Crop Insurance', href: '/financial-services', icon: ShieldCheck, desc: 'Protect your crops' },
    { name: 'Diaspora Invest', href: '/diaspora-invest', icon: Globe, desc: 'Investment opportunities' },
    { name: 'Education', href: '/education', icon: GraduationCap, desc: 'Learn modern farming' },
    { name: 'Extension Hub', href: '/extension-hub', icon: Radio, desc: 'Expert advice' },
    { name: 'Farm Finances', href: '/financial-services', icon: DollarSign, desc: 'Track earnings' },
    { name: 'Farm Management', href: '/farm-management', icon: ClipboardList, desc: 'Manage operations' },
    { name: 'Feed Salone', href: '/feed-salone', icon: Target, desc: 'National strategy' },
    { name: 'Financial Services', href: '/financial-services', icon: Banknote, desc: 'Loans & Banking' },
    { name: 'Food Security', href: '/food-security', icon: PieChart, desc: 'National stats' },
  ]

  return (
    <nav className="glass-card sticky top-0 z-50 border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {/* Logo */}
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/logo.png" alt="Agri Connect Logo" className="object-contain w-full h-full" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Agri Connect</h1>
                <p className="text-xs text-muted-foreground">Agricultural Platform</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-slate-700 hover:text-primary transition-colors font-medium"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>

            {/* Agri-Opp Portal - Highlighted Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold data-[state=open]:bg-blue-700">
                  <Building2 className="w-4 h-4 mr-2" />
                  Agri-Opp Portal
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 glass-card">
                <DropdownMenuItem asChild>
                  <Link href="/agri-opp-portal" className="cursor-pointer flex items-center gap-2 font-semibold text-blue-600">
                    <Building2 className="w-4 h-4" />
                    <span>Portal Overview</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {agriOppCategories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link href="/agri-opp-portal" className="cursor-pointer flex items-center gap-2">
                      <category.icon className="w-4 h-4 text-slate-500" />
                      <span>{category.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>


            {/* Agri Platform Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-slate-700 hover:text-primary hover:bg-primary/5">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Agri Platform
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 glass-card max-h-[80vh] overflow-y-auto">
                <DropdownMenuItem asChild>
                  <Link href="/dashboard#agri-platform" className="cursor-pointer flex items-center gap-2 font-semibold text-primary">
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Overview</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {agriPlatformFeatures.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <DropdownMenuItem key={feature.name} asChild>
                      <Link href={feature.href} className="cursor-pointer flex items-start gap-2 py-2">
                        <Icon className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <div className="flex flex-col">
                          <span className="font-medium">{feature.name}</span>
                          <span className="text-xs text-muted-foreground">{feature.desc}</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-slate-700 hover:text-primary hover:bg-primary/5">
                  <Sprout className="w-4 h-4 mr-2" />
                  AI Powered Service
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 glass-card">
                {features.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <DropdownMenuItem key={feature.href} asChild>
                      <Link href={feature.href} className="cursor-pointer flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span>{feature.name}</span>
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>

            {/* User Account */}
            <div className="flex items-center gap-4">
              {/* Ministry Coat of Arms */}
              <div className="h-12 w-12 relative hidden md:block" title="Ministry of Agriculture and Food Security">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/coat-of-arms.png" alt="MAFS Coat of Arms" className="object-contain w-full h-full" />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90 text-white gap-2 h-auto py-1 px-3">
                    <User className="w-4 h-4" />
                    <div className="flex flex-col items-start text-xs leading-none">
                      <span className="font-semibold text-sm">{user ? user.name : 'Account'}</span>
                      {user && <span className="opacity-80 capitalize">{user.role}</span>}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 glass-card">
                  {user ? (
                    <>
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground flex items-center justify-between">
                        <span>My Account</span>
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
            className="lg:hidden p-2 text-slate-700 hover:text-primary"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-primary/20">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </Link>

              <div className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                Features
              </div>

              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Link
                    key={feature.href}
                    href={feature.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{feature.name}</span>
                  </Link>
                )
              })}

              <div className="border-t border-primary/20 my-2"></div>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
              >
                <span className="font-medium">About</span>
              </Link>

              {user ? (
                <>
                  <Link
                    href="/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                  >
                    <LayoutDashboard className="w-5 h-5" />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    href="/profile"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                  </Link>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false)
                      // Will implement logout
                      window.location.href = '/'
                    }}
                    className="flex items-center gap-2 px-4 py-3 text-destructive hover:bg-destructive/5 rounded-lg transition-colors text-left"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span>Login</span>
                  </Link>
                  <Link
                    href="/auth/signup"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 bg-primary text-white hover:bg-primary/90 rounded-lg transition-colors font-medium"
                  >
                    <Sprout className="w-5 h-5" />
                    <span>Sign Up</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
