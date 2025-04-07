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
    <div className="flex flex-col h-full pt-5 pb-4 ">
      <div className="flex-shrink-0 px-4 mb-5">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-semibold text-neutral-400 hover:text-white bg-clip-text">
            Hashfi's Library
          </span>
        </Link>
      </div>

      <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="mt-5 flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const ItemIcon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-3 py-2 text-sm font-medium rounded-md
                  ${
                    isActive
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                  }
                  transition-colors duration-200
                `}
              >
                <ItemIcon
                  className={`h-5 w-5 mr-3 ${
                    isActive ? "text-green-500" : "text-neutral-400"
                  }`}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="px-4 mt-8 mb-4">
        <div className="bg-neutral-800 rounded-lg p-4">
          <h3 className="text-sm font-medium text-white">Contact Me</h3>
          <p className="mt-2 text-xs text-neutral-400">
            Let's collaborate on your next project
          </p>
          <Link
            href="/contact"
            className="mt-3 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-black bg-green-500 hover:bg-green-400 transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
