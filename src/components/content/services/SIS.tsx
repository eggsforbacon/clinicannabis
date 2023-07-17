import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";
import Link from "next/link";

export const SIS = () => {

    const buttonStyle: string = "mt-12 lg:block text-xl lg:text-3xl rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    return (
        <article className={"relative flex flex-col items-center z-10 justify-center lg:justify-start lg:items-stretch overflow-clip h-192 md:h-168 lg:h-[54rem] xl:h-224"} id={"sis"}>
            <Image src={"/images/servicios/service2.png"}
                   className={"absolute scale-[3.5] md:scale-[1.5] xl:scale-[1.3] select-none bottom-[17rem] md:bottom-auto lg:bottom-28 xl:bottom-44 lg:right-24 xl:right-0"} alt={""}
                   width={1920}
                   height={1151} quality={100} loading={"lazy"}/>
            <span
                className={"absolute lg:hidden w-screen bg-gradient-to-b from-white via-white/50 lg:-top-28 lg:left-0 lg:h-96"}/>
            <span
                className={"absolute lg:hidden w-screen bg-gradient-to-r from-white via-white lg:-top-28 lg:left-0 lg:h-[120%]"}/>
            <span
                className={"lg:hidden w-screen h-64 bg-gradient-to-t from-white via-white/40 absolute bottom-0 left-0"}/>
            <span
                className={"hidden lg:block w-screen h-96 bg-gradient-to-t from-white via-white/80 absolute bottom-0 left-0"}/>
            <section
                className={"relative flex flex-col justify-center items-center lg:items-start mt-6 px-8 md:px-10 lg:mt-28 lg:px-64 text-white gap-2"}>
                <h2 className={"text-center lg:text-left text-6xl lg:text-7xl font-black text-midnight-green leading-[0.8] lg:leading-[0.75]"}>{strings.services.sections["2"].headline}<br/><strong
                    className={"text-7xl lg:text-9xl text-caribbean-green"}>{strings.services.sections["2"].remark}</strong>
                </h2>
                <h3 className={"text-center lg:text-left text-2xl lg:text-4xl text-viridian-green"}>{strings.services.sections["2"].subtitle}</h3>
                <p className={"font-normal mt-8 text-xl lg:text-2xl text-neutral-600 text-center lg:text-left max-w-[50rem]"}>{strings.services.sections["2"].content}</p>
                <Link href={"https://www.instagram.com/reel/CqMA67CDUDB/?igshid=MDJmNzVkMjY="} target={"_blank"}
                   rel={"noreferrer"} className={buttonStyle}>
                    {strings.services.sections["2"].cta}
                </Link>
            </section>
        </article>
    );
}