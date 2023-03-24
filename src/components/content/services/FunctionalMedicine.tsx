import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";

export const FunctionalMedicine = () => {

    const buttonStyle: string = "w-fit hidden lg:block text-3xl rounded-full border-solid border-2 border-white text-white font-normal text-base px-10 py-2 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    return (
        <article className={"relative z-10 h-224 lg:h-[78rem] flex flex-col justify-end items-start lg:pl-16"}
                 id={"functional-medicine"}>
            <span
                className={"w-full h-2/3 absolute bottom-0 lg:hidden right-0 bg-gradient-to-t from-GO-green/60 via-GO-green/10"}/>
            <Image className={`absolute select-none -top-4 left-0 hidden lg:block `}
                   src={"/images/services/service4.png"} alt={"Placeholder"} width={1920} height={1465}/>
            <section
                className={"px-6 lg:px-0 mt-28 lg:mt-64 relative h-full lg:w-208 lg:px-32 flex flex-col  justify-start items-start text-rich-black gap-44"}>
                <section className={"flex flex-col gap-4"}>
                    <h2 className={"text-6xl lg:text-[7rem] font-black tracking-wide mb-4 leading-[0.9] lg:leading-[0.7]"}>{strings.services.sections["4"].headline}<strong
                        className={"text-caribbean-green text-7xl lg:text-[9rem]"}>{strings.services.sections["4"].remark}</strong>
                    </h2>
                    <h3 className={"font-normal text-caribbean-green text-2xl lg:text-5xl"}>{strings.services.sections["4"].subtitle}</h3>
                </section>
                <section className={"flex flex-col gap-16"}>
                    <p className={"lg:w-168 text-neutral-600 lg:text-white font-normal text-lg lg:text-3xl"}>{strings.services.sections["4"].content}</p>
                    <a href={"https://www.instagram.com/p/CqLiruWDhMs/"} target={"_blank"} rel={"noreferrer"}
                       className={buttonStyle}>
                        {strings.services.sections["5"].cta}
                    </a>
                </section>
            </section>
        </article>
    );
}