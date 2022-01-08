import Link from 'next/link'

export default function Home() {
  return (
    <>
    
        <p>Isolati per almeno 10 giorni dal tampone positivo e fai un tampone se sono passati almeno tre giorni dall&apos;ultimo sintomo</p>
        <p>Dopo 21 giorni dal primo tampone puoi uscire</p>
        <Link href="/">
            <a>Torna a casa</a>
          </Link>
          
    </>
  )
}