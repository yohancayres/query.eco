import Link from "next/link";

export default function Header() {
  return (
    <header className="eco-gradient text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold tracking-tight">query.eco</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/ranking"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Ranking
            </Link>
            <Link
              href="/metodologia"
              className="text-white/90 hover:text-white transition-colors font-medium"
            >
              Metodologia
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
