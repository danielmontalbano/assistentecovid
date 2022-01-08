import Link from 'next/link'

export default function Home() {
  return (
    <>
    
        <h3>Sei vaccinato?</h3>
          <Link href="/no/contatto/terza">
            <a>Si, con la terza dose</a>
          </Link>
          <Link href="/no/contatto/seconda">
            <a>Si, con la seconda dose</a>
          </Link>
          <Link href="/no/contatto/terza">
            <a>Sono guarito da meno di 120 giorni</a>
          </Link>
          <Link href="/no/contatto/no">
            <a>No</a>
          </Link>
    </>
  )
}