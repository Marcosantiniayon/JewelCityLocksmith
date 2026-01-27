import Image from "next/image"

export function JewelCityLogo({ className }: { className?: string }) {
  return (
    <Image src="/images/logo.png" alt="Jewel City Locksmith" width={550} height={200} className={className} priority />
  )
}
