import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import Header from './Header'

const name = '[Your Name]'
export const siteTitle = 'Assistente Covid'

export default function Layout({ children, home }) {
  return (
    <div className="flex flex-col">
      <Head>
        <link rel="icon" href="/logoac.ico" />
        <meta
          name="description"
          content="Assistente covid"
        />
        
      </Head>
      <Navbar />
      <main >
        <div className='flex-grow'>
        {children}
        </div>
        </main>
      <Footer />
    </div>
  )
}
