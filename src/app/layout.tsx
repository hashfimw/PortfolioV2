import type { Metadata, Viewport } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import Player from "@/components/layout/player";
import MobileNav from "@/components/layout/mobile-nav";
import Image from "next/image";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Hashfi Mawarid",
    default: "Hashfi Mawarid - Frontend & Fullstack Developer",
  },
  description:
    "Frontend & Fullstack Developer passionate about creating modern, responsive web experiences. My portfolio showcases a Spotify-inspired UI/UX built with the latest web technologies.",
  keywords: [
    "Hashfi Mawarid",
    "web developer",
    "portfolio",
    "front-end developer",
    "Full-stack developer",
    "React",
    "Next.js",
    "designer",
    "developer Indonesia",
    "Hashfi",
    "Mawarid",
    "Frontend Developer Indonesia",
  ],
  applicationName: "Hashfi",
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
    title: "Hashfi Mawarid - Frontend & FullStack Developer",
    siteName: "Hashfi Mawarid",
    description:
      "Frontend & Fullstack Developer passionate about creating modern, responsive web experiences. My portfolio showcases a Spotify-inspired UI/UX built with the latest web technologies.",
    images: [
      {
        url: "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744361477/Screenshot_2025-04-11_at_08.22.57_psokvx.png",
        width: 1200,
        height: 630,
        alt: "Hashfi Mawarid Portfolio",
      },
    ],
  },
  appleWebApp: {
    title: "Hashfi Mawarid",
    statusBarStyle: "black-translucent",
    startupImage: [
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744455273/Untitled_design_wny43b.svg",
    ],
  },
  appLinks: {
    web: {
      url: "https://hashfimw.my.id",
      should_fallback: true,
    },
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
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      {
        url: "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744455273/Untitled_design_wny43b.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut:
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744455273/Untitled_design_wny43b.svg",
    apple:
      "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744455273/Untitled_design_wny43b.svg",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hashfi Mawarid",
              url: "https://hashfimw.my.id",
              jobTitle: "Frontend & Fullstack Developer",
              alumniOf: "Purwadhika Digital Technology School",
              knowsAbout: [
                "Frontend Development",
                "Fullstack Development",
                "React",
                "Next.js",
                "Tailwind CSS",
              ],
              image:
                "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744455273/Untitled_design_wny43b.svg",
              sameAs: [
                "https://linkedin.com/in/hashfimawarid",
                "https://github.com/hashfimw",
              ],
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://hashfimw.my.id",
              },
              logo: "https://res.cloudinary.com/ddzq2jzva/image/upload/v1744275840/logowhite_vc9dmz.png",
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Hashfi Mawarid",
              url: "https://hashfimw.my.id",
              description:
                "Frontend & Fullstack Developer portfolio showcasing projects and skills",
              publisher: {
                "@type": "Person",
                name: "Hashfi Mawarid",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://hashfimw.my.id/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="bg-black overflow-hidden">
        <div className="flex h-screen flex-col md:flex-row">
          <div className="hidden md:flex w-64 flex-shrink-0 flex-col bg-black pl-2">
            <div className="py-[15px] px-2 pl-4 ">
              <Image
                src="https://res.cloudinary.com/ddzq2jzva/image/upload/v1744275840/logowhite_vc9dmz.png"
                alt="Hashfi Mawarid Logo"
                width={39}
                height={35}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex-1 md:pb-[88px] ">
              <Sidebar />
            </div>
          </div>
          <div className="flex flex-1 flex-col overflow-hidden pt-2">
            <Header />
            <div className="flex-1 overflow-hidden py-2 bg-black md:pb-[88px] pb-[115px]">
              <div className="px-2 md:px-2 h-full ">
                <div className="h-full overflow-y-auto overflow-container rounded-xl shadow-spotify-dark-elevated">
                  <h1 className="sr-only">
                    Hashfi Mawarid - Frontend Developer & Fullstack Developer
                  </h1>
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
