import Link from 'next/link'

export default function Home() {
  return (
    <>
    
        <h3>Hai la terza dose o la seconda da meno di 120 giorni?</h3>
          <Link href="/si/asintomatico/quarantena">
            <a>Si</a>
          </Link>
          <Link href="/si/sintomatico">
            <a>No</a>
          </Link>
    </>
  )
}