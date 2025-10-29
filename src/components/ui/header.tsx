"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 z-20 flex justify-center py-6 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/upahwork.svg"
            alt="upahWork"
            width={150}
            height={44}
            className="h-auto"
          />
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-white hover:text-[#FDCA0C] transition-colors duration-200 font-normal leading-8 text-base"
            >
              About Us
            </Link>
            <Link
              href="/how-it-works"
              className="text-white hover:text-[#FDCA0C] transition-colors duration-200 font-normal leading-8 text-base"
            >
              How it Works
            </Link>
          </nav>
          {/* CTA Button */}
          <Link
            href="/join-provider"
            className="hidden md:inline-flex bg-[#FDCA0C] text-black text-base px-6 py-2.5 rounded-full font-medium hover:bg-yellow-400 transition-colors duration-200 whitespace-nowrap shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FDCA0C] focus:ring-offset-transparent"
          >
            Join as Service Provider
          </Link>

          {/* Mobile menu toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:text-[#FDCA0C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FDCA0C] focus:ring-offset-transparent"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 px-4">
            <div className="rounded-xl bg-black/80 backdrop-blur supports-backdrop-filter:bg-black/60 border border-white/10 p-4 space-y-2">
              <Link
                href="/about"
                className="block text-white hover:text-[#FDCA0C] transition-colors duration-200 font-normal leading-8 text-base"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/how-it-works"
                className="block text-white hover:text-[#FDCA0C] transition-colors duration-200 font-normal leading-8 text-base"
                onClick={() => setIsOpen(false)}
              >
                How it Works
              </Link>
              <Link
                href="/join-provider"
                className="block w-full text-center bg-[#FDCA0C] text-black text-base px-6 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Join as Service Provider
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
