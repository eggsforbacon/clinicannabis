"use client";

import Image from "next/image";
import {strings} from "@/model/strings";
import React, { useEffect, useRef, useState} from "react";

export const About = () => {

    const triggerRef = useRef(null);
    const [animation, setAnimation] = useState("opacity-0 translate-y-[100px]");

    useEffect(() => {
        const trigger = triggerRef.current as unknown as HTMLSpanElement;
        function callback(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
            const entry = entries[0];
            if (entry.isIntersecting) {
                setAnimation("animate-fade-in-bottom");
                observer.unobserve(trigger);
            }
        }

        const observe = (trigger: HTMLSpanElement, callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void) => {
            const observer = new IntersectionObserver(callback);
            observer.observe(trigger);
        }

        observe(trigger, callback);


    }, []);

    return (
        <article 
                className={"relative md:px-16 bg-white xl:px-44 lg:pt-32 h-256 lg:min-h-[56rem] xl:min-h-[64rem] 2xl:min-h-[74rem] lg:h-auto w-full flex items-start justify-center lg:-mb-[15rem]"}>
            <Image src={"/index/about-background.png"}
                   className={`opacity-90 lg:opacity-100 scale-[2.3] md:scale-[1.2] lg:scale-[1.1] xl:scale-[1.2] 2xl:scale-100 top-[34rem] right-[60%] md:right-0 md:top-64 lg:top-0 lg:right-0 xl:right-20 xl:top-10 2xl:right-0 2xl:top-0 absolute pointer-events-none select-none ${animation}`}
                   alt={""}
                   height={1080} width={1920} quality={100} loading={"lazy"}/>
            <span className={"h-24 w-full absolute bg-gradient-to-b from-white top-96 md:top-52 lg:hidden"}/>
            <section className={"z-10 px-6 lg:h-auto lg:px-0 w-full flex items-center justify-center md:justify-between mb-20 md:pb-0 lg:mb-20"}>
                <article className={"w-96 lg:w-[32.5rem] 2xl:w-136 flex flex-col items-center lg:items-start justify-start pt-16 gap-8 lg:gap-12"}>
                    <h2 className={`tracking-tight max-w-[28rem] lg:max-w-[20rem] leading-[0.8] md:leading-[0.7] lg:leading-[0.6] 2xl:leading-[0.6] text-caribbean-green text-6xl md:text-8xl 2xl:text-9xl font-black ${animation} animation-duration-1000`}>{strings.landing.about.headline}<strong
                        className={"text-viridian-green relative "}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{strings.landing.about.headlineRemark}</strong>
                    </h2>
                    <p className={`lg:ml-8 w-full text-neutral-800 text-left text-base md:text-xl 2xl:text-2xl font-normal ${animation} animation-duration-1400`}>{strings.landing.about.content}</p>
                </article>
            </section>
            <span ref={triggerRef}
                  className={"absolute top-72 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
        </article>
    );
}