import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";

export const FunctionalMedicine = () => {
    return (
        <article className={"relative z-10 h-224 lg:mb-20 lg:h-[84rem] flex flex-col justify-end items-start pl-16"} id={"functional-medicine"}>
            <span className={"w-full h-2/3 absolute bottom-0 lg:hidden right-0 bg-gradient-to-t from-GO-green/60 via-GO-green/10"}/>
            <Image className={`absolute select-none -top-4 left-0 hidden lg:block `}
                   src={"/images/services/service4.png"} alt={"Placeholder"} width={1920} height={1465}/>
            <section
                className={"relative h-full w-208 px-32 flex flex-col justify-center items-start text-rich-black gap-32"}>
                <section className={"flex flex-col gap-4"}>
                    <h2 className={"text-8xl font-black tracking-wide mb-4 leading-[0.9]"}>{strings.services.sections["4"].headline}<strong className={"text-caribbean-green text-9xl"}>{strings.services.sections["4"].remark}</strong></h2>
                    <h3 className={"font-normal text-caribbean-green text-5xl"}>{strings.services.sections["4"].subtitle}</h3>
                </section>
                <p className={"w-168 text-white font-normal text-3xl"}>{strings.services.sections["4"].content}</p>
            </section>
        </article>
    );
}