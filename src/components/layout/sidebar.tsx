"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Mail, Code, Lightbulb } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Code },
  { name: "Skills", href: "/skills", icon: Lightbulb },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col h-full pt-5 pb-2 bg-spotify-dark rounded-xl shadow-spotify-dark-elevated">
      <div className="flex-shrink-0 px-4 mb-5">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-semibold text-neutral-400 hover:text-white transition-colors">
            Hashfi&apos;s Library
          </span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto px-3">
        <nav className="mt-5 flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const ItemIcon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-4 py-2.5 text-sm font-medium rounded-md
                  ${
                    isActive
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800/70"
                  }
                  transition-all duration-200 ease-in-out
                `}
              >
                <ItemIcon
                  className={`h-6 w-6 mr-3 ${
                    isActive ? "text-white" : "text-neutral-400"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-3 mt-6 mb-2">
        <div className="bg-neutral-800/60 rounded-xl p-4 hover:bg-neutral-800 transition-colors duration-200">
          <p className="mt-2 text-sm text-neutral-400">
            Let&apos;s collaborate on your next project
          </p>
          <Link
            href="/contact"
            className="mt-4 flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full text-neutral-300 bg-spotify-dark-elevated hover:bg-spotify-dark transition-all duration-200"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
