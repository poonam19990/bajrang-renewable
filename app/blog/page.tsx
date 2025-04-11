import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import smart from "@/public/blog/smart.jpg"
import hvdc from "@/public/blog/HVDC.jpeg"
import sustain from "@/public/blog/sustain-ss.jpg"
import hybrid from "@/public/blog/hybrid.webp"
import { truncateWords } from "@/components/truncateWords"
export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Smart Substations & Digitalization",
      description:
        "Smart substations are at the forefront of the digital transformation in power systems. They incorporate Intelligent Electronic Devices (IEDs), such as smart sensors and digital relays, to monitor and control electrical parameters in real-time. These devices communicate over high-speed, secure digital networks, facilitating centralized control and data analysis through systems like Supervisory Control and Data Acquisition (SCADA). This digitalization leads to enhanced reliability, improved asset management, and reduced operational costs.​",
      image: smart,
      date: "April 15, 2023",
      author: "John Smith",
      slug: "future-of-renewable-energy",
    },
    {
      id: 2,
      title: "Hybrid Wind-Solar Substations",
      description:
        "Hybrid substations integrate renewable energy sources, specifically wind and solar power, into the traditional grid infrastructure. By combining gas-insulated and air-insulated switchgear technologies, these substations achieve a compact footprint and increased efficiency. This integration supports the transition to sustainable energy by accommodating the variability of renewable sources and enhancing grid stability.",
      image: hybrid,
      date: "March 22, 2023",
      author: "Sarah Johnson",
      slug: "benefits-of-solar-power-for-businesses",
    },
    {
      id: 3,
      title: "High Voltage Direct Current (HVDC) Transmission",
      description:
        "HVDC transmission systems are essential for long-distance, high-capacity power transfer. They offer advantages over alternating current (AC) systems, including lower line losses and the ability to connect asynchronous grids. Notable projects like HVDC BorWin1 and HVDC HelWin1 in Germany exemplify the successful integration of offshore wind energy into the mainland grid, utilizing voltage-sourced converters and subsea cables to efficiently transmit power over long distances. ​",
      image: hvdc,
      date: "February 10, 2023",
      author: "Michael Brown",
      slug: "wind-energy-sustainable-alternative",
    },
    {
      id: 4,
      title: "Sustainable & Modular Substation Designs",
      description:
        "Sustainable substation designs prioritize environmental considerations by incorporating renewable energy sources and minimizing ecological impact. Modular substations offer flexibility and scalability, allowing for easier upgrades and adaptability to changing energy demands. This approach contributes to a more resilient and eco-friendly power infrastructure, aligning with global sustainability goals.",
      image: sustain,
      date: "January 5, 2023",
      author: "Emily Davis",
      slug: "role-of-energy-storage",
    },
    // {
    //   id: 5,
    //   title: "Government Incentives for Renewable Energy Projects",
    //   description:
    //     "An overview of government incentives and policies that support the adoption of renewable energy technologies.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   date: "December 18, 2022",
    //   author: "Robert Wilson",
    //   slug: "government-incentives-renewable-energy",
    // },
    // {
    //   id: 6,
    //   title: "Hydroelectric Power: Harnessing Nature's Energy",
    //   description: "Explore how hydroelectric power works and its role in the global renewable energy landscape.",
    //   image: "/placeholder.svg?height=400&width=600",
    //   date: "November 30, 2022",
    //   author: "Jennifer Lee",
    //   slug: "hydroelectric-power-natures-energy",
    // },
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
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date} • by {post.author}
                </p> */}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">{truncateWords(post.description)}</p>
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
