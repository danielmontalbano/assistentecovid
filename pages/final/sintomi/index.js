import Head from 'next/head'
import Link from 'next/link'
import FinalLayout from '../../../components/FinalLayout'
import Layout from '../../../components/layout'

import utilStyles from '../../../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{'Assistente covid'}</title>
      </Head>
      <section className={utilStyles.headingMd }>
        <FinalLayout text={'Terza'}>
          <p>Puoi uscire di casa ma per 10 giorni devi indossare la mascherina di tipo FFP2.<br></br> Fai il tampone nel caso in cui ti sentissi male!</p>
        </FinalLayout>
      </section>
    </Layout>
  )
}