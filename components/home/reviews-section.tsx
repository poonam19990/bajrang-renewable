import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Karan Sukhdiya",
      company: "Polite Powertrac Pvt Ltd",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "Bajrang Renewable Working with this team has been a game-changer for our renewable energy projects. Their expertise in substation design, installation, and maintenance is unmatched. From the initial planning stages to final commissioning, they delivered with precision, professionalism, and a clear commitment to quality.",
    },
    {
      id: 2,
      name: "Mitesh Modi",
      company: "Suzlon Energy Ltd.",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      review:
        "We partnered with them for a 66kV substation upgrade, and the experience exceeded expectations. Their team brought innovative solutions to site challenges, and the execution was flawless. Highly professional and dependable."
    },
    {
      id: 3,
      name: "Himanshu Patel",
      company: "Shrinathji Electricals",
      image: "/placeholder.svg?height=100&width=100",
      rating: 4,
      review:
        "Their team delivered outstanding service from start to finish. The level of professionalism, technical expertise, and attention to detail was truly excellent",
    },
  ]

  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                      {/* <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image src={review.image || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
                      </div> */}
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{review.company}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200 dark:fill-gray-700 dark:text-gray-700"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400">{review.review}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
