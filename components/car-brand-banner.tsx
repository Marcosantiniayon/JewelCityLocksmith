"use client"

import { useCallback, useEffect, useRef, useState } from "react"
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
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isPausedRef = useRef(false)
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)
  const activeMobileIndexRef = useRef(0)
  const scrollingBrands = [...carBrands, ...carBrands]

  const pauseAutoScroll = () => {
    isPausedRef.current = true
    if (pauseTimeoutRef.current) {
      window.clearTimeout(pauseTimeoutRef.current)
    }
    pauseTimeoutRef.current = window.setTimeout(() => {
      isPausedRef.current = false
    }, 1400)
  }

  const updateActiveBrand = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const cards = container.children
    if (!cards.length) return

    const containerCenter = container.scrollLeft + container.clientWidth / 2
    let closestIndex = 0
    let smallestDistance = Number.POSITIVE_INFINITY

    for (let index = 0; index < cards.length; index += 1) {
      const card = cards[index] as HTMLElement
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(cardCenter - containerCenter)

      if (distance < smallestDistance) {
        smallestDistance = distance
        closestIndex = index
      }
    }

    if (closestIndex !== activeMobileIndexRef.current) {
      activeMobileIndexRef.current = closestIndex
      setActiveMobileIndex(closestIndex)
    }
  }, [])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let animationFrame = 0
    const step = 0.5

    const animate = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += step
        const resetPoint = container.scrollWidth / 2
        if (container.scrollLeft >= resetPoint) {
          container.scrollLeft -= resetPoint
        }
      }
      updateActiveBrand()
      animationFrame = window.requestAnimationFrame(animate)
    }

    updateActiveBrand()
    animationFrame = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      if (pauseTimeoutRef.current) {
        window.clearTimeout(pauseTimeoutRef.current)
      }
    }
  }, [updateActiveBrand])

  return (
    <section className="border-y border-border/60 bg-card/70 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm md:text-base font-semibold tracking-wide text-foreground/80">
          Trusted with most major makes and models
        </p>

        <div className="mt-5 md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto pb-1 pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onTouchStart={pauseAutoScroll}
            onTouchMove={pauseAutoScroll}
            onTouchEnd={pauseAutoScroll}
            onMouseDown={pauseAutoScroll}
            onWheel={pauseAutoScroll}
            aria-label="Car brands"
          >
            {scrollingBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className={`flex h-14 w-28 shrink-0 items-center justify-center rounded-md border px-3 transition-all duration-300 ${
                  index === activeMobileIndex
                    ? "border-border/60 bg-background/70"
                    : "border-border/60 bg-background/40"
                }`}
              >
                <Image
                  src={brand.src}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={40}
                  className={`h-7 w-auto object-contain transition-all duration-300 ${
                    index === activeMobileIndex ? "opacity-100 grayscale-0" : "opacity-70 grayscale"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 hidden grid-cols-3 gap-3 sm:grid-cols-4 md:grid lg:grid-cols-7">
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
