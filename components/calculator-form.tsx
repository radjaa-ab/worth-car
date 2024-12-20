'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Facebook, Twitter, Scissors, User } from 'lucide-react'

interface CalculatorFormProps {
  gender: 'male' | 'female'
}

export function CalculatorForm({ gender }: CalculatorFormProps) {
  const [formData, setFormData] = useState({
    age: 18,
    height: 165,
    hairColor: '',
    hairLength: '',
    eyeColor: '',
    bodyType: '',
    beard: gender === 'male' ? '' : undefined,
  })
  const [result, setResult] = useState<string | null>(null)

  const handleCalculate = () => {
    // Simplified calculation logic
    const baseValue = Math.floor(Math.random() * 5) + 1
    setResult(`${baseValue}`)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {!result ? (
        <Card className="p-6 bg-white/90">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Age</Label>
              <Slider
                value={[formData.age]}
                onValueChange={(value) => setFormData({ ...formData, age: value[0] })}
                min={18}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="text-center">{formData.age}</div>
            </div>

            <div className="space-y-2">
              <Label>Height (cm)</Label>
              <Slider
                value={[formData.height]}
                onValueChange={(value) => setFormData({ ...formData, height: value[0] })}
                min={140}
                max={220}
                step={1}
                className="w-full"
              />
              <div className="text-center">{formData.height}</div>
            </div>

            <div className="space-y-2">
              <Label>Hair color</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, hairColor: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select hair color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="blonde">Blonde</SelectItem>
                  <SelectItem value="brown">Brown</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Hair length</Label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { length: 'short', icon: <Scissors size={24} /> },
                  { length: 'medium', icon: <Scissors size={32} /> },
                  { length: 'long', icon: <Scissors size={40} /> }
                ].map(({ length, icon }) => (
                  <button
                    key={length}
                    type="button"
                    onClick={() => setFormData({ ...formData, hairLength: length })}
                    className={`p-4 border-2 rounded-lg ${
                      formData.hairLength === length ? 'border-primary bg-primary/10' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-center items-center h-10 mb-2">
                      {icon}
                    </div>
                    <span className="text-sm capitalize">{length}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Eye color</Label>
              <RadioGroup
                onValueChange={(value) => setFormData({ ...formData, eyeColor: value })}
                className="flex justify-center gap-4"
              >
                {['blue', 'green', 'brown', 'grey'].map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem value={color} id={color} />
                    <Label htmlFor={color} className="capitalize">{color}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {gender === 'male' && (
              <div className="space-y-2">
                <Label>Beard</Label>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { type: 'none', icon: <User size={24} /> },
                    { type: 'stubble', icon: <User size={24} className="[&>circle]:opacity-25" /> },
                    { type: 'short', icon: <User size={24} className="[&>circle]:opacity-50" /> },
                    { type: 'full', icon: <User size={24} className="[&>circle]:opacity-100" /> }
                  ].map(({ type, icon }) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, beard: type })}
                      className={`p-4 border-2 rounded-lg ${
                        formData.beard === type ? 'border-primary bg-primary/10' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex justify-center items-center h-10 mb-2">
                        {icon}
                      </div>
                      <span className="text-sm capitalize">{type}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button 
              onClick={handleCalculate}
              className="w-full bg-orange-500 hover:bg-orange-600"
            >
              CALCULATE
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="p-6 text-center bg-white/90">
          <h2 className="text-xl mb-2">Your {gender === 'male' ? 'boyfriend' : 'girlfriend'} is worth</h2>
          <div className="text-6xl font-bold mb-4">{result}</div>
          <p className="mb-6">cars.</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="bg-[#1877f2] text-white hover:bg-[#1877f2]/90">
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
            <Button variant="outline" className="bg-[#1da1f2] text-white hover:bg-[#1da1f2]/90">
              <Twitter className="w-4 h-4 mr-2" />
              Twitter
            </Button>
          </div>
          <Button 
            onClick={() => setResult(null)} 
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600"
          >
            CALCULATE AGAIN?
          </Button>
        </Card>
      )}
    </div>
  )
}

