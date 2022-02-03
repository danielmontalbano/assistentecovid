import Link from 'next/link'
export default function Button({path,text}){
    return(
        <Link href={path}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green0 to-green1 group-hover:from-green0 group-hover:to-green1 hover:text-white  focus:ring-4 focus:ring-green1 dark:focus:ring-green1">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75   rounded-md group-hover:bg-opacity-0">
                    {text}
                </span>
            </button>
        </Link>
    );
}