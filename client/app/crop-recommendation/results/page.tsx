import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Eye } from 'lucide-react'

const cropRecommendations = [
  {
    name: 'Maize',
    match: '100% Match',
    recommendation: 'Highly Recommended',
    expectedYield: '5,442 kg/ha',
    investment: 'Le 476,040/ha',
    duration: '90-120 days',
    profitPotential: 'High',
    marketType: 'Food Grain',
    waterNeed: 'Medium',
    badgeColor: 'bg-success text-success-foreground'
  },
  {
    name: 'Tomato',
    match: '98.8% Match',
    recommendation: 'Highly Recommended',
    expectedYield: '42,828 kg/ha',
    investment: 'Le 937,980/ha',
    duration: '90-120 days',
    profitPotential: 'Very High',
    marketType: 'Vegetable',
    waterNeed: 'High',
    badgeColor: 'bg-success text-success-foreground'
  },
  {
    name: 'Cotton',
    match: '95% Match',
    recommendation: 'Highly Recommended',
    expectedYield: '1,755 kg/ha',
    investment: 'Le 868,060/ha',
    duration: '160-200 days',
    profitPotential: 'Very High',
    marketType: 'Cash Crop',
    waterNeed: 'Medium',
    badgeColor: 'bg-success text-success-foreground'
  },
  {
    name: 'Groundnut',
    match: '95% Match',
    recommendation: 'Highly Recommended',
    expectedYield: '1,715 kg/ha',
    investment: 'Le 484,340/ha',
    duration: '100-120 days',
    profitPotential: 'High',
    marketType: 'Oilseed',
    waterNeed: 'Medium',
    badgeColor: 'bg-success text-success-foreground'
  }
]

export default function CropRecommendationResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3">Your Crop Recommendations</h1>
            <p className="text-muted-foreground text-lg">
              Based on your soil, climate, and farming conditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cropRecommendations.map((crop, index) => (
              <Card key={index} className="p-6 border-2 border-success/20 bg-gradient-to-br from-success/5 to-transparent">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{crop.name}</h3>
                  <Badge className={crop.badgeColor}>{crop.match}</Badge>
                </div>

                <div className="mb-4">
                  <p className="text-success font-semibold text-lg">{crop.recommendation}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Expected Yield</p>
                    <p className="font-semibold text-lg">{crop.expectedYield}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Investment</p>
                    <p className="font-semibold text-lg">{crop.investment}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">{crop.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Profit Potential</p>
                    <Badge variant="secondary" className={crop.profitPotential === 'Very High' ? 'bg-info text-info-foreground' : 'bg-primary/20 text-primary'}>
                      {crop.profitPotential}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Market Type:</span>
                    <span className="font-medium">{crop.marketType}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Water Need:</span>
                    <span className="font-medium">{crop.waterNeed}</span>
                  </div>
                </div>

                <Button className="w-full" variant="default">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/crop-recommendation">Try Another Recommendation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
