"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const courses = [
  { value: "testing", label: "Manual Testing" },
  { value: "selenium", label: "Selenium" },
  { value: "appium", label: "Appium" },
  { value: "cypress", label: "Cypress" },
  { value: "playwright", label: "Playwright" },
  { value: "api", label: "API Testing" },
  { value: "restassured", label: "RestAssured" },
  { value: "restsharp", label: "RestSharp" },
  { value: "tosca", label: "TOSCA Testing" },
  { value: "etl", label: "ETL Testing" },
  { value: "uipath", label: "UiPath" },
  { value: "net", label: "Dot Net" },
  { value: "java", label: "JAVA" },
  { value: "python", label: "Python" },
  { value: "reactjs", label: "React JS" },
  { value: "devops", label: "DevOps-Azure" }
]
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    mode: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy-900">
            Fill The Form Below So We Can Get To Know You
            <br /> And Your Needs Better.
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Here's What We Can Help With:</h2>
              <p className="text-gray-700 mb-6">
                We are located in Hyderabad. Providing software training at Madhapur Please visit us or call for further
                assistance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Check className="text-red-500 h-5 w-5" />
                  <p className="text-gray-700">
                    Testing Tools: <span className="font-semibold">+91 98491 86420</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-red-500 h-5 w-5" />
                  <p className="text-gray-700">
                    Selenium <span className="font-semibold">+ 91 – 90300 86420</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-red-500 h-5 w-5" />
                  <p className="text-gray-700">
                    Appium <span className="font-semibold">+ 91 – 90300 86420</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-red-500 h-5 w-5" />
                  <p className="text-gray-700">
                    Playwright: <span className="font-semibold">+91 98491 86420</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-red-500 h-5 w-5" />
                  <p className="text-gray-700">
                    Cypress: <span className="font-semibold">+91 98491 86420</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-red-500 h-5 w-5" />
                  <p className="text-gray-700">
                    API Automation: <span className="font-semibold">+91 98491 86420</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-[42px] bg-gray-100 border-gray-400 text-base"
                  />
                  <Input
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-[42px] bg-gray-100 border-gray-400 text-base"
                  />
                </div>
                <Input
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-[42px] bg-gray-100 border-gray-400 text-base"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    value={formData.course}
                    onValueChange={(value) => setFormData({ ...formData, course: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your course"/>
                    </SelectTrigger>
                    <SelectContent>
                      {courses.map((course) => (
                        <SelectItem key={course.value} value={course.value}>
                          {course.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={formData.mode} onValueChange={(value) => setFormData({ ...formData, mode: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Mode of training" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="online">Online</SelectItem>
                      <SelectItem value="offline">Offline</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] bg-gray-100 border-gray-400"
                />
                <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-6">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}