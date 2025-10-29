import Image from "next/image";

export default function About() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#111827] leading-8 mb-4">
              About Upahwork
            </h2>
            <div className="space-y-4 text-[#1C1C1C] font-normal leading-7">
              <p className="text-base">
                Upahwork is Malaysia’s home services super-app, connecting you with verified professionals for cleaning, repairs, maintenance, beauty, and more.
              </p>
              <p className="text-base">
                Built on the belief that every job deserves fair upah (wage) and every customer deserves trusted service, Upahwork empowers both sides of the ecosystem through technology, transparency, and trust.
              </p>
              <p className="text-base">
                We’re on a mission to make home services as fast, fair, and dependable as ordering a Grab, helping Malaysians live better, and service providers earn better.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/about.png"
                alt="About Upahwork"
                width={940}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


