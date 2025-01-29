import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <section className="bg-green-100 text-blue py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Unlock Your Coding Potential</h1>
        <p className="text-xl mb-8">Learn from industry experts and launch your tech career</p>
        <Button variant="secondary" size="lg" className="text-white font-bold bg-black hover:text-black hover:bg-white rounded">
          Explore Courses
        </Button>
      </div>
    </section>
  )
}