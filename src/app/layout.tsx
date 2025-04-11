import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import Player from "@/components/layout/player";
import MobileNav from "@/components/layout/mobile-nav";
import Image from "next/image";

export const metadata: Metadata = {
  title: {
    template: "%s | Hashfi Mawarid",
    default: "Hashfi Mawarid | Portfolio Web Developer",
  },
  description:
    "Hashfi Mawarid Portfolio, Portfolio website with Spotify-inspired UI/UX using Next.js 14, TypeScript, Tailwind CSS, and custom CSS. Created pixel-perfect frontend components that adapt Spotify's visual design for portfolio purposes.",
  keywords: [
    "Hashfi Mawarid",
    "web developer",
    "portfolio",
    "front-end developer",
    "UI/UX",
    "React",
    "Next.js",
    "designer",
    "developer Indonesia",
    "Hashfi",
    "Mawarid",
  ],
  authors: [{ name: "Hashfi Mawarid", url: "https://hashfimw.my.id" }],
  creator: "Hashfi Mawarid",
  publisher: "Hashfi Mawarid",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://hashfimw.my.id"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "id-ID": "/id",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://hashfimw.my.id",
    title: "Hashfi Mawarid | Portfolio Web Developer",
    description:
      "Hashfi Mawarid Portfolio, Portfolio website with Spotify-inspired UI/UX using Next.js 14, TypeScript, Tailwind CSS, and custom CSS. Created pixel-perfect frontend components that adapt Spotify's visual design for portfolio purposes.",
    siteName: "Hashfi Mawarid Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744361477/Screenshot_2025-04-11_at_08.22.57_psokvx.png", // Ganti dengan URL gambar Anda
        width: 1200,
        height: 630,
        alt: "Hashfi Mawarid Portfolio",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  verification: {
    google: process.env.NEXT_GSEARCH || "",
  },
  category: "portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-black overflow-hidden">
        <div className="flex h-screen flex-col md:flex-row">
          <div className="hidden md:flex w-64 flex-shrink-0 flex-col bg-black pl-2">
            {/* Logo di luar sidebar, sejajar dengan header */}
            <div className="py-[15px] px-2 pl-4 ">
              <Image
                src="https://res.cloudinary.com/ddzq2jzva/image/upload/v1744275840/logowhite_vc9dmz.png"
                alt="Logo"
                width={39}
                height={35}
                className="object-contain"
              />
            </div>
            {/* Sidebar dimulai di bawah logo */}
            <div className="flex-1 md:pb-[88px] ">
              <Sidebar />
            </div>
          </div>
          <div className="flex flex-1 flex-col overflow-hidden pt-2">
            <Header />
            <div className="flex-1 overflow-hidden py-2 bg-black md:pb-[88px] pb-[115px]">
              <div className="px-2 md:px-2 h-full ">
                <div className="h-full overflow-y-auto overflow-container rounded-xl shadow-spotify-dark-elevated">
                  {children}
                </div>
              </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-10 bg-neutral-900 border-none md:block">
              <Player />
            </div>
          </div>
        </div>

        <div className="md:hidden fixed bottom-0 left-0 right-0 z-10 bg-black shadow-spotify-dark-elevated">
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
