import Head from 'next/head'
import ItemBar from '../components/ItemBar'
import Layout, { siteTitle } from '../components/layout'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Button from '../components/Button'
import Header from '../components/Header'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <Header/>
      <Title text={"Sei positivo?"} />
          <ItemBar>
            <Button path={'/si'} text={'si'} />
            <Button path={'/no'} text={'no'} />
            <Button path={'/no'} text={'non lo so'} />
          </ItemBar>
      </section>
    </Layout>
  )
}
