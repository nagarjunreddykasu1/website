"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react"
import { useState } from "react";
import '../components/ui/header.css'


export default function Header() {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  return (
    <header className="bg-blue-600 shadow-sm">
      <nav className="menu_container container mx-auto px-4  py-2 flex justify-center bg-transparent rounded-lg">
        <Link
          href="/"
          className="text-3xl font-bold text-white  justify-left"
        >
          Q Zeal
        </Link>
        <ul className=" header_list hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className="block text-white font-bold hover:text-black hover:bg-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/courses"
              className="block text-white font-bold hover:text-black hover:bg-white"
            >
              All Courses
            </Link>
          </li>
          <li>
            <Link
              href="/new-batches"
              className="block text-white font-bold hover:text-black hover:bg-white"
            >
              New Batches
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button className="text-white font-bold hover:text-black hover:bg-white flex items-center">
              Resources
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isResourcesOpen && (
              <ul className="absolute left-0 mt-2 w-48 rounded-md bg-blue-600 shadow-lg">
                <li>
                  <Link href="/resources/blog" className="block px-4 py-2 text-white hover:text-black hover:bg-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/resources/projects" className="block px-4 py-2 text-white hover:text-black hover:bg-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/resources/tutorials" className="block px-4 py-2 text-white hover:text-black hover:bg-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/resources/resumes" className="block px-4 py-2 text-white hover:text-black hover:bg-white">
                    Resumes
                  </Link>
                </li>
                <li>
                  <Link href="/resources/interview-questions" className="block px-4 py-2 text-white hover:text-black hover:bg-white">
                    Interview Questions
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-white font-bold hover:text-black hover:bg-white"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Button className=" header_button text-white font-bold bg-black hover:text-black hover:bg-white rounded">
              Enroll Now
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
