import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'
import Title from '../../../components/Title'
import FinalLayout from '../../../components/FinalLayout'

import utilStyles from '../../../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{'Assistente covid'}</title>
      </Head>
      <section className={utilStyles.headingMd }>
        <FinalLayout text={'Non hai fatto il vaccino? Non hai completato il ciclo primario o lo hai completato da più di 120 giorni?'}>
          <p>
          
Lisolamento è di 10 giorni dal tampone positivo,
di cui gli ultimi 3 senza sintomi.
Al termine, tampone (molecolare o antigenico):
presso il medico di base, o il pediatra di libera scelta
.i punti tampone delle ASST/punti tampone massivi
privati accreditati (presentando il provvedimento
di isolamento rilasciato da ATS, prenotazione da parte
di ATS o del medico, ricetta del medico)
le farmacie (presentando il provvedimento di isolamento
rilasciato da ATS o la ricetta del medico)
Per rientrare a lavoro è necessario un tampone negativo.
          </p>
        </FinalLayout>
      </section>
    </Layout>
  )
}