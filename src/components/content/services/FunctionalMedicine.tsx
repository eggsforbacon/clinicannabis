import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";

export const FunctionalMedicine = () => {
    return (
        <article className={"relative h-[90rem] z-10 flex flex-col justify-end items-start pl-16"} id={"functional-medicine"}>
            <Image className={`absolute select-none top-20 left-0`}
                   src={"/images/services/service4.png"} alt={"Placeholder"} width={1920} height={1465}/>
            <section
                className={"relative w-208 px-32 flex flex-col justify-end items-start text-rich-black gap-20"}>
                <section className={"flex flex-col gap-14"}>
                    <h2 className={"text-8xl font-black tracking-wide mb-4 leading-[0.9]"}>{strings.services.sections["4"].headline}<strong className={"text-caribbean-green text-9xl"}>{strings.services.sections["4"].remark}</strong></h2>
                    <h3 className={"font-normal text-caribbean-green text-5xl"}>{strings.services.sections["4"].subtitle}</h3>
                </section>
                <p className={"w-144 text-white font-normal text-3xl"}>{strings.services.sections["4"].content}</p>
            </section>
        </article>
    );
}