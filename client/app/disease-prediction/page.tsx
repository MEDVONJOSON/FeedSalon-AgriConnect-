'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Bug, Upload, Loader2, AlertTriangle, CheckCircle, Info } from 'lucide-react'

export default function DiseasePredictionPage() {
  const [cropType, setCropType] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [error, setError] = useState('')

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!imageFile || !cropType) {
      setError('Please select a crop type and upload an image')
      return
    }

    setLoading(true)
    setError('')
    setResults(null)

    try {
      // Convert image to base64 (simplified for demo)
      const reader = new FileReader()
      reader.onloadend = async () => {
        const response = await fetch('http://localhost:5000/api/ai/disease-detection', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            imageData: reader.result,
            cropType: cropType
          })
        })

        if (!response.ok) throw new Error('Failed to detect disease')

        const data = await response.json()
        setResults(data)
        setLoading(false)
      }
      reader.readAsDataURL(imageFile)
    } catch (err) {
      setError('Failed to analyze image. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="bg-red-100 p-3 rounded-lg">
                <Bug className="w-8 h-8 text-red-600" />
              </div>
              <h1 className="text-3xl font-bold">AI Disease Detection</h1>
            </div>
            <p className="text-muted-foreground">
              Upload a plant image to detect diseases and get treatment recommendations
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cropType">
                  Crop Type <span className="text-red-500">*</span>
                </Label>
                <Select value={cropType} onValueChange={setCropType}>
                  <SelectTrigger id="cropType">
                    <SelectValue placeholder="Select Crop Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="cassava">Cassava</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="cocoa">Cocoa</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">
                  Plant Image <span className="text-red-500">*</span>
                </Label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors">
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <label htmlFor="image" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-slate-400" />
                    {imageFile ? (
                      <p className="text-green-600 font-semibold">{imageFile.name}</p>
                    ) : (
                      <>
                        <p className="font-semibold mb-1">Click to upload plant image</p>
                        <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                      </>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg flex gap-3">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-blue-900 mb-1">Tips for Best Results:</p>
                <ul className="text-blue-800 list-disc list-inside space-y-1">
                  <li>Take clear, well-lit photos of affected leaves or stems</li>
                  <li>Focus on the diseased area</li>
                  <li>Avoid blurry or dark images</li>
                </ul>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                <p className="text-red-800">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full bg-red-600 hover:bg-red-700"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing Image...
                </>
              ) : (
                <>
                  <Bug className="w-5 h-5 mr-2" />
                  Detect Disease
                </>
              )}
            </Button>
          </form>

          {/* Results Section */}
          {results && (
            <div className="space-y-6 border-t pt-8">
              <h2 className="text-2xl font-bold text-center mb-6">Disease Analysis Results</h2>

              {/* Diagnosis Card */}
              <Card className={`p-6 ${results.diagnosis.disease === 'Healthy' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                <div className="flex items-start gap-4">
                  {results.diagnosis.disease === 'Healthy' ? (
                    <CheckCircle className="w-12 h-12 text-green-600 flex-shrink-0" />
                  ) : (
                    <AlertTriangle className="w-12 h-12 text-red-600 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{results.diagnosis.disease}</h3>
                    <div className="flex gap-3 mb-4">
                      <Badge variant="outline">
                        Confidence: {results.diagnosis.confidence}
                      </Badge>
                      <Badge className={
                        results.diagnosis.severity === 'None' ? 'bg-green-600' :
                          results.diagnosis.severity === 'Low' ? 'bg-yellow-600' :
                            results.diagnosis.severity === 'Medium' ? 'bg-orange-600' : 'bg-red-600'
                      }>
                        Severity: {results.diagnosis.severity}
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold mb-1">Affected Crop:</p>
                        <p className="text-muted-foreground capitalize">{results.additionalInfo.affectedCrop}</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-1">Detection Date:</p>
                        <p className="text-muted-foreground">{results.additionalInfo.detectionDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Symptoms */}
              {results.symptoms.length > 0 && (
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-3">Symptoms</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {results.symptoms.map((symptom: string, i: number) => (
                      <li key={i} className="capitalize">{symptom}</li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Treatment */}
              <Card className="p-6 bg-blue-50">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <Bug className="w-5 h-5 text-blue-600" />
                  Treatment Recommendations
                </h3>
                <p className="text-slate-700">{results.treatment}</p>
              </Card>

              {/* Prevention */}
              <Card className="p-6 bg-green-50">
                <h3 className="font-bold text-lg mb-3">Prevention Measures</h3>
                <p className="text-slate-700">{results.prevention}</p>
              </Card>

              {/* Action */}
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                <p className="font-semibold text-amber-900 mb-1">Recommended Action:</p>
                <p className="text-amber-800">{results.additionalInfo.recommendedAction}</p>
              </div>

              <Button
                onClick={() => {
                  setResults(null)
                  setImageFile(null)
                  setCropType('')
                }}
                variant="outline"
                className="w-full"
              >
                Analyze Another Image
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
