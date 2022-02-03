import Head from "next/head"
import Link from "next/link"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Title from "./Title"

export const siteTitle = 'Assistente Covid'

export default function FinalLayout({ children,text }) {
  return (
    <div className="flex flex-col">
      <Head>
        <link rel="icon" href="/logoac.ico" />
        <meta
          name="description"
          content="Assistente covid"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main >
        <div className='flex mt-5 mb-10'>
            <div className="bg-green0 text-center mt-5 sm:m-2 md:m-2 lg:m-auto p-3 rounded-lg sm:w-full md:w-full lg:w-1/2 ">
                <Title text={text}/>
                <div className="w-1/2 m-auto text-justify">
                {children}
                </div>
            </div>
        </div>
        <Link href='/'>
          <a><div>Torna a casa</div></a>
        </Link>
        </main>
    </div>
  )
}