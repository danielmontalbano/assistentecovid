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
          <p>Consulta il medico di base o la guardia medica
che, se necessario, potranno:
eseguire un tampone o prenotartelo
fare una ricetta con la quale puoi recarti
presso uno dei centri tampone
(ASST, privati accreditati, Centri massivi)</p>
            <p>
            NON PRESENTARTI nei centri tampone senza
appuntamento o senza ricetta.
ll risultato del tampone ti verrà comunicato
via SMS (ricordati di fornire un numero di cellulare
valido) oppure consulta il tuo Fascicolo sanitario
elettronico
            </p>
        </FinalLayout>
      </section>
    </Layout>
  )
}