import Image from "next/image";
import {strings} from "../../../../model/strings";
import Link from "next/link";

export const PainClinic = () => {
    return (
        <article
            className={"w-full h-full relative box-border flex md:px-20 lg:px-28 xl:px-32 2xl:px-64 overflow-x-clip"}>
            <Image src={"/images/landing/hero/painClinicBg.png"} alt={""} width={2004} height={1434}
                   className={"absolute top-[15.5rem] right-[10.5rem] sm:top-[.5rem] md:right-44 md:top-52 lg:top-10 lg:right-10 xl:-top-10 2xl:-top-40 xl:right-0 scale-[2.9] md:scale-[1.8] lg:scale-125 xl:scale-100"}
                   quality={90}/>
            <Image src={"/images/landing/hero/painClinic/ladyPainBack.webp"}
                   alt={"Una mujer con dolor centralizado en la parte media de la espalda, representado como un punto rojo, dando a entender la cronicidad del dolor lumbar."}
                   width={755} height={1080} className={"absolute -top-0 right-0 md:-top-14 md:-right-64 lg:-right-20 lg:-top-24 xl:-right-32 xl:-top-20 scale-110 md:scale-[.9] lg:scale-[.9] xl:scale-[.9]"} quality={100}/>
            <span className={"absolute w-full h-96 bg-gradient-to-t from-viridian-green/50 from-50% to-75% bottom-0 left-0 md:hidden"}/>
            <div className={"relative h-fit md:h-auto md:w-120 xl:w-136 mx-4 mb-2 mt-auto px-6 sm:px-16 pt-6 pb-12 md:m-0 md:p-0 md:pb-60 lg:pb-0 flex items-center md:items-start justify-end lg:items-center lg:justify-center flex-col gap-3 md:gap-6 bg-gradient-to-b from-white/90 to-white/60 md:from-white/0 md:to-white/0 backdrop-blur-md md:backdrop-blur-none rounded-2xl md:rounded-none drop-shadow-sm md:drop-shadow-none text-center md:text-start"}>
                <h2 className={"w-full text-viridian-green font-black text-5xl leading-[.75] md:text-7xl md:leading-[0.85] xl:text-8xl xl:leading-[0.8]"}>{strings.landing.hero.painClinic.title}<br/><span
                    className={"text-caribbean-green text-[3.25rem] md:text-[7.75rem] xl:text-[10.25rem]"}>{strings.landing.hero.painClinic.remark}</span></h2>
                <p className={"text-neutral-800 text-base md:text-xl xl:text-2xl font-normal"}>{strings.landing.hero.painClinic.copy}</p>
                <Link href={"/servicios/clinica-del-dolor"}
                      className={"text-viridian-green rounded-full px-6 lg:px-10 py-1.5 text-xl bg-transparent border-solid border-2 border-viridian-green transition duration-100 hover:cursor-pointer hover:bg-viridian-green hover:text-midnight-green focus:text-midnight-green focus:bg-viridian-green hover:scale-110"}>{strings.landing.hero.painClinic.cta}</Link>
            </div>
        </article>
    );
}