import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Renewable Energy",
      description:
        "Explore the latest trends and innovations in the renewable energy sector and how they are shaping our sustainable future.",
      image: "/placeholder.svg?height=400&width=600",
      date: "April 15, 2023",
      author: "John Smith",
      slug: "future-of-renewable-energy",
    },
    {
      id: 2,
      title: "Benefits of Solar Power for Businesses",
      description:
        "Discover how businesses can benefit from implementing solar power solutions and reduce their carbon footprint.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 22, 2023",
      author: "Sarah Johnson",
      slug: "benefits-of-solar-power-for-businesses",
    },
    {
      id: 3,
      title: "Wind Energy: A Sustainable Alternative",
      description:
        "Learn about the advantages of wind energy and how it contributes to a more sustainable and cleaner environment.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 10, 2023",
      author: "Michael Brown",
      slug: "wind-energy-sustainable-alternative",
    },
    {
      id: 4,
      title: "The Role of Energy Storage in Renewable Systems",
      description:
        "Understand the importance of energy storage solutions in maximizing the efficiency of renewable energy systems.",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 5, 2023",
      author: "Emily Davis",
      slug: "role-of-energy-storage",
    },
    {
      id: 5,
      title: "Government Incentives for Renewable Energy Projects",
      description:
        "An overview of government incentives and policies that support the adoption of renewable energy technologies.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 18, 2022",
      author: "Robert Wilson",
      slug: "government-incentives-renewable-energy",
    },
    {
      id: 6,
      title: "Hydroelectric Power: Harnessing Nature's Energy",
      description: "Explore how hydroelectric power works and its role in the global renewable energy landscape.",
      image: "/placeholder.svg?height=400&width=600",
      date: "November 30, 2022",
      author: "Jennifer Lee",
      slug: "hydroelectric-power-natures-energy",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Blog</h1>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Stay updated with the latest news, insights, and trends in the renewable energy industry.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden sm:h-56">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="space-y-1">
                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date} • by {post.author}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">{post.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
