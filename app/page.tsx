import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 1. NAVIGATION HEADER */}
      <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl tracking-tighter">
            PORTFOLIO
          </Link>
          <div className="hidden md:flex gap-8 text-white/90 font-medium">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/education" className="hover:text-blue-400 transition">Education</Link>
            <Link href="/experience" className="hover:text-blue-400 transition">Experience</Link>
            <Link href="/certificates" className="hover:text-blue-400 transition">Certificates</Link>
          </div>
        </nav>
      </header>

      {/* 2. BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/certificates/home bg.webp" 
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        {/* This dark layer makes sure you can see the white text */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* 3. MAIN CONTENT */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
          Welcome to My Portfolio
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12">
          Exploring the intersection of learning and professional growth.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="/experience" 
            className="px-10 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition transform hover:scale-105"
          >
            My Experience
          </Link>
          <Link 
            href="/education" 
            className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold backdrop-blur-md hover:bg-white/20 transition"
          >
            Education Path
          </Link>
        </div>

        <div className="mt-20 text-white/40 text-sm uppercase tracking-widest">
          Next.js • TypeScript • Tailwind
        </div>
      </main>
    </div>
  )
}