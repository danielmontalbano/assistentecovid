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
          <p>
          Sei asintomatico e:
hai fatto la terza dose di vaccino
Oppure
sei guarito da meno di 120 giorni
Oppure
.hai completato il ciclo primario da meno di 120 giorni
Non devi sottoporti a quarantena ma ad autosorveglianza
per 5 giorni dall'ultimo contatto con il caso e indossare
mascherine ffp2 per almeno 10 giorni.
Se sei asintomatico non devi sospendere lattività
lavorativa.
In caso di sintomi, rivolgiti al medico di base/pediatra
di libera scelta.
          </p>
        </FinalLayout>
      </section>
    </Layout>
  )
}