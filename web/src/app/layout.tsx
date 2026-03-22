import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        <header className="sticky top-0 z-50 w-full glass">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(220,31,92,0.5)]">
                T
              </div>
              <h1 className="text-xl font-bold tracking-tight text-white hidden sm:block">Tofu Tips</h1>
            </div>
            
            <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
              <a href="/picks/free" className="hover:text-brand transition-colors">Free Picks</a>
              <a href="/picks/premium" className="hover:text-brand transition-colors flex items-center gap-1">
                Premium <span className="text-[10px] bg-brand/20 text-brand px-1.5 py-0.5 rounded-full uppercase font-bold">Pro</span>
              </a>
              <a href="/history" className="hover:text-brand transition-colors">History</a>
              <a href="/pricing" className="hover:text-brand transition-colors">Pricing</a>
            </nav>
            
            <div className="flex items-center gap-3">
              <button className="text-sm font-medium hover:text-white transition-colors">Sign In</button>
              <button className="bg-brand text-white px-5 py-2 text-sm rounded-md font-semibold hover:bg-brand-light shadow-[0_4px_14px_0_rgba(220,31,92,0.39)] transition-all">
                Get Started
              </button>
            </div>
          </div>
        </header>
        
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
