import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function InfoSection() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Cars as Status Symbols?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Throughout history, cars have been seen as status symbols in many cultures. 
            From luxury vehicles to vintage collectibles, cars often represent more than 
            just transportation - they can symbolize success, style, and personal taste.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fun Facts About Cars</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>The first car was created in 1886 by Karl Benz.</li>
            <li>The average car has around 30,000 parts.</li>
            <li>The world's first speeding ticket was issued in 1902.</li>
            <li>The most expensive car ever sold was a 1955 Mercedes-Benz 300 SLR Uhlenhaut Coupe for $142 million.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

