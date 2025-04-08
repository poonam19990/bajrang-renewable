import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or CMS
const getBlogPost = (slug: string) => {
  const blogPosts = {
    "future-of-renewable-energy": {
      title: "The Future of Renewable Energy",
      date: "April 15, 2023",
      author: "John Smith",
      image: "/placeholder.svg?height=600&width=1200",
      content: `
        <p>The renewable energy sector is experiencing unprecedented growth and innovation. As the world grapples with climate change and the need to reduce carbon emissions, renewable energy sources like solar, wind, and hydroelectric power are becoming increasingly important.</p>
        
        <h2>Technological Advancements</h2>
        <p>Recent technological advancements have significantly improved the efficiency and reduced the cost of renewable energy systems. Solar panels are becoming more efficient and less expensive, making them accessible to more people. Wind turbines are being designed to capture more energy with less environmental impact.</p>
        
        <h2>Energy Storage Solutions</h2>
        <p>One of the biggest challenges in renewable energy has been storage. However, battery technology is rapidly advancing, with new solutions being developed to store energy more efficiently and for longer periods. This is crucial for ensuring a consistent energy supply, even when the sun isn't shining or the wind isn't blowing.</p>
        
        <h2>Policy and Investment</h2>
        <p>Governments around the world are implementing policies to encourage the adoption of renewable energy. Tax incentives, subsidies, and regulations are being used to make renewable energy more attractive to businesses and consumers. Additionally, private investment in renewable energy is at an all-time high, with companies recognizing the long-term benefits of sustainable energy sources.</p>
        
        <h2>The Role of Artificial Intelligence</h2>
        <p>Artificial intelligence (AI) is playing an increasingly important role in optimizing renewable energy systems. AI can predict energy demand, optimize energy distribution, and improve the efficiency of renewable energy systems. This technology is helping to make renewable energy more reliable and cost-effective.</p>
        
        <h2>Conclusion</h2>
        <p>The future of renewable energy is bright. With continued technological advancements, supportive policies, and increased investment, renewable energy is set to become the dominant source of energy in the coming decades. This transition will not only help combat climate change but also create new economic opportunities and improve energy security.</p>
      `,
    },
    "benefits-of-solar-power-for-businesses": {
      title: "Benefits of Solar Power for Businesses",
      date: "March 22, 2023",
      author: "Sarah Johnson",
      image: "/placeholder.svg?height=600&width=1200",
      content: `
        <p>Solar power is becoming an increasingly popular choice for businesses looking to reduce their environmental impact and energy costs. This renewable energy source offers numerous benefits that can help businesses of all sizes.</p>
        
        <h2>Cost Savings</h2>
        <p>One of the most significant benefits of solar power for businesses is cost savings. While the initial investment in solar panels can be substantial, the long-term savings on energy bills can be significant. Many businesses see a return on their investment within 5-7 years, and solar panels typically have a lifespan of 25-30 years.</p>
        
        <h2>Tax Incentives and Rebates</h2>
        <p>Many governments offer tax incentives and rebates to businesses that install solar panels. These incentives can significantly reduce the upfront cost of solar installation, making it a more attractive option for businesses.</p>
        
        <h2>Environmental Benefits</h2>
        <p>Solar power is a clean, renewable energy source that produces no greenhouse gas emissions. By switching to solar power, businesses can significantly reduce their carbon footprint and contribute to the fight against climate change.</p>
        
        <h2>Energy Independence</h2>
        <p>Solar power allows businesses to generate their own electricity, reducing their dependence on the grid. This can provide energy security and protect against rising energy costs.</p>
        
        <h2>Enhanced Brand Image</h2>
        <p>Consumers are increasingly concerned about environmental issues and are more likely to support businesses that demonstrate a commitment to sustainability. By investing in solar power, businesses can enhance their brand image and attract environmentally conscious customers.</p>
        
        <h2>Conclusion</h2>
        <p>Solar power offers numerous benefits for businesses, from cost savings to environmental benefits. As technology continues to improve and costs continue to decrease, solar power is becoming an increasingly attractive option for businesses of all sizes.</p>
      `,
    },
    "wind-energy-sustainable-alternative": {
      title: "Wind Energy: A Sustainable Alternative",
      date: "February 10, 2023",
      author: "Michael Brown",
      image: "/placeholder.svg?height=600&width=1200",
      content: `
        <p>Wind energy is one of the fastest-growing renewable energy sources in the world. It offers a sustainable alternative to fossil fuels and plays a crucial role in the transition to a low-carbon economy.</p>
        
        <h2>How Wind Energy Works</h2>
        <p>Wind turbines convert the kinetic energy in wind into mechanical power, which can then be converted into electricity. Wind farms, consisting of multiple turbines, can generate significant amounts of electricity, which is fed into the grid and distributed to homes and businesses.</p>
        
        <h2>Environmental Benefits</h2>
        <p>Wind energy is a clean, renewable energy source that produces no greenhouse gas emissions during operation. It also has a minimal land footprint, as the land between turbines can still be used for agriculture or other purposes.</p>
        
        <h2>Economic Benefits</h2>
        <p>The wind energy industry creates jobs in manufacturing, installation, maintenance, and operations. It also provides a stable source of income for landowners who lease their land for wind farms.</p>
        
        <h2>Challenges and Solutions</h2>
        <p>Wind energy does face some challenges, including intermittency (the wind doesn't always blow) and concerns about impacts on wildlife. However, advances in technology and careful siting of wind farms can help address these issues.</p>
        
        <h2>The Future of Wind Energy</h2>
        <p>The future of wind energy looks promising, with continued growth expected in both onshore and offshore wind. Technological advancements are making wind turbines more efficient and less expensive, while policy support is encouraging further development of this renewable energy source.</p>
        
        <h2>Conclusion</h2>
        <p>Wind energy offers a sustainable alternative to fossil fuels, with significant environmental and economic benefits. As technology continues to improve and costs continue to decrease, wind energy is set to play an increasingly important role in our energy future.</p>
      `,
    },
    "role-of-energy-storage": {
      title: "The Role of Energy Storage in Renewable Systems",
      date: "January 5, 2023",
      author: "Emily Davis",
      image: "/placeholder.svg?height=600&width=1200",
      content: `
        <p>Energy storage plays a crucial role in renewable energy systems, helping to address the intermittency of renewable energy sources like solar and wind. As we transition to a more renewable energy future, the importance of energy storage will only continue to grow.</p>
        
        <h2>Why Energy Storage is Important</h2>
        <p>Renewable energy sources like solar and wind are intermittent - the sun doesn't always shine, and the wind doesn't always blow. Energy storage allows excess energy generated during peak production times to be stored and used when production is low, ensuring a consistent energy supply.</p>
        
        <h2>Types of Energy Storage</h2>
        <p>There are various types of energy storage technologies, each with its own advantages and disadvantages. These include batteries (like lithium-ion, lead-acid, and flow batteries), pumped hydro storage, compressed air energy storage, and thermal energy storage.</p>
        
        <h2>Battery Storage</h2>
        <p>Battery storage is one of the most common forms of energy storage for renewable energy systems. Lithium-ion batteries, in particular, have seen significant advancements in recent years, with improvements in efficiency and reductions in cost.</p>
        
        <h2>Grid-Scale Storage</h2>
        <p>Grid-scale energy storage is becoming increasingly important as more renewable energy is integrated into the grid. Large-scale storage systems can help balance supply and demand, improve grid stability, and reduce the need for fossil fuel backup power.</p>
        
        <h2>The Future of Energy Storage</h2>
        <p>The future of energy storage looks promising, with continued advancements in technology and reductions in cost. New storage technologies are being developed, and existing technologies are being improved, which will help to further integrate renewable energy into our energy systems.</p>
        
        <h2>Conclusion</h2>
        <p>Energy storage is a crucial component of renewable energy systems, helping to address the intermittency of renewable energy sources and ensure a reliable energy supply. As we continue to transition to a more renewable energy future, the role of energy storage will only become more important.</p>
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

        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div>

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
