import Head from "next/head"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Title from "./Title"

const name = '[Your Name]'
export const siteTitle = 'Assistente Covid'

export default function FinalLayout({ children,text }) {
  return (
    <div className="flex flex-col">
      <Head>
        <link rel="icon" href="/logoac.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main >
        <div className='flex-grow '>
            <div className="bg-green0 text-center m-3 rounded-lg">
                <Title text={text}/>
                {children}
            </div>
        </div>
        </main>
    </div>
  )
}