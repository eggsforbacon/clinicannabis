import Image from "next/image";
import {strings} from "@/model/strings";
import Link from "next/link";
import React from "react";

export const Diagnostics = () => {
    const buttonStyle: string = "mt-8 w-fit text-xl lg:block lg:text-3xl rounded-full border-solid border-2 border-white lg:border-rich-black text-white lg:text-rich-black font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 hover:bg-white lg:hover:bg-rich-black hover:text-rich-black lg:hover:text-white focus:scale-110 focus:bg-white lg:focus:bg-rich-black focus:text-rich-black lg:focus:text-white";

    return (
        <article
            className={"relative flex flex-col items-center z-10 justify-center lg:items-end overflow-clip h-192 md:h-168 lg:h-208 xl:h-224 lg:px-32 xl:px-44 2xl:px-56"}
            id={"ayudas-diagnosticas"}>
            <div className={"absolute h-full w-full top-0 left-0 overflow-clip"}>
                <Image src={"/services/ayudas-diagnosticas/bloodwork.webp"}
                       alt={"A man having his blood pressure being measured"} quality={100}
                       width={1920} height={1080}
                       className={"absolute top-64 md:top-24 lg:top-20 xl:top-0 -right-24 md:-right-6 lg:right-20 xl:right-0 select-none pointer-events-none scale-[3.7] md:scale-[2.2] lg:scale-[1.3] xl:scale-110 2xl:scale-100"}/>
                <Image src={"/services/ayudas-diagnosticas/gradient.webp"} alt={"A gradient"} quality={100} width={1920}
                       height={1080}
                       className={"absolute top-64 md:-top-6 lg:top-20 xl:top-0 right-44 md:right-16 lg:right-20 xl:right-0 select-none pointer-events-none scale-[3.7] md:scale-[2.3] lg:scale-[1.3] xl:scale-110 2xl:scale-100"}/>
            </div>
            <section
                className={"relative flex flex-col items-center lg:items-start justify-center gap-6 text-center lg:text-start text-white px-6 md:w-144"}>
                <h2 className={"text-6xl lg:text-8xl font-black md:w-80 lg:w-96"}>{strings.services.sections["7"].headline}</h2>
                <p className={"text-base md:text-lg lg:text-2xl font-normal"}>{strings.services.sections["7"].content}</p>
                <Link href={"/servicios/ayudas-diagnosticas"}
                      className={buttonStyle}>
                    {strings.services.sections["7"].cta}
                </Link>
            </section>
        </article>
    );
}