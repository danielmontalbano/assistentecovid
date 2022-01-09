import Image from "next/image";
import ItemBar from "./ItemBar";

export default function AboutMe(){
    return(
        <ItemBar>
            <h1 className="font-bold font-heading text-gray-900 pb-2">
            Un progetto di
        </h1>
        <section class="hero container rounded-full  mx-auto  flex justify-center">
    <img className="rounded-full h-28 w-28" src="https://media-exp1.licdn.com/dms/image/C5603AQG_h0JCBrkEAw/profile-displayphoto-shrink_800_800/0/1546366079273?e=1647475200&v=beta&t=Oze0nLDcVVdU_F2Ddha61oLWVUFSwxBFNk2CfgdnsnM" alt="screenshot" />
</section>
         <div>
                    <p class="text-xl text-gray-700 font-normal mb-1">Daniel Montalbano</p>
                </div>
        </ItemBar>
    );
}