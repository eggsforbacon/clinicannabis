import {strings} from "../../../model/strings";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export const PainClinic = () => {
    const buttonStyle: string = "relative mt-12 md:mt-0 lg:block text-xl lg:text-3xl rounded-full border-solid border-2 border-persian-green text-persian-green font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    return (
        <article className={"relative h-[75vh] sm:h-[70vh] md:h-112 xl:h-[58rem] lg:h-224 flex flex-col items-center lg:items-start justify-start py-16 lg:pt-24 box-border gap-6 md:gap-8 px-6 lg:px-32 lg:pr-64 xl:px-64 z-10 text-center lg:text-start pain-clinic-section-clip-sm md:pain-clinic-section-clip-md lg:pain-clinic-section-clip-lg xl:pain-clinic-section-clip-xl"} id={"pain"}>
            <Image src={"/images/servicios/painClinic/skobeloffCurve.svg"} alt={""} width={1920} height={1920} className={"hidden pointer-events-none select-none absolute sm:block sm:-top-6 sm:scale-x-105 lg:scale-y-[1.2] 2xl:scale-y-[.9] lg:-scale-x-105 md:-top-14 left-1/2 -translate-x-1/2 lg:-top-10 lg:rotate-[4.8deg] xl:rotate-[3.2deg] 2xl:-top-28 z-20"} />
            <Image src={"/images/servicios/painClinic/blueCurve.svg"} alt={""} width={640} height={640} className={"pointer-events-none select-none absolute -top-3 left-0 z-20 sm:hidden"}/>
            <Image src={"/images/servicios/service3.png"} quality={100} alt={""} width={742} height={1446} className={"pointer-events-none select-none absolute bottom-5 left-0 scale-125 z-0 md:top-auto md:bottom-80 md:scale-[2] lg:hidden"} />
            <Image src={"/images/servicios/service3.1.png"} alt={""} width={1920} height={958} className={"hidden lg:block pointer-events-none select-none absolute -right-64 top-40 xl:top-20 2xl:-top-7 scale-[1.8] lg:opacity-70 xl:opacity-100 xl:scale-125 2xl:scale-105"} quality={90} loading={"lazy"}/>
            <span className={"pointer-events-none select-none w-full h-36 absolute -top-20 left-1/2 -translate-x-1/2 bg-gradient-to-b from-white lg:hidden"}/>
            <span className={"pointer-events-none select-none hidden xl:block xl:absolute xl:aspect-square xl:h-256 xl:-left-[42rem] xl:-bottom-4 xl:bg-gradient-radial xl:from-caribbean-green/50 xl:via-caribbean-green/10 xl:via-45% xl:to-white/0 xl:to-55% xl:blur-2xl"}/>
            <span className={"pointer-events-none select-none hidden lg:block lg:absolute lg:aspect-square lg:h-136 xl:h-288 lg:left-0 xl:-left-[38rem] lg:-bottom-20 lg:bg-gradient-to-tr xl:bg-gradient-radial lg:from-caribbean-green xl:from-caribbean-green/80 lg:via-caribbean-green/10 lg:via-45% lg:to-white/0 lg:to-55% lg:blur-xl"}/>
            <span className={"pointer-events-none select-none hidden xl:block xl:absolute xl:aspect-square xl:h-256 xl:-left-[42rem] xl:-bottom-64 xl:bg-gradient-radial xl:from-caribbean-green/50 xl:via-caribbean-green/10 xl:via-45% xl:to-white/0 xl:to-55% xl:blur-2xl"}/>
            <span
                className={"pointer-events-none select-none hidden lg:block lg:absolute lg:aspect-square lg:rounded-full lg:h-192 lg:bg-gradient-radial lg:from-viridian-green/70 lg:via-viridian-green/30 lg:via-45% lg:to-white/0 lg:to-80% lg:-right-80 lg:-bottom-64 xl:-bottom-48 blur-xl z-0"}/>
            <span
                className={"pointer-events-none select-none hidden xl:block xl:absolute xl:aspect-square xl:rounded-full xl:h-192 xl:bg-gradient-radial xl:from-viridian-green/70 xl:via-viridian-green/30 xl:via-45% xl:to-white/0 xl:to-80% xl:right-44 xl:-bottom-[23rem] blur-xl z-0"}/>
            <h2 className={"relative text-6xl lg:text-8xl text-viridian-green leading-[0.85] font-black lg:w-136"}>{strings.services.sections["3"].headline}<span className={"text-[4rem] lg:text-[6.5rem] text-caribbean-green"}>{strings.services.sections["3"].remark}</span></h2>
            <section className={"relative flex flex-col items-center lg:items-start justify-start gap-4 text-lg lg:text-2xl text-neutral-700 font-normal md:w-144 lg:w-[40rem]"}>
                {strings.services.sections["3"].copy.map((p : JSX.Element, i : number) => {
                    return <p key={`painCopy${i}`}>{p}</p>
                })}
            </section>
            <Link href={"/servicios/clinica-del-dolor"} className={buttonStyle}>{strings.services.sections["3"].cta}</Link>
        </article>
    );
}