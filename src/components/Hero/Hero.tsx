"use client";

import Header from "@/components/ui/header";
import Link from "next/link";

export default function Hero() {

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/hero-img.png')",
          }}
        />
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-img.png"
        >
          <source src="/vedio.mov" type="video/quicktime" />
          <source src="/vedio.mov" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      </div>

      {/* Header inside Hero */}
      <Header />

      {/* Hero Content - Centered */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
            {/* Main Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white sm:leading-16 mb-1 ">
              Trusted Home Services
            </h1>

            {/* Subtitle */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-normal text-[#FDCA0C] sm:leading-16 mb-5 sm:mb-8">
              Anytime, Anywhere
            </h2>

            {/* Descriptive Text */}
            <p className="text-white text-base md:text-xl font-normal mb-10 px-4 max-w-2xl mx-auto leading-8">
              From cleaning to AC repair, find verified professionals in minutes
              insured, reliable, and fairly paid.
            </p>

            {/* CTA Button */}
            <div className="w-full sm:w-auto flex justify-center">
              <Link
                href="#join-provider"
                className="inline-flex items-center justify-center bg-[#FDCA0C] text-black text-base px-7 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors duration-200 w-full sm:w-auto max-w-xs sm:max-w-none"
              >
                Join as Service Provider
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
