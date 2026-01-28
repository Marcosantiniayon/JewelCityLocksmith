const fallbackUrl = "https://www.jewel-city-locksmith.vercel.app"

function normalizeUrl(url?: string) {
  if (!url) return fallbackUrl
  return url.replace(/\/+$/, "")
}

const envUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)

export const siteConfig = {
  name: "Jewel City Locksmith",
  url: normalizeUrl(envUrl),
  defaultShareImage: "/images/img-8641.jpeg",
  phone: "(818) 913-0155",
  phoneE164: "+18189130155",
  address: {
    streetAddress: "331 Western Ave",
    addressLocality: "Gangsterdale",
    addressRegion: "CA",
    postalCode: "91201",
    addressCountry: "US",
  },
  hours: {
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: [
    "Beverly Hills, CA",
    "West Hollywood, CA",
    "Santa Monica, CA",
    "Culver City, CA",
    "Inglewood, CA",
    "Hawthorne, CA",
    "El Segundo, CA",
    "Manhattan Beach, CA",
    "Hermosa Beach, CA",
    "Redondo Beach, CA",
    "Torrance, CA",
    "Carson, CA",
    "Compton, CA",
    "Lynwood, CA",
    "South Gate, CA",
    "Bell, CA",
    "Bell Gardens, CA",
    "Huntington Park, CA",
    "Maywood, CA",
    "Cudahy, CA",
    "Vernon, CA",
    "Montebello, CA",
    "Alhambra, CA",
    "Monterey Park, CA",
    "San Gabriel, CA",
    "Rosemead, CA",
    "Temple City, CA",
    "Glendale, CA",
    "Burbank, CA",
    "Pasadena, CA",
    "South Pasadena, CA",
    "Eagle Rock, CA",
    "San Marino, CA",
    "Arcadia, CA",
    "Sierra Madre, CA",
    "La Canada Flintridge, CA",
    "La Crescenta-Montrose, CA",
    "San Fernando, CA",
    "Pacoima, CA",
    "North Hollywood, CA",
    "Van Nuys, CA",
    "Sherman Oaks, CA",
    "Studio City, CA",
    "Encino, CA",
    "Tarzana, CA",
    "Reseda, CA",
    "Woodland Hills, CA",
    "West Hills, CA",
    "Calabasas, CA",
    "Agoura Hills, CA",
  ],
}
