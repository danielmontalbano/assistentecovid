import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal p-6 bg-green0">
  <div className="flex items-center flex-no-shrink text-white mr-6">
    <Link href='/'>
        <Image src="/images/logo.png" alt="assisstente covid" width={200} height={50} className="cursor-pointer" />
    </Link>
  </div>
</nav>
    );
}