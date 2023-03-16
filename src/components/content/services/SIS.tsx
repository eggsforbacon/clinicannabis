import Image from "next/image";
import {strings} from "../../../model/strings";

export const SIS = () => {
    return (
        <article className={"relative h-136 lg:h-224 z-0"} id={"sis"}>
            <Image src={"/images/services/service2.png"} className={"absolute scale-[3] lg:scale-100 select-none top-36 lg:-top-36 -left-36 lg:left-20"} alt={""} width={1920}
                   height={1151}/>
            <span className={"absolute lg:hidden w-screen bg-gradient-to-b from-white via-white/50 -top-28 left-0 h-96"}/>
            <section className={"absolute w-256 mt-72 ml-56 flex flex-col justify-between items-start"}>

            </section>
        </article>
    );
}