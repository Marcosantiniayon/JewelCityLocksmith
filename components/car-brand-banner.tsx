import Image from "next/image"

const carBrands = [
  { name: "Acura", src: "/images/car-banner/car-acura.png" },
  { name: "Audi", src: "/images/car-banner/car-audi.png" },
  { name: "BMW", src: "/images/car-banner/car-bmw.png" },
  { name: "Buick", src: "/images/car-banner/car-buick.png" },
  { name: "Chevrolet", src: "/images/car-banner/carc-hevy.png" },
  { name: "Dodge", src: "/images/car-banner/car-dodge.png" },
  { name: "Ford", src: "/images/car-banner/car-ford.png" },
  { name: "Honda", src: "/images/car-banner/car-honda.png" },
  { name: "Hyundai", src: "/images/car-banner/car-hyundai.png" },
  { name: "Jeep", src: "/images/car-banner/car-jeep.png" },
  { name: "Kia", src: "/images/car-banner/car-kia.png" },
  { name: "Lamborghini", src: "/images/car-banner/car-lambo.png" },
  { name: "Lexus", src: "/images/car-banner/car-lexus.png" },
  { name: "Mercedes-Benz", src: "/images/car-banner/car-mercedes.png" },
  { name: "Nissan", src: "/images/car-banner/car-nissan.png" },
  { name: "Porsche", src: "/images/car-banner/car-porsche.png" },
  { name: "Tesla", src: "/images/car-banner/car-tesla.png" },
  { name: "Volkswagen", src: "/images/car-banner/car-volkswagen.png" },
  { name: "Toyota", src: "/images/car-banner/car-toyota.png" },
]

export function CarBrandBanner() {
  return (
    <section className="border-y border-border/60 bg-card/70 py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm md:text-base font-semibold tracking-wide text-foreground/80">
          Trusted with most major makes and models
        </p>
        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
          {carBrands.map((brand) => (
            <div
              key={brand.name}
              className="group flex h-16 items-center justify-center rounded-md border border-border/60 bg-background/40 px-3 transition-colors hover:border-primary/50 hover:bg-background/70"
            >
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                width={140}
                height={48}
                className="h-8 w-auto object-contain opacity-80 grayscale transition duration-200 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
