import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import smart from "@/public/blog/smart.jpg"
import hvdc from "@/public/blog/HVDC.jpeg"
import sustain from "@/public/blog/sustain-ss.jpg"
import hybrid from "@/public/blog/hybrid.webp"

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  const blogPosts = {
    "future-of-renewable-energy": {
      title: "Smart Substations & Digitalization",
      date: "April 15, 2023",
      author: "John Smith",
      image: smart,
      content: `
       Smart substations are at the forefront of the digital transformation in power systems.
        They incorporate Intelligent Electronic Devices (IEDs), such as smart sensors and digital relays, to monitor and control electrical parameters in real-time.
         These devices communicate over high-speed, secure digital networks, facilitating centralized control and data analysis through systems like Supervisory Control and Data Acquisition (SCADA).
        This digitalization leads to enhanced reliability, improved asset management, and reduced operational costs.​
      `,
    },
    "benefits-of-solar-power-for-businesses": {
      title: "Hybrid Wind-Solar Substations",
      date: "March 22, 2023",
      author: "Sarah Johnson",
      image: hybrid,
      content: `
      <p>Hybrid substations integrate renewable energy sources, specifically wind and solar power, into the traditional grid infrastructure. </p>
      <p>By combining gas-insulated and air-insulated switchgear technologies, these substations achieve a compact footprint and increased efficiency. </p>
      <p>This integration supports the transition to sustainable energy by accommodating the variability of renewable sources and enhancing grid stability.</p>
      <p>Hybrid substations integrate renewable sources like wind and solar into traditional grid infrastructure. By combining gas-insulated and air-insulated switchgear technologies, they provide a compact design and reduce environmental impact.</p>

🔋<h2> Benefits:</h2>

<p>Reliable 24/7 power supply by balancing wind and solar variability</p>

<p>Reduced land usage and maintenance costs</p>

<p>Enhanced grid stability and resilience</p>
      `,
    },
    "wind-energy-sustainable-alternative": {
      title: "High Voltage Direct Current (HVDC) Transmission",
      date: "February 10, 2023",
      author: "Michael Brown",
      image: hvdc,
      content: `
        HVDC transmission systems are essential for long-distance, high-capacity power transfer. They offer advantages over alternating current (AC) systems, including lower line losses and the ability to connect asynchronous grids. Notable projects like HVDC BorWin1 and HVDC HelWin1 in Germany exemplify the successful integration of offshore wind energy into the mainland grid, utilizing voltage-sourced converters and subsea cables to efficiently transmit power over long distances. 
        HVDC is transforming the way we transmit energy across long distances. Unlike AC systems, HVDC minimizes line losses and allows asynchronous power systems to connect seamlessly. Projects like BorWin1 in Germany are already linking offshore wind energy to mainland grids efficiently.

🔌 Benefits:

Reduced energy losses over long distances

Lower infrastructure costs

Integration of remote renewable energy resources
      `,
    },
    "role-of-energy-storage": {
      title: "Sustainable & Modular Substation Designs",
      date: "January 5, 2023",
      author: "Emily Davis",
      image: sustain,
      content: `
        Sustainable substation designs prioritize environmental considerations by incorporating renewable energy sources and minimizing ecological impact. Modular substations offer flexibility and scalability, allowing for easier upgrades and adaptability to changing energy demands. This approach contributes to a more resilient and eco-friendly power infrastructure, aligning with global sustainability goals.
        Sustainability and scalability are at the core of modern substation design. Modular substations are prefabricated and easily deployable, which reduces on-site construction time and environmental disruption.

🌱 Benefits:

Quick installation and deployment

Eco-friendly design using low-impact materials

Easy upgrades and capacity expansion
      `,
    },
    "government-incentives-renewable-energy": {
      title: "Government Incentives for Renewable Energy Projects",
      date: "December 18, 2022",
      author: "Robert Wilson",
      image: "/placeholder.svg?height=600&width=1200",
      content: `
        <p>Government incentives play a crucial role in promoting the adoption of renewable energy. These incentives can make renewable energy projects more financially viable and accelerate the transition to a more sustainable energy future.</p>
        
        <h2>Types of Government Incentives</h2>
        <p>Governments around the world offer various types of incentives for renewable energy projects. These can include tax credits, grants, loans, feed-in tariffs, and renewable portfolio standards.</p>
        
        <h2>Tax Credits and Deductions</h2>
        <p>Tax credits and deductions can significantly reduce the cost of renewable energy projects. For example, the Investment Tax Credit (ITC) in the United States allows businesses to deduct a percentage of their investment in solar energy systems from their taxes.</p>
        
        <h2>Grants and Loans</h2>
        <p>Governments may also offer grants and low-interest loans for renewable energy projects. These can help cover the upfront costs of renewable energy systems, making them more accessible to businesses and individuals.</p>
        
        <h2>Feed-in Tariffs</h2>
        <p>Feed-in tariffs guarantee a fixed payment for renewable energy fed into the grid. This provides a stable income for renewable energy producers and can make renewable energy projects more financially viable.</p>
        
        <h2>Renewable Portfolio Standards</h2>
        <p>Renewable Portfolio Standards (RPS) require utilities to source a certain percentage of their electricity from renewable sources. This creates a market for renewable energy and can drive investment in renewable energy projects.</p>
        
        <h2>Conclusion</h2>
        <p>Government incentives are a powerful tool for promoting the adoption of renewable energy. By making renewable energy projects more financially viable, these incentives can accelerate the transition to a more sustainable energy future.</p>
      `,
    },
    "hydroelectric-power-natures-energy": {
      title: "Hydroelectric Power: Harnessing Nature's Energy",
      date: "November 30, 2022",
      author: "Jennifer Lee",
      image: "/placeholder.svg?height=600&width=1200",
      content: `
        <p>Hydroelectric power is one of the oldest and most established forms of renewable energy. It harnesses the energy of flowing water to generate electricity, providing a reliable and sustainable source of power.</p>
        
        <h2>How Hydroelectric Power Works</h2>
        <p>Hydroelectric power plants use the energy of flowing water to turn turbines, which then generate electricity. This can be done through various methods, including dams, run-of-river systems, and pumped storage.</p>
        
        <h2>Environmental Benefits</h2>
        <p>Hydroelectric power is a clean, renewable energy source that produces no direct waste or greenhouse gas emissions. It also has a long lifespan, with many hydroelectric plants operating for 50-100 years.</p>
        
        <h2>Economic Benefits</h2>
        <p>Hydroelectric power can provide significant economic benefits, including job creation, low operating costs, and long-term energy price stability. It can also provide additional benefits like flood control, irrigation, and recreational opportunities.</p>
        
        <h2>Challenges and Considerations</h2>
        <p>While hydroelectric power offers many benefits, it also presents some challenges. These can include impacts on aquatic ecosystems, displacement of communities for large dam projects, and dependence on rainfall and water availability.</p>
        
        <h2>The Future of Hydroelectric Power</h2>
        <p>The future of hydroelectric power includes both the continued operation of existing plants and the development of new, more environmentally friendly hydroelectric technologies. Small-scale and run-of-river hydroelectric systems, which have less environmental impact than large dams, are becoming increasingly popular.</p>
        
        <h2>Conclusion</h2>
        <p>Hydroelectric power plays a crucial role in our renewable energy mix, providing reliable, clean electricity. While it does present some challenges, ongoing technological advancements and careful planning can help to minimize these impacts and maximize the benefits of this important renewable energy source.</p>
      `,
    },
  }

  return blogPosts[slug as keyof typeof blogPosts] || null
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    return (
      <div className="container flex flex-col items-center justify-center px-4 py-12 text-center md:px-6 md:py-16 lg:py-20">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog Post Not Found</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          The blog post you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <Button asChild variant="outline" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
        </Button>

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div> */}

        <h1 className="mb-6 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{post.title}</h1>

        <div
          className="prose max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tighter prose-p:text-gray-500 dark:prose-p:text-gray-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 flex justify-center">
          <Button asChild>
            <Link href="/contact">Contact Us for More Information</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
