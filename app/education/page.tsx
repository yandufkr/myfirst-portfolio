// app/education/page.tsx
import Link from "next/link"
import Image from "next/image"

// We define the Header here so you don't get an import error
function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="font-bold text-xl tracking-tighter text-blue-400">PORTFOLIO</div>
        <div className="flex gap-6 md:gap-10 font-medium">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/education" className="text-blue-400 border-b-2 border-blue-400 pb-1">Education</Link>
          <Link href="/experience" className="hover:text-blue-400 transition">Experience</Link>
          <Link href="/certificates" className="hover:text-blue-400 transition">Certificates</Link>
        </div>
      </nav>
    </header>
  )
}

export default function Education() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen w-full pt-28 pb-16 px-4 flex flex-col items-center overflow-x-hidden">
        
        {/* BACKGROUND IMAGE - Matches Home & Experience */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/certificates/home bg.webp" 
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute inset-0 backdrop-blur-[3px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        {/* PAGE TITLE */}
        <div className="relative z-10 text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-2xl uppercase">
            Education & <span className="text-blue-400">Qualifications</span>
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="w-full max-w-4xl space-y-8 relative z-10">

          {/* Personal Info Card */}
          <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 flex flex-col md:flex-row items-center hover:bg-white/[0.07] transition-all shadow-2xl border-l-4 border-blue-400">
            <div className="w-40 h-40 mb-6 md:mb-0 md:mr-10 rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl shrink-0">
              <Image
                src="/certificates/download.png"
                alt="Mihiretu Fentahun"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-white space-y-2">
              <h2 className="text-3xl font-bold text-blue-400 mb-4">Personal Information</h2>
              <p className="text-lg"><span className="text-white/60 font-medium">Name:</span> Mihiretu Fentahun Endalamaw</p>
              <p className="text-lg"><span className="text-white/60 font-medium">Nationality:</span> Ethiopian</p>
              <p className="text-lg"><span className="text-white/60 font-medium">Current Address:</span> Addis Ababa, Ethiopia</p>
              <p className="text-lg"><span className="text-white/60 font-medium">Phone:</span> +251961947094</p>
              <p className="text-lg"><span className="text-white/60 font-medium">Email:</span> mhretlove2022gc@gmail.com</p>
            </div>
          </section>

          {/* Education Card */}
          <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/[0.07] transition-all shadow-2xl border-l-4 border-yellow-400">
            <h2 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center gap-2">
              🎓 Educational Background & Awards
            </h2>
            <div className="space-y-8">
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-yellow-400/30">
                <div className="flex justify-between items-start mb-1">
                  <span className="block font-bold text-xl text-white">Ghion Technology College</span>
                  <span className="bg-yellow-400/10 text-yellow-400 text-[10px] uppercase tracking-widest px-2 py-1 rounded border border-yellow-400/20">Degree Completed</span>
                </div>
                <span className="text-yellow-200 font-medium">B.Sc. Degree in Computer Science</span>
                <p className="text-white/80 mt-2 leading-relaxed">
                  Graduated with a <span className="text-white font-bold underline decoration-yellow-400/50">GPA of 3.99</span>. 
                  Awarded the academic Cup and Medal for achieving the highest rank in the department.
                </p>
              </div>

              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-white/10">
                <span className="block font-semibold text-white text-lg">Amanuel Preparatory School</span>
                <p className="text-white/60 text-sm">Preparatory Education Certificate</p>
              </div>
            </div>
          </section>

          {/* Grid for Skills and Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/[0.07] transition-all shadow-2xl border-l-4 border-green-400">
              <h2 className="text-2xl font-bold text-green-400 mb-6 uppercase tracking-tight">🌍 Languages</h2>
              <div className="space-y-4 text-white">
                <div className="flex justify-between items-center">
                  <p className="font-bold">Amharic</p>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded uppercase font-bold tracking-tighter">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-bold">English</p>
                  <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded uppercase font-bold tracking-tighter">Advanced</span>
                </div>
              </div>
            </section>

            {/* Computer Skills */}
            <section className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/[0.07] transition-all shadow-2xl border-l-4 border-purple-400">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 uppercase tracking-tight">💻 Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React.js", "Python", "Java", "PHP", "Django", "Angular", "SQL", "Tailwind"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-md text-[11px] font-bold uppercase tracking-wider border border-white/10 text-white/90">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Bottom Back Button */}
          <div className="text-center pt-12">
            <Link
              href="/"
              className="group flex items-center justify-center gap-3 text-white/50 hover:text-white transition-all font-bold tracking-widest text-xs uppercase"
            >
              <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-blue-500 transition-all"></span>
              Back to Dashboard
            </Link>
          </div>

        </div>
      </main>
    </>
  )
}