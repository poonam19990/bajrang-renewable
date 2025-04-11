"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    topic: "",
    message: "",
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
    console.log("op", e.target.value);
  };

  const handleTopicChange = (value: any) => {
    setFormData({ ...formData, topic: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/send-email", formData);
      alert("Message sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Have questions or want to learn more about our services? Get in
            touch with our team.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              A24, Shiv Shakti Society, B/H Garnet Apartment, Near Sabri School,
              Vasna road, Vadodara -390007
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            <div>
              <h3 className="text-lg font-semibold">Contact No</h3>
              <p className="text-gray-500 dark:text-gray-400">+91-7567648632</p>
              <p className="text-gray-500 dark:text-gray-400">+91-9773092131</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {" "}
                bajrangrenewable@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone No
                </label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-sm font-medium">
                  Company
                </label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="topic" className="text-sm font-medium">
                Topic
              </label>
              <Select value={formData.topic} onValueChange={handleTopicChange}>
                <SelectTrigger id="topic">
                  <SelectValue placeholder="Select a topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="support">Technical Support</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                className="min-h-[150px]"
                onChange={handleChange}
              />
            </div>
            <Button
              type="submit"
              className="mt-2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
