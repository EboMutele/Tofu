import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tofu Tips | Premier Football Predictions",
  description: "AI-powered, automated football predictions and bookmaker odds validation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-[#0a0a0a] text-gray-100`}>
        <Navbar />
        
        <main className="flex-1 flex flex-col w-full">
          {children}
        </main>
        
        <footer className="w-full border-t border-white/5 py-8 mt-auto">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Tofu Tips Platform. All rights reserved.
            </div>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Telegram Channel</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
