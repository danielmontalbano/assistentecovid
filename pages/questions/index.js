import Head from 'next/head'
import ItemBar from '../../components/ItemBar'
import Layout, { siteTitle } from '../../components/layout'
import Navbar from '../../components/Navbar'
import Title from '../../components/Title'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'



    const textNodes = [
        {
            id : 0,
            text : 'Sei positivo?',
            options : [
                {
                    text : 'si',
                    nextText : 1
                },
                {
                    text : 'no',
                    nextText : 2
                }
            ]
        },
        {
            id: 1,
            text: 'Hai sintomi?',
            options:[
                {
                    text: 'si',
                    href: '/sintomi'
                },
                {
                    text: 'no',
                    nextText: 5
                }
            ]
        },
        {
            id: 2,
            text: 'Hai avuto un contatto stretto?',
            options:[
                {
                    text: 'si',
                    nextText: 3
                },
                {
                    text: 'no',
                    href: '/nocontatto'
                }
            ]
        },
        {
            id: 3,
            text: 'Sei vaccinato?',
            options:[
                {
                    text: 'si, con la terza dose',
                    href:'/terza'
                },
                {
                    text: 'Si, con la seconda dose',
                    nextText: '4'
                },
                {
                    text: 'Sono guarito da meno di 120 giorni',
                    href:'/terza'
                },
                {
                    text: 'no',
                    href: '/no'
                }
            ]
        },
        {
            id: 4,
            text: 'Da quanto hai fatto la seconda dose?',
            options:[
                {
                    text: 'Meno di 120 giorni',
                    href:'/terza'
                },
                {
                    text: 'Più di 120 giorni',
                    href: '/cento'
                },
                {
                    text: 'Meno di 14 giorni',
                    href: '/no'
                }
            ]
        },
        {
            id: 5,
            text: 'Hai la terza dose?',
            options:[
                {
                    text: 'si',
                    href:'/terzanosintomi'
                },
                {
                    text: 'No ma ho la seconda da 120 giorni o meno',
                    nextText: '/terzanosintomi'
                },
                {
                    text: 'no',
                    href: '/nosintomi'
                }
            ]
        },
        
    ]

    

export default function Home() {
    const [respList,setRespList] = useState(textNodes);
    const [index,setIndex] = useState(0)
    const router = useRouter()
    
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      
      
              
                       <div >
                           <Title text={respList[index].text} />
                           <ItemBar>
                        {
                            respList[index].options.map((options,idx)=>(
                                
                                
                                <button key={idx} onClick={(e)=>{
                                    if(options.nextText!=null){
                                        setIndex(options.nextText)
                                    }else{
                                        
                                        router.push(options.href)
                                    }
                                }} className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green0 to-green1 group-hover:from-green1 group-hover:to-green0 hover:text-white dark:text-white focus:ring-4 focus:ring-green1 dark:focus:ring-green1">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        {options.text}
                                    </span>
                                </button>
                                
                            
                                
                            ))
                        } 
                        </ItemBar>
                       </div>
          
      </section>
    </Layout>
  )
  
}