"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="w-full bg-linear-to-r from-bbPink via-bbBlue to-bbLime text-xs sm:text-sm text-black">
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-center sm:justify-between items-center gap-2">
          <p className="font-medium text-center">
            💥 Now booking pop-ups & collabs in Houston – DM us on IG{" "}
            <span className="font-bold">@bucketbaddie</span>
          </p>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="sticky top-0 z-40 bg-bbBlack/90 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <Image
              height={50}
              width={50}
              alt="bucket baddie logo"
              src="/bucket-baddie.png"
            />
            <div className="leading-tight">
              <div className="text-lg font-display tracking-wide uppercase">
                Bucket Baddie
              </div>
              <div className="text-xs text-white/60">
                Buckets · Drip · Vibes
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#menu" className="hover:text-bbPink transition-colors">
              Menu
            </a>
            <a
              href="#how-it-works"
              className="hover:text-bbPink transition-colors"
            >
              How It Works
            </a>
            <a
              href="#locations"
              className="hover:text-bbPink transition-colors"
            >
              Locations
            </a>
            <a href="#why" className="hover:text-bbPink transition-colors">
              Why Us
            </a>
            <a href="#faq" className="hover:text-bbPink transition-colors">
              FAQ
            </a>
            <a
              href="#order"
              className="ml-3 inline-flex items-center rounded-full border border-bbPink bg-bbPink/10 px-4 py-1.5 text-sm font-semibold text-bbPink hover:bg-bbPink hover:text-bbBlack transition-colors"
            >
              Order Now
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-white hover:bg-white/5"
            aria-label="Toggle navigation"
          >
            {!mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-white/10 bg-bbBlack/95 backdrop-blur">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
              <a
                href="#menu"
                className="py-2 border-b border-white/5 hover:text-bbPink"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#how-it-works"
                className="py-2 border-b border-white/5 hover:text-bbPink"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#locations"
                className="py-2 border-b border-white/5 hover:text-bbPink"
                onClick={() => setMobileMenuOpen(false)}
              >
                Locations
              </a>
              <a
                href="#why"
                className="py-2 border-b border-white/5 hover:text-bbPink"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </a>
              <a
                href="#faq"
                className="py-2 border-b border-white/5 hover:text-bbPink"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#order"
                className="mt-2 inline-flex items-center justify-center rounded-full border border-bbPink bg-bbPink/10 px-4 py-2 text-sm font-semibold text-bbPink hover:bg-bbPink hover:text-bbBlack"
                onClick={() => setMobileMenuOpen(false)}
              >
                Order Now
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
