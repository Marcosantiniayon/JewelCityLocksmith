import { groq } from "next-sanity"

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)]
    | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage {
        ...,
        asset->
      }
    }
`

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    _updatedAt,
    mainImage {
      ...,
      asset->
    },
    body
  }
`

export const POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
`
