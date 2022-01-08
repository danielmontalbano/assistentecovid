import Link from 'next/link'

export default function Home() {
  return (
    <>
    
        <p>Puoi uscire di casa però per 10 giorni devi tenere la mascherina FFP2</p>
        <p>Se dovessi avere sintomi fai un test antigienico o molecolare</p>
        <Link href="/">
            <a>Torna a casa</a>
          </Link>
          
    </>
  )
}