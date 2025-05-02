import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function PostPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the post data based on the slug
  // For this example, we'll use hardcoded data
  const post = {
    title: "Minimalism in Design: Less is More",
    date: "March 14, 2024",
    content: `
      <p>Minimalism in design is more than just an aesthetic choice—it's a philosophy that emphasizes the value of simplicity, clarity, and purpose. By stripping away unnecessary elements, minimalist design creates space for what truly matters, allowing the essential aspects to shine through with greater impact.</p>
      
      <h2>The Origins of Minimalist Design</h2>
      
      <p>The minimalist movement in design has its roots in various art movements of the 20th century, particularly in the works of the Bauhaus school and the De Stijl movement. These pioneers championed the idea that form should follow function, and that beauty could be found in simplicity and utility.</p>
      
      <p>As digital interfaces became increasingly complex, minimalism emerged as a response to the visual noise and cognitive overload that users were experiencing. Designers began to recognize that by reducing clutter and focusing on essential elements, they could create more intuitive and engaging user experiences.</p>
      
      <h2>Key Principles of Minimalist Design</h2>
      
      <p>At its core, minimalist design is guided by several key principles:</p>
      
      <ul>
        <li><strong>Simplicity:</strong> Remove unnecessary elements to focus on what's essential.</li>
        <li><strong>Clarity:</strong> Ensure that the purpose and function of each element is immediately apparent.</li>
        <li><strong>Intentionality:</strong> Every element should serve a specific purpose.</li>
        <li><strong>Balance:</strong> Create harmony through careful arrangement of space and elements.</li>
        <li><strong>Hierarchy:</strong> Guide users through content by establishing clear visual priorities.</li>
      </ul>
      
      <h2>The Impact of Minimalism on User Experience</h2>
      
      <p>When applied thoughtfully, minimalist design can significantly enhance the user experience in several ways:</p>
      
      <p><strong>Improved Usability:</strong> By removing distractions and focusing on essential elements, minimalist interfaces are often more intuitive and easier to navigate.</p>
      
      <p><strong>Faster Load Times:</strong> Minimalist websites typically use fewer resources, resulting in faster load times and better performance.</p>
      
      <p><strong>Enhanced Accessibility:</strong> Clean, simple designs with high contrast and clear typography tend to be more accessible to users with disabilities.</p>
      
      <p><strong>Timeless Appeal:</strong> Minimalist designs are less likely to look dated or trendy, giving them a longer shelf life.</p>
      
      <h2>Finding Balance: When Less Becomes Too Little</h2>
      
      <p>While minimalism champions the "less is more" philosophy, it's important to recognize that there's a point at which "less" can become "too little." Effective minimalist design isn't about removing elements indiscriminately—it's about carefully curating what remains to ensure that the design still communicates effectively and meets user needs.</p>
      
      <p>When elements are removed to the point that functionality or clarity is compromised, the design has crossed the line from minimalist to insufficient. The key is to find the sweet spot where simplicity enhances rather than hinders the user experience.</p>
      
      <h2>Conclusion</h2>
      
      <p>Minimalism in design is a powerful approach that, when applied thoughtfully, can create more impactful, elegant, and user-friendly experiences. By embracing the principle that "less is more," designers can cut through the noise and create interfaces that communicate with clarity and purpose.</p>
      
      <p>As we continue to navigate an increasingly complex digital landscape, the value of minimalism only grows. In a world of constant distraction, there's profound power in simplicity.</p>
    `,
  }

  return (
    <article className="container max-w-2xl py-10">
      <div className="space-y-8">
        <div>
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-3 w-3" />
            Back
          </Link>
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-2xl font-normal">{post.title}</h1>
          <time className="text-xs text-muted-foreground">{post.date}</time>
        </div>

        <Separator />

        <div
          className="prose prose-neutral prose-sm dark:prose-invert max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}
