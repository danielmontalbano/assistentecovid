export default function Header(){
    return (
        <section className="text-white body-font bg-[url('https://www.ischiafacile.it/wp-content/uploads/2020/05/covid-19-1.jpg')]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-green0">Assistente Covid</h1>
      <p className="lg:w-2/3 mx-auto test-xl leading-relaxed text-base text-green0">Sei stato a stretto contatto con un positivo e non sai come comportarti?<br/>Le nuove regole sono difficili da capire?</p>

      <br></br>
      <p className="text-green0">Sei nel posto giusto! rispondi a poche e semplici domande per sapere subito come devi comportarti!</p>
    </div>
    
    <button className="flex mx-auto mt-16 bg-green0 hover:bg-green1 text-white font-bold py-2 px-4 border border-green0 rounded">Rispondi subito alle domande</button>
  </div>
</section>
    );
}