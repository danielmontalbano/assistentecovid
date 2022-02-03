import Link from 'next/link'
import Image from 'next/image';
export default function Header(){
    return (
      <div className="relative h-[500px] sm:h-[400px] lg:h-[500px] xl:h-
    [600px] 2x1:h-[700px]">
      <Image
        src="https://www.ischiafacile.it/wp-content/uploads/2020/05/covid-19-1.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/4 w-full text-center">
        <h1 className="sm:text-3xl text-4xl font-bold font-medium title-font mb-4 text-green0">Assistente Covid</h1>
      <p className="lg:w-2/3 mx-auto test-xl leading-relaxed text-base text-white">Sei stato a stretto contatto con un positivo e non sai come comportarti?<br/>Le nuove regole sono difficili da capire?</p>
        
      <p className="text-white mt-4">Sei nel posto giusto! rispondi a poche e semplici domande per sapere subito come devi comportarti!</p>
    
      <Link href="/questions">
      <button className="flex mx-auto mt-2 bg-green0 hover:bg-green1 hover:scale-105 mt-10 text-black font-bold py-2 px-4 border border-green0 rounded-full">Scoprilo subito!</button>
    </Link>
    </div>
    
      </div>
    );
}