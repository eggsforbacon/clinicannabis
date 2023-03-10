import {strings} from "../../../model/strings";
import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions";

export const Experience = () => {

    const buttonStyle: string = "text-viridian-green lg:text-white border-solid border-2 border-viridian-green lg:border-white rounded-full px-16 py-2 text-xl shadow-md transition duration-300 quartic-out lg:hover:shadow-white/20 lg:hover:bg-viridian-green lg:hover:text-white";
    const navigate = useRouter();

    const {width: wWidth, height: wHeight} = useWindowDimensions();

    return (
        <article className={"w-full overflow-clip h-224 lg:h-[62rem] lg:px-44 relative"}>
            <section className={"absolute w-full h-full top-0 left-0 z-0"}>
                {wWidth > 820 &&
                    <>
                        <Image
                            className={"z-0 absolute select-none lg:-bottom-12 xl:bottom-16 right-[56rem] lg:-rotate-[8deg] xl:rotate-0 -scale-x-[220] scale-y-[220]"}
                            src={"/images/experience/experienceLdngBackLeaf.svg"} alt={"Placeholder"} width={16}
                            height={6}/>
                        <Image className={"z-10 absolute select-none lg:-bottom-8 xl:-bottom-14 lg:-left-[30rem] xl:-left-10"}
                               src={"/images/landing/experienceHero.png"} alt={"Placeholder"} width={1612 * .75}
                               height={1292 * .75}/>
                        <Image className={"z-20 absolute select-none lg:-bottom-44 xl:-bottom-64 left-[72rem] scale-[190]"}
                               src={"/images/experience/assistantBackLeaf.svg"} alt={"Placeholder"} width={16}
                               height={16}/>
                    </>
                }
            </section>
            <section className={"relative z-10 px-8 md:pl-32 xl:px-0 w-full h-full flex items-center justify-between"}>
                <section className={"hidden lg:block w-full"}>
                </section>
                <section className={"md:w-3/5 lg:w-4/5 xl:w-2/5 h-full flex flex-col items-start justify-start pt-56 pb-16 lg:pb-0 lg:pt-32 gap-16 md:gap-8 lg:gap-32"}>
                    <h2 className={"text-midnight-green lg:text-caribbean-green text-[3.5rem] lg:text-[7rem] font-black leading-[0.75]"}>{strings.landing.experience.headline}<strong
                        className={"text-caribbean-green lg:text-midnight-green text-6xl lg:text-9xl"}>{strings.landing.experience.remark}</strong></h2>
                    <section className={"flex flex-col items-center md:items-start justify-start gap-6"}>
                        <p className={"text-midnight-green text-base lg:text-white lg:text-2xl"}>{strings.landing.experience.content}</p>
                        <button className={buttonStyle} onClick={() => navigate.push("/experience")}>
                            {strings.landing.experience.cta}
                        </button>
                    </section>
                </section>
            </section>
        </article>
    );
}