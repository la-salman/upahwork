import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Search for Services",
    description:
      "Enter your location and select the type of service you need. From plumbing to home repairs and more.",
  },
  {
    id: 2,
    title: "Browse Local Experts",
    description:
      "Explore detailed profiles, read customer reviews and compare trusted professionals near you.",
  },
  {
    id: 3,
    title: "Book Your Service",
    description:
      "Choose a time that works best for you and book your preferred professional in minutes.",
  },
  {
    id: 4,
    title: "Enjoy your day",
    description:
      "Enjoy your day while a qualified expert gets the job done efficiently and professionally.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
          {/* Left: Steps */}

          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#111827] leading-8 mb-10">
              How it Works
            </h2>
            {steps.map((step) => (
              <div
                key={step.id}
                className="rounded-2xl bg-white p-5 sm:p-6 ring-1 ring-black/10 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 text-[#111827] font-medium">
                    {step.id}.
                  </div>
                  <div className="space-y-1">
                    <div className="text-[#111827] font-medium">
                      {step.title}
                    </div>
                    <p className="text-[#1C1C1C] text-sm leading-6">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/how-it-work.png"
                alt="How it works"
                width={940}
                height={600}
                className="w-full h-auto object-cover 2xl:h-[610px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


