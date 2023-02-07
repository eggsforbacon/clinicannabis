import {strings} from "../../../model/strings";
import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";

export const Experience = () => {

    const buttonStyle: string = "text-white border-solid border-2 border-white rounded-full px-16 py-2 text-xl shadow-md transition duration-300 quartic-out lg:hover:border-white lg:hover:shadow-white/20 lg:hover:bg-viridian-green lg:hover:text-white";
    const navigate = useRouter();

    return (
        <article className={"w-full overflow-clip h-[62rem] px-44 relative"}>
            <section className={"absolute w-full h-full top-0 left-0 z-0"}>
                <Image className={"z-0 absolute select-none bottom-16 right-[56rem] -scale-x-[220] scale-y-[220]"}
                       src={"/images/experience/experienceLdngBackLeaf.svg"} alt={"Placeholder"} width={16} height={6}/>
                <Image className={"z-10 absolute select-none -bottom-14 -left-10"}
                       src={"/images/landing/experienceHero.png"} alt={"Placeholder"} width={1612*.75} height={1292*.75}/>
                <Image className={"z-20 absolute select-none -bottom-64 left-[72rem] scale-[190]"}
                       src={"/images/experience/assistantBackLeaf.svg"} alt={"Placeholder"} width={16} height={6}/>
            </section>
            <section className={"relative z-10 w-full h-full flex items-center justify-between"}>
                <section className={"w-full"}>
                </section>
                <section className={"w-2/5 h-full flex flex-col items-start justify-start pt-32 gap-32"}>
                    <h2 className={"text-caribbean-green text-[7rem] font-black leading-[0.75]"}>{strings.landing.experience.headline}<strong
                        className={"text-midnight-green text-9xl"}>{strings.landing.experience.remark}</strong></h2>
                    <section className={"flex flex-col items-start justify-start gap-6"}>
                        <p className={"text-white text-2xl"}>{strings.landing.experience.content}</p>
                        <button className={buttonStyle} onClick={() => navigate.push("/experience")}>
                            {strings.landing.experience.cta}
                        </button>
                    </section>
                </section>
            </section>
        </article>
    );
}