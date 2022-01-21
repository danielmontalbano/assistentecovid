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
        <FinalLayout text={'Sintomatico'}>
          <p>Sei asintomatico e hai completato il ciclo
vaccinale primario da più di 120 giorni?
Quarantena obbligatoria di 5 giorni, al termine tampone
(molecolare o antigenico)
presso il medico di base, o il pediatra di libera scelta
i punti tampone delle ASST/punti tampone massivi
privati accreditati (presentando il provvedimento di
quarantena rilasciato da ATS, prenotazione da parte
di ATS o del medico, ricetta del medico)
le farmacie (presentando il provvedimento di quarantena
rilasciato da ATS o la ricetta del medico)
Oppure
Ouarantena di 14 giorni e nessun tampone
Per rientrare a lavoro è necessario un tampone negativo
            </p>
        </FinalLayout>
      </section>
    </Layout>
  )
}