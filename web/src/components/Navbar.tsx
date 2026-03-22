"use client";

import { useState } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Free Picks", href: "/picks/free" },
    { name: "Premium", href: "/picks/premium", badge: "Pro" },
    { name: "History", href: "/history" },
    { name: "Pricing", href: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full glass">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(220,31,92,0.5)] group-hover:scale-110 transition-transform">
            T
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white hidden sm:block">Tofu Tips</h1>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`hover:text-brand transition-colors flex items-center gap-1 ${pathname === link.href ? 'text-brand' : ''}`}
            >
              {link.name}
              {link.badge && (
                <span className="text-[10px] bg-brand/20 text-brand px-1.5 py-0.5 rounded-full uppercase font-bold">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>
        
        {/* Auth Buttons / Hamburger */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <Link href="/auth" className="text-sm font-medium hover:text-white transition-colors">Sign In</Link>
            <Link href="/auth" className="bg-brand text-white px-5 py-2 text-sm rounded-md font-semibold hover:bg-brand-light shadow-[0_4px_14px_0_rgba(220,31,92,0.39)] transition-all">
              Get Started
            </Link>
          </div>

          {/* Hamburger Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle Menu"
          >
            <div className={`w-5 h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <div className={`w-5 h-0.5 bg-gray-300 rounded-full my-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`w-5 h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden" 
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Content */}
      <div className={`fixed top-16 right-0 w-[280px] h-[calc(100vh-64px)] bg-[#0a0a0a] border-l border-white/5 z-[100] md:hidden shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="p-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={closeMenu}
              className={`text-lg font-bold flex items-center justify-between ${pathname === link.href ? 'text-brand' : 'text-white'}`}
            >
              {link.name}
              {link.badge && (
                <span className="text-xs bg-brand/20 text-brand px-2 py-0.5 rounded-full uppercase font-black">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
          
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col gap-4">
            <Link 
              href="/auth" 
              onClick={closeMenu}
              className="w-full py-4 text-center font-bold text-gray-400 hover:text-white transition-colors border border-white/10 rounded-xl"
            >
              Sign In
            </Link>
            <Link 
              href="/auth" 
              onClick={closeMenu}
              className="w-full py-4 text-center font-bold text-white bg-brand rounded-xl shadow-lg shadow-brand/20 active:scale-95 transition-all"
            >
              Get Started Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
