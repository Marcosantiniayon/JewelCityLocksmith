import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { BlogHeader } from "@/components/blog-header"
import { client, hasSanityConfig } from "@/lib/sanity.client"
import { POSTS_QUERY } from "@/lib/sanity.queries"
import { urlFor } from "@/lib/sanity.image"

export const revalidate = 60

type Post = {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  publishedAt?: string
  mainImage?: { alt?: string }
}

async function getPosts(): Promise<Post[]> {
  if (!client) return []
  return client.fetch(POSTS_QUERY)
}

export default async function BlogIndexPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlogHeader />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold">Jewel City Blog</h1>
          <p className="text-foreground/70 mt-2">Tips, updates, and security insights from the team.</p>
        </div>

        {!hasSanityConfig ? (
          <div className="mt-10 rounded-xl border border-dashed border-border bg-card/40 p-6 text-foreground/70">
            <p>
              Sanity is not configured yet. Add your project details to <code>.env.local</code> to load posts.
            </p>
          </div>
        ) : posts.length === 0 ? (
          <div className="mt-10 text-foreground/70">No posts yet. Add your first post in Sanity Studio.</div>
        ) : (
          <div className="mt-10 grid gap-8">
            {posts.map((post) => {
              const imageUrl = post.mainImage ? urlFor(post.mainImage)?.width(1200).height(600).url() : null

              return (
                <article key={post._id} className="rounded-2xl border border-border bg-card p-6">
                  {imageUrl ? (
                    <div className="relative h-56 w-full overflow-hidden rounded-xl">
                      <Image
                        src={imageUrl}
                        alt={post.mainImage?.alt || post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="mt-4 text-sm text-foreground/60">
                    {post.publishedAt ? (
                      <time dateTime={post.publishedAt}>{format(new Date(post.publishedAt), "MMMM d, yyyy")}</time>
                    ) : (
                      <span>Unpublished</span>
                    )}
                  </div>
                  <h2 className="mt-2 text-2xl font-semibold">
                    <Link href={`/blog/${post.slug.current}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt ? <p className="mt-2 text-foreground/70">{post.excerpt}</p> : null}
                  <div className="mt-4">
                    <Link href={`/blog/${post.slug.current}`} className="text-primary font-semibold">
                      Read more →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
