import Image from "next/image";
import React from "react";
import {strings} from "../../../model/strings";
import {useRouter} from "next/router";

export const Experience = () => {

    const buttonStyle: string = "block text-xl lg:text-3xl rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    const navigate = useRouter();

    return (
        <article className={"relative z-10 overflow-clip flex flex-col items-center justify-start lg:items-start h-144 lg:h-208"}>
            <Image className={`opacity-30 md:opacity-50 lg:opacity-60 xl:opacity-100 absolute select-none scale-[2.2] bottom-44 md:bottom-52 right-16 lg:scale-125 lg:bottom-16 xl:bottom-0 lg:-right-36 z-0`}
                   src={"/images/servicios/service5.png"} alt={"Placeholder"} width={1920} height={1268}/>
            <span className={"hidden lg:block w-full bg-gradient-to-b from-white via-white/70 absolute h-120 top-0 left-0"}/>
            <span className={"lg:hidden h-112 bg-gradient-to-b from-white via-white/70 absolute -top-0 left-0 w-full"}/>
            {/*<span className={"lg:hidden h-112 bg-gradient-to-b from-GO-green/30 via-GO-green/10 absolute top-0 left-0 w-full"}/>*/}
            <section
                className={"relative px-8 lg:px-0 lg:absolute lg:left-0 max-w-[34rem] lg:mt-32 lg:ml-44 flex flex-col gap-8 lg:gap-12 justify-between items-center text-midnight-green"}>
                <section className={"pt-2 text-center lg:text-start flex flex-col items-center lg:items-start justify-start gap-2"}>
                    <h2 id={"experiencia-center"} className={"text-6xl lg:text-8xl font-black leading-[0.8] tracking-normal lg:tracking-wide mb-2"}>{strings.services.sections["5"].headline}</h2>
                    <h3 className={"font-normal text-2xl lg:text-4xl"}>{strings.services.sections["5"].remark}</h3>
                </section>
                <p className={"text-center lg:text-start font-normal text-xl lg:text-2xl"}>{strings.services.sections["5"].content}</p>
                <button className={buttonStyle} onClick={() => navigate.push("/soon")}>
                    {strings.services.sections["5"].cta}
                </button>
            </section>
        </article>
    );
}