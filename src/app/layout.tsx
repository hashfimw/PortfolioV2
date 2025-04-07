import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import Player from "@/components/layout/player";
import MobileNav from "@/components/layout/mobile-nav";

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
      <body
      // className=" bg-black text-white overflow-hidden h-screen"
      >
        <div className="flex h-screen flex-col md:flex-row">
          <div className="hidden md:flex w-64 flex-shrink-0 flex-col bg-black border-r border-neutral-800">
            <Sidebar />
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto py-2 bg-gradient-to-b from-neutral-900 to-black">
              <div className="px-4 md:px-8 pb-24 md:pb-32">{children}</div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-10 bg-neutral-900 border-t border-neutral-800">
              <Player />
            </div>
          </div>
        </div>

        <div className="md:hidden fixed bottom-0 left-0 right-0 z-10 bg-black border-t border-neutral-800">
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
