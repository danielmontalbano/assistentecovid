import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import Title from '../../components/Title'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import Button from '../../components/Button'
import ItemBar from '../../components/ItemBar'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <Title text={"Hai avuto sintomi?"} />
          <ItemBar>
            <Button path={'/si/sintomatico'} text={'si'} />
            <Button path={'/si/asintomatico'} text={'no'} />
          </ItemBar>
      </section>
    </Layout>
  )
}
