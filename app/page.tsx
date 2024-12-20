import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold">Car Worth Calculator</h1>
          <p className="text-xl">Calculate how many cars your partner is worth!</p>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/female">
              <Button className="w-full h-32 text-xl">
                Calculate for Girlfriend
              </Button>
            </Link>
            <Link href="/male">
              <Button className="w-full h-32 text-xl">
                Calculate for Boyfriend
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

