import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import Player from "@/components/layout/player";
import MobileNav from "@/components/layout/mobile-nav";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hashfi M - Portfolio",
  description: "Personal portfolio website styled like Spotify",
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
                <div className="h-full overflow-y-auto rounded-xl shadow-spotify-dark-elevated">
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
