import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";

export const FunctionalMedicine = () => {

    const buttonStyle: string = "w-fit text-xl lg:block text-3xl rounded-full border-solid border-2 border-GO-green text-GO-green lg:border-white lg:text-white font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    return (
        <article className={"relative z-20 h-144 lg:h-[62rem] items-start"} id={"functional-medicine"}>
            <Image className={`absolute select-none hidden lg:block w-full`}
                   src={"/images/services/service4.png"} alt={"Medicina Funcional"} width={1920} height={1465} quality={100}/>
            <section
                className={"flex flex-col relative h-full items-start justify-start lg:gap-20 lg:w-208 lg:mt-[16rem] infMedicinaFuncional_Service"}>
                <section className={"flex flex-col lg:gap-4 text-rich-black"}>
                    <h2 className={"text-6xl lg:text-[7rem] font-black lg:tracking-wide tracking-normal mb-4 leading-[0.65] lg:leading-[0.7]"}>{strings.services.sections["4"].headline}<strong
                        className={"text-caribbean-green text-7xl lg:text-[9rem]"}>{strings.services.sections["4"].remark}</strong>
                    </h2>
                    <h3 className={"font-normal text-caribbean-green -mt-4 lg:mt-0 text-2xl lg:text-5xl"}>{strings.services.sections["4"].subtitle}</h3>
                </section>
                <section className={"flex flex-col gap-16"}>
                    <p className={"lg:w-168 text-neutral-600 lg:text-white font-normal text-lg lg:text-3xl"}>{strings.services.sections["4"].content}</p>
                    <a href={"https://www.instagram.com/p/CqLiruWDhMs/"} target={"_blank"} rel={"noreferrer"}
                       className={buttonStyle}>
                        {strings.services.sections["4"].cta}
                    </a>
                </section>
            </section>
        </article>
    );
}