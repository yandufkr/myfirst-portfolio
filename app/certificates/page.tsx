"use client"; // Required for interactivity

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="font-bold text-xl tracking-tighter text-blue-400">PORTFOLIO</div>
        <div className="flex gap-6 md:gap-10 font-medium">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/education" className="hover:text-blue-400 transition">Education</Link>
          <Link href="/experience" className="hover:text-blue-400 transition">Experience</Link>
          <Link href="/certificates" className="text-blue-400 border-b-2 border-blue-400 pb-1">Certificates</Link>
        </div>
      </nav>
    </header>
  );
}

export default function Certificates() {
  // State to track which certificate is being viewed full-screen
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const certificates = [
    {
      name: 'Django Python Certificate',
      file: '/certificates/Django.jpg',
      issuer: 'Technical Training Center'
    },
    {
      name: 'Full Stack Angular & ASP.NET Certificate',
      file: '/certificates/Angular.jpg',
      issuer: 'Software Engineering Institute'
    },
  ];

  return (
    <>
      <Header />
      <main className="relative min-h-screen w-full pt-28 pb-16 px-4 flex flex-col items-center">
        
        {/* OPTIMIZED BACKGROUND */}
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
        </div>

        {/* PAGE TITLE */}
        <div className="relative z-10 text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-2xl">
            My <span className="text-blue-400">Certificates</span>
          </h1>
        </div>

        {/* CERTIFICATES GRID */}
        <div className="w-full max-w-6xl grid gap-8 md:grid-cols-2 relative z-10">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col items-center hover:border-blue-500/50 transition-all duration-500 shadow-2xl"
            >
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                  {cert.name}
                </h2>
                <p className="text-blue-400/80 text-sm font-medium mt-1 uppercase tracking-widest">
                  {cert.issuer}
                </p>
              </div>

              {/* Certificate Image Frame */}
              <div 
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-zoom-in bg-black/40 border border-white/5"
                onClick={() => setSelectedImg(cert.file)}
              >
                <Image
                  src={cert.file}
                  alt={cert.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <button 
                onClick={() => setSelectedImg(cert.file)}
                className="mt-8 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-900/20"
              >
                Expand View
              </button>
            </div>
          ))}
        </div>

        {/* --- MODAL / POPUP OVERLAY --- */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10 transition-all"
            onClick={() => setSelectedImg(null)} // Close when clicking background
          >
            <button 
              className="absolute top-10 right-10 text-white text-4xl font-light hover:text-blue-400 transition"
              onClick={() => setSelectedImg(null)}
            >
              &times;
            </button>
            
            <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
              <Image
                src={selectedImg}
                alt="Full Certificate"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="absolute bottom-10 text-white/50 text-sm">Click anywhere to close</p>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="mt-20">
          <Link
            href="/"
            className="text-white/50 hover:text-white transition-all font-medium border-b border-white/10 pb-1"
          >
            BACK TO DASHBOARD
          </Link>
        </div>
      </main>
    </>
  );
}