"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {strings} from "../../../model/strings";

export const Values = () => {

    const triggerRef = useRef(null);
    const [animation, setAnimation] = useState("opacity-0 -translate-x-[100px]");

    useEffect(() => {
        const trigger = triggerRef.current as unknown as HTMLSpanElement;
        const observe = (trigger: HTMLSpanElement, state: [string, any], change: string) => {
            const observer = new IntersectionObserver(callback);
            observer.observe(trigger);

            function callback(entries: IntersectionObserverEntry[]) {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    state[1](change);
                    observer.unobserve(trigger);
                }
            }
        }

        observe(trigger, [animation, setAnimation], "animate-fade-in-bottom ");

    }, []);

    return (
        <>
            <article
                className={"z-20 bg-rich-black md:bg-transparent relative lg:px-16 xl:px-20 2xl:px-40 pt-16 md:pt-0 lg:pt-16 pb-20 lg:pb-56 xl:pb-40 mb-44 md:mb-0 md:min-h-[40rem] lg:min-h-[54rem] xl:min-h-[60rem] 2xl:min-h-[66rem] flex items-start justify-center lg:justify-end"}>
                <Image quality={90} loading={"lazy"} src={"/index/humanization-background.png"} width={1920} height={1080}
                       className={`hidden md:block brightness-[0.6] lg:brightness-100 min-w-[360px] scale-[1.9] md:scale-[1.75] lg:scale-[1.3] xl:scale-[1.25] 2xl:scale-[1.05] pointer-events-none selection:bg-transparent absolute z-20 -left-64 md:-right-72 md:left-auto lg:right-auto -top-8 md:-top-36 lg:top-10 xl:-top-2 2xl:-top-16 lg:-left-14 2xl:-left-0 ${animation} animation-duration-500`}
                       alt={""}/>
                {/* !!! COMPOUND SHAPE STARTS HERE -- DO NOT TOUCH UNLESS EXPLICITLY ALLOWED TO DO SO !!! */}
                {/* !!! INICIO DE FORMA COMPUESTA -- NO TOCAR SIN AUTORIZACIÓN EXPLICITA !!! */}
                <span className={"md:hidden select-none absolute bg-rich-black h-44 w-64 -rotate-12 -bottom-28 -left-20 z-20"}/>
                <Image src={"/images/services/questionableAsset.svg"} alt={""} aria-hidden={true} height={440} width={440}
                       className={"md:hidden select-none absolute -bottom-[26rem] -left-16 -scale-[2.8] -rotate-[46deg] z-20"}/>
                <Image src={"/images/services/service1_left.png"} alt={""} aria-hidden={true} height={2461} width={1255}
                       className={"md:hidden select-none absolute -top-60 -left-52 -rotate-12 z-20"}/>
                <Image src={"/images/services/questionableAsset.svg"} alt={""} aria-hidden={true} height={440} width={440}
                       className={"md:hidden select-none absolute -top-[26rem] left-[20rem] scale-[2.9] -rotate-[40deg] z-20"}/>
                <span className={"md:hidden select-none absolute rotate-[40deg] bg-rich-black rounded-3xl h-48 w-36 -top-16 -left-20 z-20"}/>
                <span className={"md:hidden select-none absolute bg-rich-black w-60 h-52 -top-24 -right-4 z-20"}/>
                {/* !!! FIN DE FORMA COMPUESTA !!! */}
                {/* !!! COMPOUND SHAPE END !!! */}
                {/* Handcrafted hell yeah man, only took 2 hours or so */}
                <span
                    className={"hidden lg:block bg-gradient-to-b from-white via-white/80 via-55% w-full absolute bottom-4 left-0 h-28 z-10 lg:bottom-16 2xl:bottom-6"}/>
                <span ref={triggerRef}
                      className={"absolute -top-6 w-full h-1 bg-transparent pointer-events-none select-none"}/>
                <section
                    className={"text-center lg:text-start bg-rich-black md:bg-transparent px-6 max-w-[30rem] md:max-w-[42rem] md:-mt-16 lg:mt-0 xl:-mt-6 md:px-16 lg:pl-28 xl:px-16 lg:w-144 xl:w-168 relative z-20 flex flex-col items-stretch justify-end gap-8"}>
                    <h2 className={"text-white font-black text-5xl leading-[0.85] lg:leading-[0.85] w-full md:text-6xl lg:text-7xl 2xl:text-8xl"}>
                        <strong
                            className={"text-caribbean-green"}>{strings.landing.values.humanization.headline}</strong><br/>{strings.landing.values.humanization.remark}
                    </h2>
                    <p className={"text-white text-base md:text-xl 2xl:text-2xl font-light lg:w-128 2xl:w-144"}>{strings.landing.values.humanization.content}</p>
                </section>
            </article>
        </>
    );
}