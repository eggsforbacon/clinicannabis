import Image from "next/image";
import React from "react";
import {strings} from "../../../model/strings";
import {useRouter} from "next/router";

export const Experience = () => {

    const buttonStyle: string = "hidden lg:block text-3xl rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-12 py-3 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";

    const navigate = useRouter();

    return (
        <article className={"relative h-320"}>
            <Image className={`absolute select-none top-10 z-0`}
                   src={"/images/services/service5.png"} alt={"Placeholder"} width={1920} height={1217}/>
            <section
                className={"absolute left-0 w-208 mt-32 ml-44 flex flex-col gap-12 justify-between items-center text-midnight-green"}>
                <section className={"pt-24"}>
                    <h2 className={"text-9xl font-black tracking-wide mb-4"}>{strings.services.sections["5"].headline}</h2>
                    <h3 className={"font-normal text-5xl"}>{strings.services.sections["5"].remark}</h3>
                </section>
                <p className={"w-208 font-normal text-4xl"}>{strings.services.sections["5"].content}</p>
                <button className={buttonStyle} onClick={() => navigate.push("/experience")}>
                    {strings.services.sections["5"].cta}
                </button>
            </section>
        </article>
    );
}