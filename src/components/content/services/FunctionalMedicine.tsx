import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";

export const FunctionalMedicine = () => {

    const buttonStyle: string = "w-fit text-xl lg:block text-3xl rounded-full border-solid border-2 border-GO-green text-GO-green lg:border-white lg:text-white font-normal text-base px-8 lg:px-10 py-1.5 lg:py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    return (
        <article className={"relative z-10 h-144 lg:h-[78rem] flex flex-col justify-end items-start lg:pl-16"}
                 id={"functional-medicine"}>
            {/*<span*/}
            {/*    className={"w-full h-2/3 absolute bottom-0 lg:hidden right-0 bg-gradient-to-t from-GO-green/30 via-GO-green/10"}/>*/}
            <Image className={`absolute select-none -top-4 left-0 hidden lg:block `}
                   src={"/images/services/service4.png"} alt={"Placeholder"} width={1920} height={1465} quality={100}/>
            <section
                className={"px-8 lg:px-0 lg:mt-64 relative h-full lg:w-208 lg:px-32 flex flex-col justify-start items-start text-rich-black gap-8 lg:gap-44"}>
                <section className={"flex flex-col lg:gap-4"}>
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