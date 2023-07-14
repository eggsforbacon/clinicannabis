import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";
import Link from "next/link";

export const Serums = () => {

    const buttonStyle: string = "mt-16 w-fit text-xl lg:block lg:text-3xl rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    return (
        <article className={"relative flex items-center justify-center lg:items-start lg:justify-end z-10 h-[48rem] md:h-208 lg:h-192 xl:h-224"} id={"serums"}>
            <Image src={"/images/servicios/service3.png"} className={"absolute opacity-60 lg:opacity-100 lg:top-20 xl:-top-20 left-0 scale-[3.2] md:scale-[1.5] lg:scale-[1.5] xl:scale-[1.3] w-full"}
                   alt={""} width={1920}
                   height={1068} quality={100} loading={"lazy"}/>
            <section
                className={"flex flex-col justify-between relative lg:mt-8 lg:mr-32 xl:mr-20 items-center lg:px-0 px-6 lg:items-start lg:w-128 xl:w-[40%]"}>
                <section className={"pt-8 text-midnight-green flex flex-col items-center justify-start lg:items-start"}>
                    <h2 className={"text-6xl text-center lg:text-left lg:text-8xl font-black leading-[0.8] lg:leading-[0.8] lg:tracking-normal tracking-normal mb-2"}>{strings.services.sections["4"].headline}</h2>
                    <h3 className={"text-center lg:text-left font-normal text-viridian-green text-2xl lg:text-4xl"}>{strings.services.sections["4"].subtitle}</h3>
                </section>
                <p className={"font-normal mt-8 md:w-144 lg:w-136 text-neutral-600 text-xl lg:text-2xl text-center lg:text-left"}>{strings.services.sections["4"].content}<span
                    className={"font-bold"}>{strings.services.sections["4"].remark}</span></p>
                <Link href={"/404"}
                      className={buttonStyle}>
                    {strings.services.sections["4"].cta}
                </Link>
            </section>
        </article>
    );
}