import Head from 'next/head'
import ItemBar from '../components/ItemBar'
import Layout, { siteTitle } from '../components/layout'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Button from '../components/Button'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Dati from '../components/Dati'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Header/>
        <Dati />
        <AboutMe />
      </section>
    </Layout>
  )
}
