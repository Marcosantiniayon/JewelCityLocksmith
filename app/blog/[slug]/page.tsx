import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { PortableText, type PortableTextComponents } from "@portabletext/react"
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

const portableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="mb-6 mt-14 text-4xl font-bold leading-tight text-foreground">{children}</h1>,
    normal: ({ children }) => <p className="mb-6 text-lg leading-relaxed text-foreground/85">{children}</p>,
    h2: ({ children }) => <h2 className="mb-4 mt-12 text-3xl font-semibold leading-tight text-foreground">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-10 text-2xl font-semibold leading-tight text-foreground">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-3 mt-8 text-xl font-semibold leading-tight text-foreground">{children}</h4>,
    h5: ({ children }) => <h5 className="mb-2 mt-8 text-lg font-semibold leading-tight text-foreground">{children}</h5>,
    h6: ({ children }) => <h6 className="mb-2 mt-8 text-base font-semibold uppercase tracking-wide text-foreground/90">{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className="mb-6 border-l-2 border-primary/50 pl-4 text-lg italic leading-relaxed text-foreground/75">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 list-disc space-y-2 pl-6 text-lg leading-relaxed text-foreground/85">{children}</ul>,
    number: ({ children }) => (
      <ol className="mb-6 list-decimal space-y-2 pl-6 text-lg leading-relaxed text-foreground/85">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({ children }) => <em className="italic text-foreground/90">{children}</em>,
    code: ({ children }) => (
      <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground">{children}</code>
    ),
    link: ({ children, value }) => {
      const href = typeof value?.href === "string" ? value.href : "#"
      const isExternal = href.startsWith("http")

      return (
        <a
          href={href}
          className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      )
    },
  },
  hardBreak: () => <br />,
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

        <article className="mt-10 max-w-3xl">
          {post.excerpt ? <p className="mb-6 text-lg leading-relaxed text-foreground italic">{post.excerpt}</p> : null}
          {post.body ? <PortableText value={post.body} components={portableTextComponents} /> : null}
        </article>
      </main>
    </div>
  )
}
