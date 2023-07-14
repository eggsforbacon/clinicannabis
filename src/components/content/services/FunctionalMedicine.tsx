import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";

export const FunctionalMedicine = () => {

    const buttonStyle: string = "w-fit text-xl lg:block text-3xl rounded-full border-solid border-2 border-GO-green text-GO-green lg:border-white lg:text-white font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    return (
        <article className={"relative z-20 h-144 lg:h-288 flex flex-col items-center lg:items-start"} id={"functional-medicine"}>
            <Image className={`absolute lg:scale-[1.5] lg:left-48 xl:left-auto lg:bottom-44 xl:-bottom-14 xl:scale-100 select-none hidden lg:block w-full`}
                   src={"/images/servicios/service4.png"} alt={"Medicina Funcional"} width={1920} height={1465}
                   quality={100}/>
            <section
                className={"flex flex-col relative h-full lg:pl-16 xl:pt-32 xl:pl-32 2xl:pt-16 2xl:pl-56 items-center lg:items-start justify-start gap-6 lg:gap-20 mt-16 lg:mt-64"}>
                <section className={"flex flex-col lg:gap-4 text-rich-black lg:w-192"}>
                    <h2 className={"text-center lg:text-left text-6xl lg:text-[7rem] font-black lg:tracking-wide tracking-normal mb-4 leading-[0.65] lg:leading-[0.7]"}>{strings.services.sections["5"].headline}<br/><strong
                        className={"text-caribbean-green text-7xl lg:text-[9rem]"}>{strings.services.sections["5"].remark}</strong>
                    </h2>
                </section>
                <section className={"flex px-6 flex-col items-center lg:items-start justify-start gap-16"}>
                    <section className={"flex flex-col items-center lg:items-start justify-start gap-6"}>
                        <h3 className={"text-center lg:text-left font-normal text-caribbean-green -mt-4 lg:mt-0 text-2xl lg:text-5xl"}>{strings.services.sections["5"].subtitle}</h3>
                        <p className={"max-w-[34rem] text-center lg:text-left lg:w-144 text-neutral-600 lg:text-white font-normal text-xl lg:text-2xl"}>{strings.services.sections["5"].content}</p>
                    </section>
                    <a href={"https://www.instagram.com/p/CqLiruWDhMs/"} target={"_blank"} rel={"noreferrer"}
                       className={buttonStyle}>
                        {strings.services.sections["5"].cta}
                    </a>
                </section>
            </section>
        </article>
    );
}