'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Calculator() {
  const [result, setResult] = useState<number | null>(null)

  const calculateCarValue = (formData: FormData) => {
    // This is a simple example calculation
    const age = Number(formData.get('age'))
    const income = Number(formData.get('income'))
    const carInterest = Number(formData.get('carInterest'))
    
    // Simple formula: (income / 10000) * (carInterest / 2) * (1 - age/100)
    const value = (income / 10000) * (carInterest / 2) * (1 - age/100)
    setResult(Math.max(1, Math.round(value)))
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Calculate Your Car Value</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={calculateCarValue} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input type="number" id="age" name="age" placeholder="Enter age" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="income">Annual Income ($)</Label>
            <Input type="number" id="income" name="income" placeholder="Enter income" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="carInterest">Car Interest Level (1-10)</Label>
            <Select name="carInterest">
              <SelectTrigger>
                <SelectValue placeholder="Select interest level" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">Calculate</Button>
        </form>

        {result && (
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold">Your car value:</h3>
            <p className="text-4xl font-bold text-primary">{result} cars</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

