// app/page.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-8 transition-colors"
      style={{
        background: `linear-gradient(
          135deg,
          rgba(102, 225, 234, 1) 0%,
          rgba(75, 146, 162, 1) 50%,
          rgba(79, 221, 246, 1) 100%
        )`,
      }}
    >
      <h1 className="text-4xl font-bold mb-12 text-center text-white drop-shadow-lg">
        Welcome to My Portfolio
      </h1>

      <div className="grid gap-6 sm:grid-cols-3 w-full max-w-4xl text-center">
        <Link
          href="/education"
          className="block bg-blue-500 text-white px-6 py-6 rounded-lg hover:bg-blue-600 transition font-semibold"
        >
          Education
        </Link>

        <Link
          href="/experience"
          className="block bg-green-500 text-white px-6 py-6 rounded-lg hover:bg-green-600 transition font-semibold"
        >
          Experience
        </Link>

        <Link
          href="/certificates"
          className="block bg-purple-500 text-white px-6 py-6 rounded-lg hover:bg-purple-600 transition font-semibold"
        >
          Certificates
        </Link>
      </div>

      <div className="mt-16 text-center text-white/90">
        <p>Built with Next.js, TypeScript & Tailwind CSS</p>
        
      </div>
    </main>
  )
}
