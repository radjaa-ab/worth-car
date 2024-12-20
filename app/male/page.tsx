import { Header } from "@/components/header"
import { CalculatorForm } from "@/components/calculator-form"

export default function MalePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-orange-100">
      <Header gender="male" />
      <CalculatorForm gender="male" />
    </div>
  )
}

