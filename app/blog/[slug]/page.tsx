import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { PortableText } from "@portabletext/react"
import { BlogHeader } from "@/components/blog-header"
import { client, hasSanityConfig } from "@/lib/sanity.client"
import { POST_QUERY } from "@/lib/sanity.queries"
import { urlFor } from "@/lib/sanity.image"
import { siteConfig } from "@/lib/site"

export const revalidate = 60

type Post = {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  publishedAt?: string
  _updatedAt?: string
  mainImage?: { alt?: string }
  body?: Array<unknown>
}

type RouteParams = {
  slug: string | string[]
}

async function getPost(slug: string): Promise<Post | null> {
  if (!client) return null
  return client.fetch(POST_QUERY, { slug })
}

export async function generateMetadata({
  params,
}: {
  params: RouteParams | Promise<RouteParams>
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params)
  const slugValue = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug

  if (!slugValue || !client) {
    return {
      title: "Blog Post",
      robots: { index: false, follow: false },
    }
  }

  const post = await getPost(slugValue)

  if (!post) {
    return {
      title: "Blog Post",
      robots: { index: false, follow: false },
    }
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage)?.width(1200).height(630).url() : null
  const description = post.excerpt || "Read the latest locksmith tips and updates from Jewel City."
  const canonicalUrl = `${siteConfig.url}/blog/${post.slug.current}`

  return {
    title: post.title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title: post.title,
      description,
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: post.mainImage?.alt || post.title }]
        : [{ url: siteConfig.defaultShareImage, width: 1200, height: 630, alt: siteConfig.name }],
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [imageUrl || siteConfig.defaultShareImage],
    },
  }
}

export default async function BlogPostPage({ params }: { params: RouteParams | Promise<RouteParams> }) {
  if (!hasSanityConfig) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <BlogHeader />
        <main className="container mx-auto px-4 pt-24 pb-16">
          <div className="rounded-xl border border-dashed border-border bg-card/40 p-6 text-foreground/70">
            <p>
              Sanity is not configured yet. Add your project details to <code>.env.local</code> to load posts.
            </p>
          </div>
        </main>
      </div>
    )
  }

  const resolvedParams = await Promise.resolve(params)
  const slugValue = Array.isArray(resolvedParams.slug) ? resolvedParams.slug[0] : resolvedParams.slug

  if (!slugValue) {
    notFound()
  }

  const post = await getPost(slugValue)

  if (!post) {
    notFound()
  }

  const imageUrl = post.mainImage ? urlFor(post.mainImage)?.width(1600).height(800).url() : null
  const canonicalUrl = `${siteConfig.url}/blog/${post.slug.current}`
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    image: imageUrl || `${siteConfig.url}${siteConfig.defaultShareImage}`,
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlogHeader />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <div className="max-w-3xl">
          <Link href="/blog" className="text-sm text-foreground/60 hover:text-primary transition-colors">
            ← Back to Blog
          </Link>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold">{post.title}</h1>
          <div className="mt-2 text-sm text-foreground/60">
            {post.publishedAt ? (
              <time dateTime={post.publishedAt}>{format(new Date(post.publishedAt), "MMMM d, yyyy")}</time>
            ) : (
              <span>Unpublished</span>
            )}
          </div>
        </div>

        {imageUrl ? (
          <div className="mt-8 w-full max-w-4xl">
            <div className="relative h-72 w-full overflow-hidden rounded-2xl">
              <Image
                src={imageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                sizes="(max-width: 768px) 100vw, 960px"
                className="object-cover"
              />
            </div>
          </div>
        ) : null}

        <article className="prose prose-invert prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary mt-10 max-w-3xl">
          {post.excerpt ? <p className="text-lg text-foreground/70">{post.excerpt}</p> : null}
          {post.body ? <PortableText value={post.body} /> : null}
        </article>
      </main>
    </div>
  )
}
