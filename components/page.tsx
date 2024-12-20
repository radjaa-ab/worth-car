import { CarCalculatorForm } from "../components/car-calculator-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Car Match Calculator</h1>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Answer a few questions about yourself and we'll match you with your perfect car. 
          Our advanced algorithm considers your lifestyle, preferences, and needs to find the ideal vehicle for you.
        </p>
        <CarCalculatorForm />
      </main>
    </div>
  )
}

