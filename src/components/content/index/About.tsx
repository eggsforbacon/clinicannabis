import Image from "next/image";
import {strings} from "../../../model/strings";
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
                className={"relative md:px-16 bg-white xl:px-44 lg:pt-32 h-144 md:h-208 lg:min-h-[56rem] xl:min-h-[64rem] lg:h-auto w-full flex items-start justify-center lg:-mb-[15rem]"}>
            <Image src={"/images/landing/whoAreWeBg.png"}
                   className={`hidden lg:block md:opacity-90 lg:opacity-100 md:scale-[1.6] lg:scale-[1.5] xl:scale-[1.3] absolute pointer-events-none -top-10 lg:-top-4 left-4 lg:left-20 xl:left-10 select-none ${animation}`}
                   alt={""}
                   height={1055*1.4} width={1920*1.4} quality={100} loading={"lazy"}/>
            {/*<Image src={"/images/svg/leafHumanizing.svg"}*/}
            {/*       className={`lg:hidden block z-0 pointer-events-none absolute select-none left-0 top-0 opacity-60 ${animation}`}*/}
            {/*       alt={""}*/}
            {/*       height={1000} width={1000}/>*/}
            <section className={"z-10 px-6 lg:h-auto lg:px-0 w-full flex items-center justify-center lg:justify-between mb-20 md:pb-0 lg:mb-20"}>
                <article className={"w-104 lg:w-136 flex flex-col items-center lg:items-start justify-start pt-16 gap-8 lg:gap-16"}>
                    <h2 className={`tracking-tight max-w-[28rem] lg:max-w-[22rem] leading-[0.8] md:leading-[0.7] lg:leading-[0.6] text-caribbean-green text-6xl md:text-8xl lg:text-9xl font-black ${animation} animation-duration-1000`}>{strings.landing.about.headline}<strong
                        className={"text-viridian-green relative "}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{strings.landing.about.headlineRemark}</strong>
                    </h2>
                    <p className={`lg:ml-8 w-full text-neutral-800 text-left text-base md:text-xl lg:text-2xl font-normal ${animation} animation-duration-1400`}>{strings.landing.about.content}</p>
                    {/*<button*/}
                    {/*    className={"hidden ml-32 lg:mt-12 font-normal rounded-full bg-white text-2xl text-viridian-green px-16 py-2 shadow-lg shadow-viridian-green/20 transition duration-500 ease-in-out scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-white focus:text-viridian-green border-viridian-green border-2 border-solid lg:hover:shadow-viridian-green/15"}*/}
                    {/*    onClick={() => navigate.push("/about")}>Ver más</button>*/}
                </article>
            </section>
            <span ref={triggerRef}
                  className={"absolute top-72 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
        </article>
    );
}