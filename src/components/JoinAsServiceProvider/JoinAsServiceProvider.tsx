"use client";

import { useState, useRef, useEffect } from "react";

const servicesList = [
  "Cleaning",
  "Electrical",
  "Carpentry",
  "Plumbing",
  "Mechanics",
  "Others",
];

export default function JoinAsServiceProvider() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      alert("Please select at least one service");
      setIsDropdownOpen(true);
      return;
    }
    // Handle form submission here
    console.log("Form submitted", { selectedServices });
  };

  return (
    <section id="join-provider" className="relative py-12 sm:py-16 lg:py-20 bg-white"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Heading and Description */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#111827] leading-8 mb-4">
              Join as a Service Provider
            </h2>
            <p className="text-[#323232] text-sm font-medium leading-6 text-center">
              Want to offer your skills on UpahWork? <br /> Submit your email and our team will reach out to get you onboarded.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Company Name */}
            <div>
              <input
                type="text"
                placeholder="Enter Company Name"
                required
                className="w-full py-3 px-4 rounded-lg border border-gray-300 text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDCA0C] focus:border-transparent"
              />
            </div>

            {/* Services you offer */}
            <div className="space-y-2" ref={dropdownRef}>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full min-h-[48px] py-3 px-4 rounded-lg border border-gray-300 text-left focus:outline-none focus:ring-2 focus:ring-[#FDCA0C] focus:border-transparent pr-10 flex items-center ${
                    selectedServices.length === 0 ? "text-gray-400" : "text-[#111827]"
                  }`}
                >
                  {selectedServices.length === 0 ? (
                    <span>Services you offer</span>
                  ) : (
                    <div className="flex flex-wrap gap-1 flex-1">
                      {selectedServices.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-[#FDCA0C]/20 text-[#111827] rounded text-xs"
                        >
                          {service}
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleService(service);
                            }}
                            className="ml-0.5 text-[#111827] hover:text-red-600 focus:outline-none text-sm leading-none cursor-pointer"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                e.stopPropagation();
                                toggleService(service);
                              }
                            }}
                          >
                            ×
                          </span>
                        </span>
                      ))}
                    </div>
                  )}
                </button>
                <svg
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {servicesList.map((service) => (
                      <label
                        key={service}
                        className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service)}
                          onChange={() => toggleService(service)}
                          className="w-4 h-4 text-[#FDCA0C] border-gray-300 rounded focus:ring-[#FDCA0C] focus:ring-2 cursor-pointer"
                        />
                        <span className="ml-3 text-[#111827] text-sm">
                          {service}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full py-3 px-4 rounded-lg border border-gray-300 text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDCA0C] focus:border-transparent"
              />
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full py-3 px-4 rounded-lg border border-gray-300 text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDCA0C] focus:border-transparent"
              />
            </div>

            {/* Location */}
            <div>
              <input
                type="text"
                placeholder="Where are you located"
                required
                className="w-full py-3 px-4 rounded-lg border border-gray-300 text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FDCA0C] focus:border-transparent"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-[#FDCA0C] text-black text-base font-medium text-center hover:bg-yellow-400 transition-colors duration-200"
            >
              Join now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

