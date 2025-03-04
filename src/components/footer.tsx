export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">© {currentYear} Tah Dev. All rights reserved.</p>
      </div>
    </footer>
  )
}

