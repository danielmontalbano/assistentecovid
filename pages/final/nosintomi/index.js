import Head from 'next/head'
import Link from 'next/link'
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
      
      
              
                       <div className='bg-green0 text-center m-3'>
                           <Title text={'Terza'} />
                          <p>Puoi uscire di casa ma per 10 giorni devi indossare la mascherina di tipo FFP2.<br></br> Fai il tampone nel caso in cui ti sentissi male!</p>
                       </div>
          
      </section>
    </Layout>
  )
}