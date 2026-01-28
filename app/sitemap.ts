import type { MetadataRoute } from "next"
import { client } from "@/lib/sanity.client"
import { POST_SLUGS_QUERY } from "@/lib/sanity.queries"
import { siteConfig } from "@/lib/site"

type PostSlug = {
  slug: string
  _updatedAt?: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const basePages: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(),
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date(),
    },
  ]

  if (!client) return basePages

  const posts = await client.fetch<PostSlug[]>(POST_SLUGS_QUERY)

  const postEntries = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post._updatedAt ? new Date(post._updatedAt) : new Date(),
  }))

  return [...basePages, ...postEntries]
}
