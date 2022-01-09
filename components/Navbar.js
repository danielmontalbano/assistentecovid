import Image from "next/image";

export default function Navbar(){
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal p-6 bg-green0">
  <div className="flex items-center flex-no-shrink text-white mr-6">
  <Image src="/images/logo.png" alt="Hello" width={200} height={50} />
    
  </div>
</nav>
    );
}