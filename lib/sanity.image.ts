import imageUrlBuilder from "@sanity/image-url"
import { client } from "./sanity.client"

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: unknown) {
  if (!builder) return null
  return builder.image(source)
}
