export function SiteFooter() {
  return (
    <footer className="py-6">
      <div className="container max-w-2xl">
        <p className="text-xs text-muted-foreground text-center">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
