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
                <p className="font-bold text-2xl w-3/4 m-auto text-center">{text}</p>
                <div className="w-3/4 m-auto text-justify">
                {children}
                </div>
            </div>
        </div>
        <Link href='/'>
          <button className="text-center flex items-center cursor-pointer space-x-2 mx-auto border bg-green0 rounded-full py-2 px-3 mb-3 hover:scale-105 hover:bg-green1">
            <p className="text-lg">Torna alla Home</p>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            </button>
        </Link>
        </main>
    </div>
  )
}