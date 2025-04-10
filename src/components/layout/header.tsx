"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_scrolled, setScrolled] = useState(false);

  // Handle scroll effect for transparent to solid background transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPageTitle = () => {
    let title;

    switch (pathname) {
      case "/":
        title = "Home";
        break;
      case "/about":
        title = "About Me";
        break;
      case "/projects":
        title = "My Projects";
        break;
      case "/skills":
        title = "Skills & Technologies";
        break;
      case "/contact":
        title = "Contact Me";
        break;
      default:
        title = "Portfolio";
    }

    return (
      <div className="flex items-center">
        <span className="text-white">{title}</span>
      </div>
    );
  };

  return (
    <header className="bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-[4.2px]">
          {/* Left side - Navigation controls */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-2 mr-6">
              <button
                onClick={() => window.history.back()}
                className="p-2 rounded-full bg-spotify-dark-highlight text-neutral-300 hover:scale-105 transition-all"
                aria-label="Go back"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => window.history.forward()}
                className="p-2 rounded-full bg-spotify-dark-highlight text-neutral-300 hover:scale-105 transition-all"
                aria-label="Go forward"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile logo and title - only visible on mobile */}
            <div className="flex md:hidden items-center">
              <Image
                src="/logowhite.png"
                alt="Hashfi Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              <h1 className="text-lg font-medium text-white">
                Hashfi Portfolio
              </h1>
            </div>

            {/* Page title - only visible on desktop */}
            <h1 className="hidden md:block text-xl font-medium">
              {getPageTitle()}
            </h1>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-3">
            {/* Resume download button */}
            <a
              href="https://drive.google.com/uc?export=download&id=1f7tXrloPfaENNW3KS4rpegsnDWzYYZDS"
              className="flex items-center px-4 py-2 text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors duration-200"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </a>

            {/* Contact button - green Spotify button */}
            <Link
              href="/contact"
              className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full text-black bg-green-500 hover:bg-green-400 transition-colors duration-200"
            >
              Contact
            </Link>

            {/* Profile avatar */}
            <div className="relative group pl-2">
              <Link href="/about">
                <div className="w-11 h-11 rounded-full overflow-hidden border-[5px] border-spotify-dark-highlight transition-all duration-200 hover:scale-105">
                  <Image
                    src="/me.png"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              {/* Tooltip on hover - desktop only */}
              <div className="absolute right-0 mt-2 w-32 bg-spotify-dark-elevated rounded-md shadow-lg py-1 px-2 hidden md:group-hover:block transition-opacity">
                <span className="text-xs text-white">View my profile</span>
              </div>

              {/* For mobile - slightly different behavior */}
              <div className="absolute right-0 bottom-0 transform translate-y-full mt-2 w-32 bg-spotify-dark-elevated rounded-md shadow-lg py-1 px-2 md:hidden opacity-0">
                <span className="text-xs text-white">View my profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
