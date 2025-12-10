// app/experience/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Experience() {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Ethiopian Electric Power',
      period: '2022 – Present',
      description: [
        'Angular front-end development',
        '.NET Framework & .NET Core backend APIs',
        'SQL Server database systems',
        'Full-stack enterprise application development',
        'Deployment on Windows Server & IIS',
        'Agile collaboration with GitHub & Azure DevOps',
      ],
      image: '/certificates/EEP-Experiyance.jpg', // original image
    },
    {
      title: 'Power Management System (PMS)',
      company: 'Internal Project',
      period: '2023',
      description: [
        'Developed web-based power management dashboard',
        'Real-time monitoring of energy consumption',
        'Implemented role-based access control',
        'Integration with SQL Server for historical data analysis',
      ],
    },
    {
      title: 'KPI Management System (KPMS)',
      company: 'Internal Project',
      period: '2023',
      description: [
        'Designed and implemented KPI tracking system',
        'Visualized KPIs with charts and reports',
        'Automated alerts for KPI deviations',
        'Backend APIs using .NET Core and Entity Framework',
      ],
    },
    {
      title: 'Vacancy Management System',
      company: 'Internal Project',
      period: '2022',
      description: [
        'Developed recruitment and vacancy tracking system',
        'Managed user applications and document uploads',
        'Implemented notifications and reporting modules',
        'Full-stack solution with Angular & ASP.NET Core',
      ],
    },
  ]

  return (
    <main
      className="min-h-screen p-8"
      style={{
        background: 'linear-gradient(135deg, #66eacdff 0%, #2faba4ff 50%, #467677ff 100%)',
        color: '#ffffff',
      }}
    >
      <h1 className="text-4xl font-bold mb-12 text-center drop-shadow-lg">
        Professional Experience
      </h1>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:space-x-8 items-start md:items-stretch mx-auto max-w-5xl"
          >
            {/* Text Card */}
            <div
              className="flex-1 rounded-xl shadow-xl p-6 mb-6 md:mb-0"
              style={{
                background: 'linear-gradient(135deg, #0c8e8eff 0%, #bae6fd 100%)',
                borderLeft: '6px solid #1D4ED8',
                color: '#002b5c',
              }}
            >
              <h2 className="text-2xl font-semibold mb-2">
                {exp.title} <span className="text-blue-700">{exp.company && `— ${exp.company}`}</span>
              </h2>
              <p className="text-lg mb-4 font-medium">{exp.period}</p>

              <ul className="list-disc ml-6 space-y-2 text-lg">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Image Card (only for original Software Developer card) */}
            {index === 0 && exp.image && (
              <div className="flex-1 rounded-xl shadow-xl overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/" className="text-blue-200 hover:underline text-lg">
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
