import { Car } from 'lucide-react'

export function Header({ gender }: { gender: 'male' | 'female' }) {
  return (
    <div className="w-full bg-gradient-to-b from-sky-200 to-transparent pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block">
            <Car size={80} className="mx-auto mb-2 text-blue-500" />
            <h1 className="text-2xl font-bold mb-4">
              How many cars is your {gender === 'male' ? 'boyfriend' : 'girlfriend'} worth?
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

