import Image from "next/image";
import {strings} from "../../../accessibility/strings";
import React, {useEffect, useRef, useState} from "react";

export const Hero = () => {
    const [headlineAnimation, setHeadlineAnimation] = useState("opacity-0 -translate-y-[100px]");
    const [contentAnimation, setContentAnimation] = useState("opacity-0 translate-x-[100px]");
    useEffect(() => {
        setHeadlineAnimation("animate-fade-in-top animation-duration-1400");
        setContentAnimation("animate-fade-in-right animation");
    }, [])

    return (
        <header className={"w-full h-224 relative flex flex-col items-stretch justify-center"}>
            <Image className={"absolute -top-4 left-0 select-none scale-125"}
                   src={"/images/experience/hero.png"} alt={"Placeholder"} width={1920} height={1044}/>
            <article className={"z-30 w-full h-full flex flex-col items-stretch justify-between px-44 py-32"}>
                <h2 className={`text-9xl w-192 text-white font-black leading-[0.8] ${headlineAnimation}`}>{strings.experience.hero.headline}<strong
                    className={"text-[6.5rem] text-caribbean-green"}>{strings.experience.hero.remark}</strong></h2>
                <p className={`text-neutral-400 font-normal text-2xl text-right pl-[56rem] w-full ${contentAnimation}`}>{strings.experience.hero.content}</p>
            </article>
        </header>
    );
}