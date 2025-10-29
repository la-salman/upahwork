"use client";

import Header from "@/components/ui/header";

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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white leading-16 mb-1">
            Trusted Home Services
          </h1>

          {/* Subtitle */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-normal text-[#FDCA0C] leading-16 mb-6 sm:mb-8">
            Anytime, Anywhere
          </h2>

          {/* Descriptive Text */}
          <p className="text-white text-lg  md:text-xl font-normal mb-10 px-4 max-w-2xl mx-auto leading-7">
            From cleaning to AC repair, find verified professionals in minutes
            insured, reliable, and fairly paid.
          </p>

          {/* Email Input and Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 sm:gap-2 max-w-xl mx-auto bg-white/90 rounded-xl sm:rounded-full p-1 shadow-lg ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-[#FDCA0C] hover:ring-2 hover:ring-[#FDCA0C] transition">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full flex-1 px-4 py-4 rounded-md sm:rounded-full text-gray-900 placeholder-gray-500 transition-all font-normal outline-none border-0 focus:ring-0"
              aria-label="Email Address"
            />
            <button
              type="button"
              className="text-base w-full sm:w-auto bg-[#FDCA0C] text-black px-6 py-3 rounded-md sm:rounded-full font-medium hover:bg-yellow-400 transition-colors duration-200 whitespace-nowrap sm:ml-1 mr-1"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
