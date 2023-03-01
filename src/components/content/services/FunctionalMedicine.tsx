import Image from "next/image";
import {strings} from "../../../model/strings";
import React from "react";

export const FunctionalMedicine = () => {
    return (
        <article className={"relative h-[68rem] z-10"}>
            <Image className={"absolute select-none top-[56rem] right-[42rem] rotate-[3deg] -scale-x-[170] scale-y-[170]"}
                   src={"/images/experience/assistantBackLeaf.svg"} alt={"Placeholder"} width={16} height={6}/>
            <Image className={`absolute select-none top-40 scale-125 -left-44`}
                   src={"/images/services/service4.png"} alt={"Placeholder"} width={9428 / 2} height={5042 / 2}/>
            <section
                className={"absolute right-0 w-208 mr-12 flex flex-col justify-between items-start text-midnight-green"}>
                <section className={"pt-24"}>
                    <h2 className={"text-9xl font-black tracking-wide mb-4"}>{strings.services.sections["4"].headline}</h2>
                    <h3 className={"font-normal text-5xl"}>{strings.services.sections["4"].remark}</h3>
                </section>
                <p className={"mt-56 w-168 text-white font-normal text-4xl"}>{strings.services.sections["4"].content}</p>
            </section>
        </article>
    );
}