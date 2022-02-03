import Head from 'next/head'
import Link from 'next/link'
import FinalLayout from '../../../components/FinalLayout'
import Layout from '../../../components/layout'
import Title from '../../../components/Title'

import utilStyles from '../../../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{'Assistente covid'}</title>
      </Head>
      <section className={utilStyles.headingMd }>
        <FinalLayout text={'Terza'}>
          <p className='text-bold'>
          Hai fatto la terza dose di vaccino o hai completato
il ciclo primario da meno di 120 giorni?</p><p>
<br></br>
L'isolamento è di 7 giorni dal tampone positivo, di cui
gli ultimi 5 senza sintomi.
<br></br>
Al termine, tampone (molecolare o antigenico):
<br></br>
presso il medico di base, o il pediatra di libera scelta
<br></br>
i punti tampone delle ASST/punti tampone massivi
privati accreditati (presentando il provvedimento
di isolamento rilasciato da ATS, prenotazione da parte
di ATS o del medico, ricetta del medico)
<br></br>
le farmacie (presentando il provvedimento di
isolamento rilasciato da ATS o la ricetta del medico)
          </p>
           </FinalLayout>
      </section>
    </Layout>
  )
}