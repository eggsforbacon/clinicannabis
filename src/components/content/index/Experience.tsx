import {strings} from "../../../accessibility/strings";
import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";

export const Experience = () => {

    const buttonStyle : string = "text-white border-solid border-2 border-white rounded-full px-16 py-2 text-xl shadow-md transition duration-300 quartic-out lg:hover:border-white lg:hover:shadow-white/20 lg:hover:bg-viridian-green lg:hover:text-white";
    const navigate = useRouter();

    return (
        <article className={"w-full h-288 mt-32 px-44 relative"}>
            <Image className={"z-0 absolute select-none bottom-[30rem] left-[52rem] -scale-x-[190] scale-y-[190]"}
                   src={"/images/experience/assistantBackLeaf.svg"} alt={"Placeholder"} width={16} height={6}/>
            <section className={"relative z-20 w-full h-full flex items-center justify-between"}>
                <section className={"w-full"}>
                </section>
                <section className={"w-3/5 h-full flex flex-col items-start justify-center gap-16"}>
                    <h2 className={"text-caribbean-green text-8xl font-black leading-[0.85]"}>{strings.landing.experience.headline}<strong className={"text-midnight-green"}>{strings.landing.experience.remark}</strong></h2>
                    <p className={"text-white text-2xl"}>{strings.landing.experience.content}</p>
                    <button className={buttonStyle} onClick={() => navigate.push("/experience")}>
                        {strings.landing.experience.cta}
                    </button>
                </section>
            </section>
        </article>
    );
}