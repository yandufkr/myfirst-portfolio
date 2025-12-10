// app/education/page.tsx
import Link from "next/link"
import Image from "next/image"

export default function Education() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-start p-8 transition-colors"
      style={{
        background: `linear-gradient(
          135deg,
          rgba(102, 208, 234, 1) 0%,
          rgba(75, 162, 155, 1) 50%,
          rgba(79, 221, 246, 1) 100%
        )`,
      }}
    >
      <h1 className="text-4xl font-bold mb-8 text-white tracking-wide drop-shadow-lg">
        My Education & Qualifications
      </h1>

      <div className="w-full max-w-4xl space-y-6">

        {/* Personal Info Card with Photo */}
        <div
          className="shadow-xl rounded-xl p-6 backdrop-blur-md border border-white/20 flex flex-col md:flex-row items-center"
          style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
        >
          <div className="w-32 h-32 mb-4 md:mb-0 md:mr-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/certificates/download.png" // Certificate image or profile
              alt="Mihiretu Fentahun"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-gray-800 dark:text-white">
            <h2 className="text-2xl font-semibold mb-2">Personal Information</h2>
            <p><strong>Name:</strong> Mihiretu Fentahun Endalamaw</p>
            <p><strong>Date of birth:</strong> January 23, 1997 G.C</p>
            <p><strong>Place of birth:</strong> Girakidamin, East Gojjam zone, Ethiopia</p>
            <p><strong>Nationality:</strong> Ethiopian</p>
            <p><strong>Health:</strong> Normal</p>
            <p><strong>Current address:</strong> Addis Ababa, Ethiopia</p>
            <p><strong>Phone number:</strong> +251961947094</p>
            <p><strong>Email:</strong> mhretlove2022gc@gmail.com</p>
          </div>
        </div>

        {/* Education Card */}
        <div
          className="shadow-xl rounded-xl p-6 backdrop-blur-md border border-white/20"
          style={{ backgroundColor: "rgba(255, 240, 200, 0.85)" }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Educational Background & Awards
          </h2>

          <ul className="text-gray-800 dark:text-gray-300 list-disc ml-6 space-y-1">
            <li>Ediget Behibret Elementary School (1996-2005) — Certificate</li>
            <li>Girakidamin Secondary (2006-2007) — Certificate</li>
            <li>Amanuel Secondary and Preparatory School (2008-2009) — Certificate</li>
            <li>
              Ghion Technology College, College of Engineering and Technology, Department of Computer Science (2011-2014)
              — B.Sc. Degree, Cup and Medal
            </li>
          </ul>

          <p className="mt-3">
            <strong>BSc Degree in Computer Science</strong> — July 2014 E.C, GPA: 3.99
          </p>

          <p className="mt-2">
            Studied HTML, network installation, database management, and full-stack project development.
          </p>
        </div>

        {/* Languages Card */}
        <div
          className="shadow-xl rounded-xl p-6 backdrop-blur-md border border-white/20"
          style={{ backgroundColor: "rgba(200, 240, 255, 0.85)" }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Language Proficiency
          </h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>Amharic — Speaking: Native, Reading: Excellent, Listening: Excellent, Writing: Excellent</li>
            <li>English — Speaking: Advanced, Reading: Excellent, Listening: Excellent, Writing: Excellent</li>
          </ul>
        </div>

        {/* Computer Skills Card */}
        <div
          className="shadow-xl rounded-xl p-6 backdrop-blur-md border border-white/20"
          style={{ backgroundColor: "rgba(255, 220, 220, 0.85)" }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Computer Skills
          </h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-800 dark:text-gray-300">
            <li>Microsoft Excel, Access, PowerPoint, Word</li>
            <li>Java, C++, Python, HTML, PHP</li>
            <li>Angular, C#, Django</li>
            <li>Next.js, React.js, PHP</li>
            <li>AI and Graphics development</li>
          </ul>
        </div>

        {/* Relevant Experience Card */}
        

        {/* Back Button */}
        <div className="text-center pt-4">
          <Link
            href="/"
            className="text-white underline text-lg font-medium opacity-90 hover:opacity-100 transition"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  )
}
