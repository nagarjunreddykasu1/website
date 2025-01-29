import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Course {
  name: string
  date: string
  timings: string
  duration: string
  trainer: string
  trainingOptions: string
}

export default function CourseSchedule() {
  const courses: Course[] = [
    {
      name: "Software Testing\nManual Testing + Selenium",
      date: "27-Jan-2025",
      timings: "09:30 AM - 11:00 AM",
      duration: "3 Months",
      trainer: "Mr. Nagarjun Reddy",
      trainingOptions: "Onsite / Online",
    },
    {
      name: "Selenium with Java",
      date: "27-Jan-2025",
      timings: "10:00 AM - 11:30 AM",
      duration: "2 Months",
      trainer: "Mr. Sivaprasad Reddy",
      trainingOptions: "Onsite / Online",
    },
    {
      name: "Mobile App Automation - Appium",
      date: "27-Jan-2025",
      timings: "11:30 AM - 01:00 PM",
      duration: "2 Months",
      trainer: "Mr. Nagarjun Reddy",
      trainingOptions: "Onsite / Online",
    },
    {
      name: "API Automation - RestAssured",
      date: "27-Jan-2025",
      timings: "09:30 AM - 11:00 AM",
      duration: "1 Month",
      trainer: "Mr. Sai",
      trainingOptions: "Onsite / Online",
    },
    {
      name: "API Automation - RestSharp",
      date: "28-Jan-2025",
      timings: "10:30 AM - 11:30 AM",
      duration: "1 Month",
      trainer: "Mr. Nagarjun Reddy",
      trainingOptions: "Onsite / Online",
    },
    {
      name: "API Testing - Postman",
      date: "28-Jan-2025",
      timings: "07:00 PM - 08:30 PM",
      duration: "1 Month",
      trainer: "Mr. Nagarjun Reddy",
      trainingOptions: "Online",
    },
    {
      name: "Cypress",
      date: "01-Feb-2025",
      timings: "11:30 AM - 01:00 PM",
      duration: "1 Month",
      trainer: "Mr. Nagarjun Reddy",
      trainingOptions: "Onsite / Online",
    },
    {
      name: "Playwright with Javascript",
      date: "01-Feb-2025",
      timings: "10:00 AM - 11:30 AM",
      duration: "1 Month",
      trainer: "Mr. Nagarjun Reddy",
      trainingOptions: "Onsite / Online",
    },
    {
      name: "Selenium with C#",
      date: "01-Feb-2025",
      timings: "05:30 PM - 07:00 PM",
      duration: "2 Months",
      trainer: "Mr. Praneetha",
      trainingOptions: "Onsite / Online",
    },
    {
      name: "ReactJS",
      date: "",
      timings: "08:00 AM - 09:30 AM",
      duration: "1Month",
      trainer: "Mr. Pratap",
      trainingOptions: "Onsite / Online",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#2A363B] hover:bg-[#2A363B]/90">
              <TableHead className="text-white">Course</TableHead>
              <TableHead className="text-white">Date</TableHead>
              <TableHead className="text-white">Timings</TableHead>
              <TableHead className="text-white">Duration</TableHead>
              <TableHead className="text-white">Trainer</TableHead>
              <TableHead className="text-white">Training Options</TableHead>
              <TableHead className="text-white">Register for Demo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((course, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="whitespace-pre-line font-medium">{course.name}</TableCell>
                <TableCell>{course.date}</TableCell>
                <TableCell>{course.timings}</TableCell>
                <TableCell>{course.duration}</TableCell>
                <TableCell>{course.trainer}</TableCell>
                <TableCell>{course.trainingOptions}</TableCell>
                <TableCell>
                  <Button variant="destructive" size="sm">
                    Register Now
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}