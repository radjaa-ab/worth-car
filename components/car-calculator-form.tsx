'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import Image from 'next/image'

interface FormData {
  age: number
  income: number
  lifestyle: string
  drivingStyle: string
  environmentalConcern: number
}

const lifestyleOptions = [
  { value: 'luxury', label: 'Luxury', image: '/placeholder.svg?height=64&width=64' },
  { value: 'sporty', label: 'Sporty', image: '/placeholder.svg?height=64&width=64' },
  { value: 'family', label: 'Family', image: '/placeholder.svg?height=64&width=64' },
  { value: 'adventure', label: 'Adventure', image: '/placeholder.svg?height=64&width=64' },
]

const drivingStyles = [
  { value: 'careful', label: 'Careful & Steady' },
  { value: 'balanced', label: 'Balanced' },
  { value: 'dynamic', label: 'Dynamic & Sporty' },
]

export function CarCalculatorForm() {
  const [formData, setFormData] = useState<FormData>({
    age: 25,
    income: 50000,
    lifestyle: '',
    drivingStyle: 'balanced',
    environmentalConcern: 5,
  })

  const [result, setResult] = useState<string>('')

  const calculateCarMatch = (data: FormData) => {
    // Simple matching logic - can be expanded
    if (data.lifestyle === 'luxury' && data.income > 80000) {
      return 'Mercedes-Benz S-Class'
    } else if (data.lifestyle === 'sporty' && data.drivingStyle === 'dynamic') {
      return 'Porsche 911'
    } else if (data.environmentalConcern > 7) {
      return 'Tesla Model 3'
    } else if (data.lifestyle === 'family') {
      return 'Toyota RAV4'
    } else if (data.lifestyle === 'adventure') {
      return 'Jeep Wrangler'
    }
    return 'Honda Civic' // Default option
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const matchedCar = calculateCarMatch(formData)
    setResult(matchedCar)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Find Your Perfect Car Match</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label>Age</Label>
            <Slider
              value={[formData.age]}
              onValueChange={(value) => setFormData({ ...formData, age: value[0] })}
              min={18}
              max={80}
              step={1}
              className="w-full"
            />
            <div className="text-center text-sm text-muted-foreground">{formData.age} years</div>
          </div>

          <div className="space-y-2">
            <Label>Annual Income ($)</Label>
            <Slider
              value={[formData.income]}
              onValueChange={(value) => setFormData({ ...formData, income: value[0] })}
              min={20000}
              max={200000}
              step={5000}
              className="w-full"
            />
            <div className="text-center text-sm text-muted-foreground">${formData.income.toLocaleString()}</div>
          </div>

          <div className="space-y-2">
            <Label>Lifestyle</Label>
            <div className="grid grid-cols-4 gap-4">
              {lifestyleOptions.map((option) => (
                <div key={option.value} className="text-center">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, lifestyle: option.value })}
                    className={`w-full aspect-square rounded-lg p-2 flex flex-col items-center justify-center gap-2 border-2 transition-all
                      ${formData.lifestyle === option.value ? 'border-primary bg-primary/10' : 'border-muted hover:border-primary/50'}`}
                  >
                    <Image
                      src={option.image}
                      alt={option.label}
                      width={64}
                      height={64}
                      className="rounded-md"
                    />
                    <span className="text-sm font-medium">{option.label}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Driving Style</Label>
            <RadioGroup
              value={formData.drivingStyle}
              onValueChange={(value) => setFormData({ ...formData, drivingStyle: value })}
              className="flex gap-4"
            >
              {drivingStyles.map((style) => (
                <div key={style.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={style.value} id={style.value} />
                  <Label htmlFor={style.value}>{style.label}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Environmental Concern</Label>
            <Slider
              value={[formData.environmentalConcern]}
              onValueChange={(value) => setFormData({ ...formData, environmentalConcern: value[0] })}
              min={1}
              max={10}
              step={1}
              className="w-full"
            />
            <div className="text-center text-sm text-muted-foreground">Level: {formData.environmentalConcern}/10</div>
          </div>

          <Button type="submit" className="w-full">Find My Car Match</Button>
        </form>

        {result && (
          <div className="mt-6 p-4 bg-primary/10 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Your Perfect Car Match</h3>
            <p className="text-2xl font-bold text-primary">{result}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Based on your lifestyle, preferences, and other factors
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

