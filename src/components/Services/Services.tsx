import Image from "next/image";

const services = [
  { id: 1, title: "Cleaning", src: "/service1.svg" },
  { id: 2, title: "Electrical", src: "/service2.svg" },
  { id: 3, title: "Carpentry", src: "/service3.svg" },
  { id: 4, title: "Plumbing", src: "/service4.svg" },
  { id: 5, title: "Mechanics", src: "/service5.svg" },
  { id: 6, title: "More", src: "/service6.png" },
];

export default function Services() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#F7F8FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium text-[#111827] leading-8 mb-8 sm:mb-10">
          Services we offer
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl bg-white h-28 sm:h-32 shadow-sm ring-1 ring-black/5 hover:ring-[#FDCA0C]/40 hover:shadow-md transition"
            >
              <Image
                src={s.src}
                alt={s.title}
                width={36}
                height={36}
                className="h-8 w-8 sm:h-9 sm:w-9 object-contain"
              />
              <div className="text-[#111827] font-medium text-sm sm:text-base">
                {s.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


