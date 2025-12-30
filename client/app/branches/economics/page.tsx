'use client'

import { TrendingUp, DollarSign, PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function EconomicsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-warning text-warning-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Agri-Economics: Farm Financial Manager</h1>
          </div>
          <p className="text-primary-foreground/90 max-w-2xl">
            Track your farm's income and expenses, calculate profitability per crop, and manage your budget effectively.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
            <div className="text-muted-foreground text-sm mb-1">Total Revenue (YTD)</div>
            <div className="text-3xl font-bold text-foreground">SLE 45,000</div>
            <div className="flex items-center text-green-600 text-sm mt-2">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +12% vs last year
            </div>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm border border-border">
            <div className="text-muted-foreground text-sm mb-1">Total Expenses (YTD)</div>
            <div className="text-3xl font-bold text-foreground">SLE 18,500</div>
            <div className="flex items-center text-red-600 text-sm mt-2">
              <ArrowDownRight className="w-4 h-4 mr-1" />
              +5% vs last year
            </div>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-sm border border-border border-l-4 border-l-primary">
            <div className="text-muted-foreground text-sm mb-1">Net Profit</div>
            <div className="text-3xl font-bold text-warning">SLE 26,500</div>
            <div className="text-sm text-muted-foreground mt-2">Margin: 58%</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
              <DollarSign className="w-5 h-5 text-primary" />
              Recent Transactions
            </h2>
            <div className="space-y-4">
              {[
                { desc: 'Sold 50 bags of Rice', type: 'Income', amount: '+ SLE 12,500', date: 'Oct 24' },
                { desc: 'Fertilizer Purchase', type: 'Expense', amount: '- SLE 2,400', date: 'Oct 22' },
                { desc: 'Tractor Rental', type: 'Expense', amount: '- SLE 800', date: 'Oct 20' },
                { desc: 'Vegetable Sales', type: 'Income', amount: '+ SLE 1,200', date: 'Oct 18' },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                  <div>
                    <div className="font-medium text-foreground">{tx.desc}</div>
                    <div className="text-xs text-muted-foreground">{tx.date}</div>
                  </div>
                  <div className={`font-bold ${tx.type === 'Income' ? 'text-primary' : 'text-destructive'}`}>
                    {tx.amount}
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-center text-primary font-medium text-sm hover:underline">View All Transactions</button>
          </div>

          <div className="bg-card rounded-xl shadow-sm p-6 border border-border">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground">
              <PieChart className="w-5 h-5 text-primary" />
              Expense Breakdown
            </h2>
            <div className="space-y-4">
              {[
                { cat: 'Inputs (Seeds/Fertilizer)', pct: 45, color: 'bg-primary' },
                { cat: 'Labor', pct: 30, color: 'bg-secondary' },
                { cat: 'Machinery/Fuel', pct: 15, color: 'bg-warning' },
                { cat: 'Transport', pct: 10, color: 'bg-accent' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{item.cat}</span>
                    <span className="font-medium text-foreground">{item.pct}%</span>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
