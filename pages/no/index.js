import Link from 'next/link'

export default function Home() {
  return (
    <>
    
        <h3>Hai avuto Un contatto stretto?</h3>
          <Link href="/no/contatto">
            <a>Si</a>
          </Link>
          <Link href="/no/no">
            <a>No</a>
          </Link>
    </>
  )
}