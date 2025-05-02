import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="container max-w-2xl py-10">
      <div className="space-y-2">
        <h1 className="font-serif text-2xl font-normal">About</h1>
        <p className="text-muted-foreground">A few words about me.</p>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6 text-muted-foreground">
        <p>Hello, I'm Jane. I write about minimalism, design, and finding meaning in simplicity.</p>
        <p>
          This journal is a collection of thoughts and observations on living intentionally in a world that often feels
          overwhelming and complex.
        </p>
        <p>
          I believe that by removing the unnecessary, we create space for what truly matters. This philosophy guides my
          approach to design, writing, and daily life.
        </p>
        <p>When I'm not writing, you can find me reading, taking photographs, or enjoying quiet moments in nature.</p>
      </div>
    </div>
  )
}
