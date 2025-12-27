"use client";

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
          <Link href="/experience" className="text-blue-400 border-b-2 border-blue-400 pb-1">Experience</Link>
          <Link href="/certificates" className="hover:text-blue-400 transition">Certificates</Link>
        </div>
      </nav>
    </header>
  );
}

export default function Experience() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const experiences = [
    {
      title: 'Software Developer',
      company: 'Ethiopian Electric Power',
      period: 'Active / Full-Time',
      color: 'border-blue-400',
      description: [
        'Angular front-end development',
        '.NET Framework & .NET Core backend APIs',
        'SQL Server database systems',
        'Full-stack enterprise application development',
        'Deployment on Windows Server & IIS',
        'Agile collaboration with GitHub & Azure DevOps',
      ],
      image: '/certificates/EEP-Experiyance.jpg',
    },
    {
      title: 'Power Management System (PMS)',
      company: 'Enterprise Solution',
      period: 'Completed Project',
      color: 'border-green-400',
      description: [
        'Developed web-based power management dashboard',
        'Real-time monitoring of energy consumption',
        'Implemented role-based access control',
        'Integration with SQL Server for historical data analysis',
      ],
    },
    {
      title: 'KPI Management System (KPMS)',
      company: 'Internal Performance Tracking',
      period: 'Completed Project',
      color: 'border-purple-400',
      description: [
        'Designed and implemented KPI tracking system',
        'Visualized KPIs with charts and reports',
        'Automated alerts for KPI deviations',
        'Backend APIs using .NET Core and Entity Framework',
      ],
    },
    {
      title: 'Vacancy Management System',
      company: 'HR Recruitment Solution',
      period: 'Completed Project',
      color: 'border-orange-400',
      description: [
        'Developed recruitment and vacancy tracking system',
        'Managed user applications and document uploads',
        'Implemented notifications and reporting modules',
        'Full-stack solution with Angular & ASP.NET Core',
      ],
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        {/* PAGE TITLE */}
        <div className="relative z-10 text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight drop-shadow-2xl uppercase">
            Professional <span className="text-blue-400">Experience</span>
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="w-full max-w-5xl space-y-12 relative z-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group flex flex-col md:flex-row gap-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-500 shadow-2xl border-l-4 ${exp.color}`}
            >
              <div className="flex-[2]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {exp.title}
                  </h2>
                  <span className="text-blue-400 font-semibold text-xs tracking-widest uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg text-white/60 mb-6 font-medium italic">
                  {exp.company}
                </h3>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start text-white/80 text-lg leading-relaxed">
                      <span className="mr-3 mt-2.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {exp.image && (
                <div className="flex-1">
                   <div 
                    className="relative w-full aspect-video md:aspect-square rounded-2xl overflow-hidden cursor-zoom-in border border-white/10 shadow-2xl group/img"
                    onClick={() => setSelectedImg(exp.image!)}
                  >
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover/img:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors" />
                    <button className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-bold border border-white/20">
                      View Certificate
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* MODAL POPUP */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 md:p-10 cursor-zoom-out"
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative w-full h-full max-w-6xl">
              <Image
                src={selectedImg}
                alt="Experience Detail"
                fill
                className="object-contain"
                priority
              />
            </div>
            <button className="absolute top-8 right-8 text-white text-5xl font-thin hover:text-blue-400 transition">&times;</button>
          </div>
        )}

        <div className="mt-20">
          <Link
            href="/"
            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white rounded-full border border-white/10 transition-all text-sm inline-flex items-center gap-2 uppercase tracking-widest font-bold"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}