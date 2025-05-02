import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  // Sample blog posts data
  const posts = [
    {
      id: 1,
      title: "Minimalism in Design: Less is More",
      date: "March 14, 2024",
      slug: "minimalism-in-design",
    },
    {
      id: 2,
      title: "The Art of Slow Living in a Fast-Paced World",
      date: "March 10, 2024",
      slug: "the-art-of-slow-living",
    },
    {
      id: 3,
      title: "Digital Detox: Reclaiming Your Focus",
      date: "March 5, 2024",
      slug: "digital-detox",
    },
  ]

  return (
    <div className="container max-w-2xl py-10">
      <div className="space-y-2">
        <h1 className="font-serif text-3xl font-normal">Journal</h1>
        <p className="text-muted-foreground">Thoughts and reflections.</p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.id} className="space-y-2">
            <div className="flex items-baseline justify-between">
              <h2 className="font-serif text-xl font-normal">
                <Link href={`/posts/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <time className="text-xs text-muted-foreground">{post.date}</time>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
