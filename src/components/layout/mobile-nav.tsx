"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Code, Lightbulb, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Code },
  { name: "Skills", href: "/skills", icon: Lightbulb },
  { name: "Contact", href: "/contact", icon: Mail },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-around items-center h-14 bg-black">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const ItemIcon = item.icon;

        return (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center justify-center w-full h-full"
          >
            <ItemIcon
              className={`h-5 w-5 ${
                isActive ? "text-green-500" : "text-neutral-400"
              }`}
            />
            <span
              className={`text-xs mt-1 ${
                isActive ? "text-white" : "text-neutral-400"
              }`}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
