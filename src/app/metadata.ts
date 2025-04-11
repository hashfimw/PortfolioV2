import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Hashfi Mawarid",
    default: "Hashfi Mawarid | Portfolio Web Developer",
  },
  description:
    " Hashfi Mawarid Portfolio, Portfolio website with Spotify-inspired UI/UX using Next.js 14, TypeScript, Tailwind CSS, and custom CSS. Created pixel-perfect frontend components that adapt Spotify's visual design for portfolio purposes. ",
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
      "Portfolio pribadi Hashfi Mawarid, web developer dengan pengalaman dalam pengembangan front-end dan desain UI/UX",
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
