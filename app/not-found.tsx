import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">404 - Seite nicht gefunden</h2>
        <p className="text-muted-foreground mb-6">Die angeforderte Seite existiert nicht.</p>
        <Link 
          href="/de" 
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  )
}
