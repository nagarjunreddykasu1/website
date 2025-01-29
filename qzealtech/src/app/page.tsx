import CourseSchedule from "@/components/course-schedule"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Dashboard from "@/components/home";
import { MarqueeDemo } from "@/components/marquee-reviews";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Dashboard />
        <MarqueeDemo />
      </main>
      <Footer />
    </div>
  );
}

