import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Have questions or want to learn more about our services? Contact us today.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-5xl gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              <div className="text-left">
                <h3 className="font-semibold">Address</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400"> A24, Shiv Shakti Society,
                    B/H Garnet Apartment,
                    Near Sabri School,
                    Vasna road, Vadodara -390007</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              <div className="text-left">
                <h3 className="font-semibold">Phone</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">+91-7567648632</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">+91-9773092131</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-teal-600 dark:text-teal-400" />
              <div className="text-left">
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">bajrangrenewable@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Name" />
                <Input placeholder="Email" type="email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Message" className="min-h-[120px]" />
            </div>
            <Button className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700">
              Send Message <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
