// app/certificates/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function Certificates() {
  const certificates = [
    {
      name: 'Django Python Certificate',
      file: '/certificates/Django.jpg',
    },
    {
      name: 'Full Stack Angular & ASP.NET Certificate',
      file: '/certificates/Angular.jpg',
    },
  ]

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '40px',
        background: '#e6f2ff', // 💠 You can change background color here
        color: '#003366',
      }}
    >
      <h1
        style={{
          fontSize: '40px',
          fontWeight: 'bold',
          marginBottom: '40px',
          textAlign: 'center',
        }}
      >
        Certificates
      </h1>

      <div
        style={{
          display: 'grid',
          gap: '40px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          justifyItems: 'center',
        }}
      >
        {certificates.map((cert, index) => (
          <div
            key={index}
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              textAlign: 'center',
              width: '90%',
              maxWidth: '850px',
            }}
          >
            <p style={{ marginBottom: '15px', fontSize: '22px', fontWeight: 600 }}>
              {cert.name}
            </p>

            <Image
              src={cert.file}
              alt={cert.name}
              width={900}   // 🔥 Bigger size
              height={650}
              style={{
                borderRadius: '12px',
                border: '1px solid #ccc',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link
          href="/"
          style={{
            color: '#157b74ff',
            fontSize: '18px',
            textDecoration: 'underline',
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
