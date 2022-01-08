import Link from 'next/link'

export default function Home() {
  return (
    <>
    
        <h3>Da quanti giorni hai fatto la seconda dose?</h3>
          <Link href="/no/contatto/no">
            <a>Da almeno 120 giorni</a>
          </Link>
          <Link href="/no/contatto/terza">
            <a>Da meno di 120 giorni</a>
          </Link>
          <Link href="/no/contatto/no">
            <a>Da meno di due settimane</a>
          </Link>
    </>
  )
}