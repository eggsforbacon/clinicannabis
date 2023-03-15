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
        <article className={"w-full overflow-x-clip h-224 lg:h-[52rem] lg:px-44 relative"}>
            <Image src={"/images/landing/experienceHero.png"} alt={""} width={1920} height={820} className={"z-0 absolute -top-16 scale-125 left-0"} />
            <section className={"absolute w-full h-full top-0 left-0 z-0"}>

            </section>
            <section className={"relative z-10 px-8 md:pl-32 xl:px-0 w-full h-168 flex items-center justify-between"}>
                <section className={"w-1/2 relative z-10 flex flex-col items-stretch justify-end gap-8"}>
                    <h2 className={"text-midnight-green lg:text-caribbean-green text-[3.5rem] lg:text-[7rem] font-black lg:leading-[0.6]"}>{strings.landing.experience.headline}<strong
                        className={"text-caribbean-green lg:text-midnight-green text-6xl lg:text-9xl"}>{strings.landing.experience.remark}</strong></h2>
                    <p className={"text-neutral-800 text-base lg:text-2xl font-normal text-left md:text-left lg:w-192"}>{strings.landing.experience.content}</p>
                </section>
            </section>
        </article>
    );
}