import Image from "next/image"

const equipmentImages = [
  {
    src: "/images/img-8642.jpeg",
    alt: "Xhorse Dolphin key cutting machine in operation",
    title: "Precision Key Cutting",
  },
  {
    src: "/images/img-8641.jpeg",
    alt: "Xhorse Dolphin key cutting machine with touchscreen interface",
    title: "Advanced Programming",
  },
  {
    src: "/images/img-8640.jpeg",
    alt: "Key programming tablet showing vehicle manufacturer options",
    title: "All Makes & Models",
  },
]

export function EquipmentGallery() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Professional-Grade Equipment
        </h2>
        <p className="text-xl text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          We invest in the latest technology to provide fast, accurate key cutting and programming for all vehicle makes
          and models.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {equipmentImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60 text-sm">
            State-of-the-art Xhorse Dolphin key cutting machines and diagnostic equipment
          </p>
        </div>
      </div>
    </section>
  )
}
