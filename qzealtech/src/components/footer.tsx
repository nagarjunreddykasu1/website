import Link from "next/link"

export default function Footer() {
  return (
    <footer className=" bg-gray-800 text-white py-8">
      <div className="menu_container container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-3">QZeal</h3>
            <p className="text-gray-400">Empowering the next generation of tech professionals</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#courses" className="text-gray-400 hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#instructors" className="text-gray-400 hover:text-white">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Work With Us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#becomeinstructor" className="text-gray-400 hover:text-white">
                  Become an Instructor
                </Link>
              </li>
              <li>
                <Link href="#corporate" className="text-gray-400 hover:text-white">
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link href="#hire" className="text-gray-400 hover:text-white">
                  Hire from QZeal
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <p className="text-gray-400 mb-2">Plot# 31 & 32, Madhapur, Hyderabad, Telangana 500032</p>
            <p className="text-gray-400 mb-2">Phone: +91-9030086420</p>
            <p className="text-gray-400">Email: info@qzealtech.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} QZeal Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}