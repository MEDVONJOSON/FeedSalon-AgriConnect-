"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { API_URL } from '@/lib/api-config'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  MapPin, Cloud, Settings, Bug, Sprout, Building2, RefreshCw,
  Calendar, TrendingUp, Users, Factory, ShieldCheck, Globe,
  ArrowRight, CheckCircle2, DollarSign, Briefcase, Zap, Phone, Mail,
  MessageCircle, Info // Added additional helpers just in case
} from 'lucide-react'
import { ChatWidget } from '@/components/chat-widget'
import { Badge } from '@/components/ui/badge'

// Official Homepage for Agri-connect.sl

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)
  const [liveStats, setLiveStats] = useState({
    activeListings: '0',
    totalUsers: '1,248'
  })

  useEffect(() => {
    fetch(`${API_URL}/api/admin/stats`)
      .then(res => res.json())
      .then(data => {
        setLiveStats({
          activeListings: data.activeListings.toString(),
          totalUsers: data.totalUsers.toLocaleString()
        })
      })
      .catch(err => console.error("Failed to fetch live stats", err))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll animation effect - FIXED VERSION
  useEffect(() => {
    let observer: IntersectionObserver | null = null

    const initAnimations = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      )

      const elements = document.querySelectorAll('.animate-on-scroll')
      elements.forEach(el => observer?.observe(el))
    }

    const timer = setTimeout(initAnimations, 100)

    return () => {
      clearTimeout(timer)
      observer?.disconnect()
    }
  }, [])

  const pillars = [
    {
      title: "Improve Infrastructure",
      desc: "Providing digital technologies, climate advisory, and physical infrastructure to enable agricultural businesses to thrive.",
      icon: Zap,
      color: "text-primary",
      link: "/branches"
    },
    {
      title: "Strengthen Policy",
      desc: "Creating enabling policies, regulations, and institutional frameworks to support sustainable agricultural growth.",
      icon: Building2,
      color: "text-secondary",
      link: "/government-schemes"
    },
    {
      title: "Mobilize Capital",
      desc: "Unlocking financing and investment to scale agricultural value chains and empower smallholder farmers.",
      icon: DollarSign,
      color: "text-accent",
      link: "/financial-services"
    }
  ]

  const stats = [
    { label: "Registered Farmers", value: liveStats.totalUsers, sub: "Growing community" },
    { label: "Active Listings", value: liveStats.activeListings, sub: "Marketplace items" },
    { label: "Investment Mobility", value: "$9B", sub: "Pledged by 2030" },
    { label: "Production Goal", value: "30%", sub: "Increase by 2050" }
  ]

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 overflow-hidden bg-[#0A0F1E]">
        <div className="absolute inset-0 z-0 flex flex-col h-[400%] animate-cycle-vertical-hero">
          {/* Slide 1 - Drone View */}
          <div className="h-[25%] w-full relative">
            <div
              className="absolute inset-0 bg-cover bg-center brightness-[0.4] scale-105"
              style={{ backgroundImage: "url('/hero-drone.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/60 to-transparent"></div>
          </div>

          {/* Slide 2 - Rubot AI branding */}
          <div className="h-[25%] w-full relative overflow-hidden bg-[#0A0F1E]">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-white/5 backdrop-blur-3xl"></div>
            <div
              className="absolute inset-y-0 right-[-5%] w-[100%] md:w-[65%] bg-cover bg-right bg-no-repeat transition-transform duration-[14s] scale-110 z-10"
              style={{
                backgroundImage: "url('/rubot-hero.jpg')",
                maskImage: 'linear-gradient(to left, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 70%, transparent 100%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E] to-transparent z-20"></div>
          </div>

          {/* Slide 3 - PRESIDENTIAL VISION */}
          <div className="h-[25%] w-full relative overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[14s] scale-105"
              style={{
                backgroundImage: "url('/hero-president.jpg')",
                opacity: 0.8
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/90 to-transparent z-10"></div>
          </div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-8 bg-white/10 text-white border-white/20 py-2 px-6 text-sm backdrop-blur-xl font-bold uppercase tracking-[0.2em] shadow-2xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1EB53A] via-white to-[#0072C6]">
                Empowering the Future of Agriculture
              </span>
            </Badge>
            <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
              Agri-connect <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#1EB53A] to-[#0072C6]">.sl</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-medium opacity-90">
              Transforming small-scale farming into a <span className="text-white font-bold border-b-2 border-primary">dynamic engine</span> of national prosperity through world-class technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-black text-lg px-12 h-16 rounded-2xl transition-all hover:scale-105 shadow-2xl shadow-primary/30">
                <Link href="/marketplace">🛒 Market Portal</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 font-bold text-lg px-12 h-16 rounded-2xl backdrop-blur-md">
                <Link href="/about">Strategic Vision</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="relative z-20 -mt-16 container mx-auto px-4 animate-on-scroll">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 first:rounded-l-2xl last:rounded-r-2xl border-x border-slate-100 shadow-xl text-center group hover:bg-slate-50 transition-colors">
              <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Three Pillars Section */}
      <section className="py-24 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl heading-flagship mb-6">Our Strategic Pillars</h2>
            <p className="text-lg text-muted-foreground font-medium">
              A <span className="text-branded font-bold">comprehensive approach</span> to transform agriculture through infrastructure, policy, and capital mobilization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-10 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100">
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-800 transition-colors group-hover:text-branded">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {pillar.desc}
                </p>
                <Button asChild variant="ghost" className={`${pillar.color} hover:bg-slate-50 px-0 font-bold group-hover:gap-2 transition-all cursor-pointer`}>
                  <Link href={pillar.link}>
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agri Platform Section */}
      <section className="py-24 bg-slate-50 animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl heading-flagship mb-6">Agri Platform</h2>
            <p className="text-lg text-muted-foreground font-medium">
              <span className="text-branded font-bold">Integrated tools</span> and services designed to empower every player in the agricultural ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-none shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Factory className="w-8 h-8 text-emerald-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Agri Industry</h3>
              <p className="text-slate-600 mb-6">Advanced industrial processing solutions to add value to your harvests and reach global standards.</p>
              <Button asChild variant="link" className="p-0 text-emerald-600 h-auto font-bold">
                <Link href="/agri-industry">Explore Processing <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </Card>

            <Card className="p-8 border-none shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <DollarSign className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Financial Services</h3>
              <p className="text-slate-600 mb-6">Seamless loans, banking, and insurance services tailored specifically for the agricultural sector.</p>
              <Button asChild variant="link" className="p-0 text-blue-600 h-auto font-bold">
                <Link href="/financial-services">Get Financed <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </Card>

            <Card className="p-8 border-none shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Users className="w-8 h-8 text-orange-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Extension Hub</h3>
              <p className="text-slate-600 mb-6">Connect with experts for real-time advice and modern farming techniques to boost your productivity.</p>
              <Button asChild variant="link" className="p-0 text-orange-600 h-auto font-bold">
                <Link href="/extension-hub">Consult Experts <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </Card>

            <Card className="p-8 border-none shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <Globe className="w-8 h-8 text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Diaspora Investment</h3>
              <p className="text-slate-600 mb-6">Connect Sierra Leonean diaspora investors with high-impact agricultural opportunities back home.</p>
              <Button asChild variant="link" className="p-0 text-purple-600 h-auto font-bold">
                <Link href="/diaspora-invest">Invest Now <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </Card>

            <Card className="p-8 border-none shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Sprout className="w-8 h-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Feed Salone</h3>
              <p className="text-slate-600 mb-6">National food security initiative driving local production and reducing import dependency.</p>
              <Button asChild variant="link" className="p-0 text-green-600 h-auto font-bold">
                <Link href="/feed-salone">Learn More <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </Card>

            <Card className="p-8 border-none shadow-xl hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                <ShieldCheck className="w-8 h-8 text-rose-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Crop Insurance</h3>
              <p className="text-slate-600 mb-6">Protect your crops against climate risks and unforeseen losses with affordable insurance coverage.</p>
              <Button asChild variant="link" className="p-0 text-rose-600 h-auto font-bold">
                <Link href="/crop-insurance">Get Protected <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Agri Opportunity Portal - Replaces AI Resilience */}
      <section className="py-24 bg-blue-900 text-white overflow-hidden relative animate-on-scroll">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/20 -skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-extra-bold mb-8">Agri Opportunity Portal</h2>
              <p className="text-lg text-blue-100/80 mb-10 leading-relaxed">
                Unlock access to national and international agricultural growth. We centralize all government schemes, global grants, and private investment opportunities for every agriprenuer.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <Link href="/government-schemes" className="block p-6 bg-blue-800/40 rounded-2xl border border-blue-700/50 hover:border-primary transition-all group backdrop-blur-sm">
                  <Building2 className="w-8 h-8 text-primary mb-4" />
                  <h4 className="font-bold mb-2">Government Schemes</h4>
                  <p className="text-sm text-blue-200/70">Access low-interest loans, grants, and subsidies from the ministry.</p>
                </Link>
                <Link href="/diaspora-invest" className="block p-6 bg-blue-800/40 rounded-2xl border border-blue-700/50 hover:border-secondary transition-all backdrop-blur-sm">
                  <Globe className="w-8 h-8 text-secondary mb-4" />
                  <h4 className="font-bold mb-2">Global Investment</h4>
                  <p className="text-sm text-blue-200/70">Connect with international investors and export market opportunities.</p>
                </Link>
              </div>
              <Button asChild className="mt-12 bg-white text-blue-900 hover:bg-slate-100 font-bold h-12 px-8 rounded-full">
                <Link href="/agri-opp-portal">Explore All Opportunities</Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-secondary p-1 rounded-3xl shadow-2xl">
                <div className="bg-blue-950 rounded-[22px] p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center">
                      <TrendingUp className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold">Market Intelligence</h4>
                      <p className="text-xs text-blue-300">Live Price Index (Sierra Leone)</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[
                      { name: "Local Rice", price: "Le 850", change: "+4.2%", color: "text-emerald-400" },
                      { name: "Palm Oil", price: "Le 600", change: "+1.8%", color: "text-emerald-400" },
                      { name: "Cassava", price: "Le 450", change: "-0.5%", color: "text-rose-400" }
                    ].map((m, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-blue-900 pb-4 last:border-0 last:pb-0">
                        <span className="font-medium">{m.name}</span>
                        <div className="text-right">
                          <div className="font-bold">{m.price}</div>
                          <div className={`text-[10px] font-bold ${m.color}`}>{m.change}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="w-full mt-8 border border-white/10 hover:bg-white/5 text-blue-200 hover:text-white">
                    <Link href="/marketplace">View Market Dashboard</Link>
                  </Button>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features in Action Section - Continues in next message due to length */}
      <section className="py-24 bg-white animate-on-scroll">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16 px-4">
            <h2 className="text-4xl md:text-5xl heading-flagship mb-6">AI Features in Action</h2>
            <p className="text-lg text-slate-600 font-medium">
              See how our <span className="text-branded font-bold italic">Artificial Intelligence</span> tools are being used by farmers and agronomists across project sites globally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Disease Diagnostic Scan",
                feature: "Disease Sentinel",
                desc: "Farmers in Kenema using AI to identify cocoa pod pathogens directly in the field.",
                img: "/ai-disease-op.png",
                icon: Bug,
                color: "text-primary",
                link: "/disease-detection"
              },
              {
                title: "Real-time Soil Mapping",
                feature: "Soil Advisor",
                desc: "Project agronomists analyzing nutrient deficiencies in rice paddies in Bo District.",
                img: "/ai-soil-op.png",
                icon: Sprout,
                color: "text-secondary",
                link: "/branches/soil-science"
              },
              {
                title: "Dynamic Price Analysis",
                feature: "Market Intelligence",
                desc: "Market traders in Freetown adjusting sourcing strategies based on live price insights.",
                img: "/ai-market-op.png",
                icon: TrendingUp,
                color: "text-accent",
                link: "/marketplace"
              },
              {
                title: "Smart Weather Prediction",
                feature: "Weather Intelligence",
                desc: "Real-time climate monitoring and early warning systems for smallholder farms.",
                img: "/ai-weather-op.png",
                icon: Cloud,
                color: "text-blue-500",
                link: "/climate"
              },
              {
                title: "AI Land Mapping",
                feature: "Land Preparation",
                desc: "Precision topographical mapping and moisture analysis for optimized land clearing.",
                img: "/ai-land-op.png",
                icon: MapPin,
                color: "text-emerald-500",
                link: "/farm-management"
              },
              {
                title: "Crop Suitability Analysis",
                feature: "Crop Recommendation",
                desc: "AI-driven selection of optimal crops based on historical climate and soil data.",
                img: "/ai-crop-op.png",
                icon: ShieldCheck,
                color: "text-orange-500",
                link: "/crop-recommendation"
              }
            ].map((item, i) => (
              <Card key={i} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                    Field Operation
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    {item.icon && <item.icon className={`w-5 h-5 ${item.color}`} />}
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">{item.feature}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-branded transition-all">{item.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <Button asChild variant="outline" className="w-full rounded-full border-2 hover:bg-slate-50 cursor-pointer">
                    <Link href={item.link}>
                      View Case Study
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Coalition - Natural & Interactive */}
      <section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-sm font-black text-slate-400 uppercase tracking-[0.3em] mb-16 animate-on-scroll">
            Powered by a global coalition
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">
            {/* President / State House - Static */}
            <div className="flex justify-center h-32 w-full animate-on-scroll" style={{ transitionDelay: '100ms' }}>
              <img src="/state-house-logo.jpg" alt="Office of the President" className="h-full w-auto object-contain transition-transform hover:scale-105" />
            </div>

            <div className="flex justify-center animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <img src="/mafs-feed-salone.png" alt="MAFS & Feed Salone" className="h-28 w-auto object-contain hover:scale-105 transition-transform" />
            </div>

            <div className="flex justify-center animate-on-scroll" style={{ transitionDelay: '300ms' }}>
              <img src="/wfp-logo.jpg" alt="World Food Program" className="h-24 w-auto object-contain hover:scale-105 transition-transform" />
            </div>

            {/* World Bank Group - Static */}
            <div className="flex justify-center h-32 w-full animate-on-scroll" style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-2 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition-transform hover:scale-105">
                <div className="w-12 h-12 rounded-full border-[3px] border-[#0072C6] flex items-center justify-center p-1">
                  <Globe className="w-full h-full text-[#0072C6]" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-[10px] font-bold text-[#0072C6] uppercase tracking-tighter">The</span>
                  <span className="text-xl font-black text-[#0072C6] tracking-tight">WORLD BANK</span>
                  <span className="text-[10px] font-bold text-[#555] uppercase tracking-widest border-t border-slate-200 mt-0.5 pt-0.5">GROUP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes cycle-vertical-hero {
          0% { transform: translateY(0); }
          28% { transform: translateY(0); }
          33% { transform: translateY(-25%); }
          61% { transform: translateY(-25%); }
          66% { transform: translateY(-50%); }
          94% { transform: translateY(-50%); }
          100% { transform: translateY(-75%); }
        }
        @keyframes cycle-vertical-banner {
          0% { transform: translateY(0); }
          45% { transform: translateY(0); }
          50% { transform: translateY(-33.33%); }
          95% { transform: translateY(-33.33%); }
          100% { transform: translateY(-66.66%); }
        }
        .animate-cycle-vertical-hero {
          animation: cycle-vertical-hero 20s infinite cubic-bezier(0.85, 0, 0.15, 1);
        }
        .animate-cycle-vertical-banner {
          animation: cycle-vertical-banner 12s infinite cubic-bezier(0.85, 0, 0.15, 1);
        }
      `}</style>

      {/* Call to Action - Feed Salone Banner with Sliding Transition */}
      <section className="relative h-[650px] w-full overflow-hidden animate-on-scroll border-t-8 border-primary">
        <div className="absolute inset-0 flex flex-col h-[300%] animate-cycle-vertical-banner">
          <div
            className="h-[33.33%] w-full bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: "url('/feed-salone-banner.jpg')" }}
          />
          <div
            className="h-[33.33%] w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/feed-salone-manifesto.jpg')" }}
          />
          <div
            className="h-[33.33%] w-full bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: "url('/feed-salone-banner.jpg')" }}
          />
        </div>

        {/* Dark Overlay for bottom text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end items-center pb-24">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-black px-12 h-16 text-xl rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95">
              <Link href="/profile">Register Your Farm</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white bg-white/20 backdrop-blur-md text-white hover:bg-white/40 font-black px-12 h-16 text-xl rounded-full transition-all hover:scale-105 active:scale-95">
              <Link href="/marketplace">Explore Marketplace</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer - Sierra Leone Patriotic Design */}
      <footer className="relative bg-[#004182] text-white">
        {/* Flag Stripes Top */}
        <div className="flex h-3 w-full">
          <div className="flex-1 bg-[#1EB53A]"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#0072C6]"></div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1">
              <div className="flex flex-col items-start gap-6 mb-6">
                <div className="bg-white p-3 rounded-2xl shadow-xl">
                  <img src="/coat-of-arms.png" alt="Sierra Leone Coat of Arms" className="h-24 w-auto object-contain" />
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-12 h-12 text-[#1EB53A]" />
                  <span
                    className="text-5xl font-black tracking-tighter uppercase italic"
                    style={{
                      color: '#1EB53A',
                      textShadow: `
                        -1px -1px 0 #fff,  
                         1px -1px 0 #fff,
                        -1px  1px 0 #fff,
                         1px  1px 0 #fff,
                        -3px -3px 0 #0072C6,
                         3px -3px 0 #0072C6,
                        -3px  3px 0 #0072C6,
                         3px  3px 0 #0072C6
                      `
                    }}
                  >
                    Agri-Connect.sl
                  </span>
                </div>
              </div>
              <p className="text-blue-100/70 leading-relaxed font-medium">
                Driving national food security and economic prosperity through the <span className="text-[#1EB53A] font-bold">Feed Salone</span> initiative. 🇸🇱
              </p>
            </div>

            <div>
              <h4 className="font-black mb-8 text-xl uppercase tracking-widest border-b-2 border-[#1EB53A] w-fit pb-1">Platform</h4>
              <ul className="space-y-4 text-blue-100/80">
                <li><Link href="/marketplace" className="hover:text-[#1EB53A] font-bold transition-all flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Marketplace</Link></li>
                <li><Link href="/agri-ai" className="hover:text-[#1EB53A] font-bold transition-all flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> AI Services</Link></li>
                <li><Link href="/financial-services" className="hover:text-[#1EB53A] font-bold transition-all flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Financial Services</Link></li>
                <li><Link href="/agri-industry" className="hover:text-[#1EB53A] font-bold transition-all flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Agri Industry</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-8 text-xl uppercase tracking-widest border-b-2 border-white w-fit pb-1">Resources</h4>
              <ul className="space-y-4 text-blue-100/80">
                <li><Link href="/about" className="hover:text-white font-bold transition-all">About Us</Link></li>
                <li><Link href="/feed-salone" className="hover:text-white font-bold transition-all">Feed Salone</Link></li>
                <li><Link href="/diaspora-invest" className="hover:text-white font-bold transition-all">Diaspora Investment</Link></li>
                <li><Link href="/crop-insurance" className="hover:text-white font-bold transition-all">Crop Insurance</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black mb-8 text-xl uppercase tracking-widest border-b-2 border-[#0072C6] w-fit pb-1">Connect</h4>
              <div className="space-y-6 text-blue-100/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1EB53A] shrink-0" />
                  <p className="font-medium text-sm">Ministry of Agriculture & Food Security,<br />Youyi Building, Freetown</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white shrink-0" />
                  <p className="font-bold">+232 76 123 456</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0072C6] shrink-0" />
                  <p className="font-bold">info@agriconnect.sl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Flag Stripe Bottom */}
          <div className="flex h-1 w-full mb-8 opacity-50">
            <div className="flex-1 bg-[#1EB53A]"></div>
            <div className="flex-1 bg-white"></div>
            <div className="flex-1 bg-[#0072C6]"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-blue-200/50 text-xs font-bold uppercase tracking-widest">
            <p>© 2024 Agri-connect.sl. Official Government Portal.</p>
            <div className="flex gap-8">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Web Accessibility</span>
            </div>
            <p>Designed for Sierra Leone 🇸🇱</p>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  )
}
