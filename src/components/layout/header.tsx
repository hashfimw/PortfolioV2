"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, Download, Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getPageTitle = () => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About Me";
      case "/projects":
        return "My Projects";
      case "/skills":
        return "Skills & Technologies";
      case "/experience":
        return "Experience";
      case "/contact":
        return "Contact Me";
      default:
        return "Portfolio";
    }
  };

  return (
    <header className="bg-black bg-opacity-95 sticky top-0 z-10 border-b border-neutral-800">
      <div className="flex items-center justify-between px-4 py-3 md:py-4">
        {/* Navigation arrows and page title */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => window.history.back()}
              className="p-1 rounded-full bg-black text-white hover:bg-neutral-800"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => window.history.forward()}
              className="p-1 rounded-full bg-black text-white hover:bg-neutral-800"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 rounded-full bg-black text-white"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <h1 className="text-xl font-bold">{getPageTitle()}</h1>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          <a
            href="https://drive.google.com/uc?export=download&id=1f7tXrloPfaENNW3KS4rpegsnDWzYYZDS"
            className="md:flex items-center hidden px-4 py-1 rounded-full text-sm font-medium bg-black hover:bg-neutral-800 border border-neutral-700 transition-colors duration-200"
          >
            <Download className="h-4 w-4 mr-2" />
            Resume
          </a>

          <Link
            href="/contact"
            className="flex items-center justify-center px-4 py-1 text-sm font-medium rounded-full text-black bg-green-500 hover:bg-green-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 pb-2 px-4">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="/experience"
              className="px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://drive.google.com/uc?export=download&id=1f7tXrloPfaENNW3KS4rpegsnDWzYYZDS"
              className="flex items-center px-3 py-2 rounded-md text-neutral-200 hover:bg-neutral-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
