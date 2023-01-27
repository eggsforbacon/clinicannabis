import Image from "next/image";
import {strings} from "../../../accessibility/strings";
import React, {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";

export const About = () => {

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

    const buttonStyle: string = "hidden lg:block rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-6 py-1 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";
    const navigate = useRouter();
    return (
        <article className={"relative px-44 pt-32 min-h-[56rem] w-full flex items-start justify-center"}>
            <Image src={"/images/landing/whatsForYouHero.png"}
                   className={`absolute pointer-events-none top-20 -right-36 selection:bg-transparent ${animation}`} alt={""}
                   height={2752 * .7} width={1666 *.7}/>
            <Image src={"/images/svg/leafHumanizing.svg"}
                   className={"z-0 pointer-events-none absolute selection:bg-transparent left-0 top-0 opacity-40"} alt={""}
                   height={1000} width={1000}/>
            <Image src={"/images/backgrounds/ourHistory.svg"}
                   className={"z-0 pointer-events-none absolute selection:bg-transparent -top-0 overflow-y-clip"} alt={""}
                   height={584} width={1920}/>
            <section className={"z-10 w-full flex items-center justify-between mb-16"}>
                <article className={"w-136 flex flex-col items-start justify-start"}>
                    <h2 className={`tracking-tight text-viridian-green text-9xl leading-[0.9] font-black mb-10 ${animation} animation-duration-1000`}>{strings.landing.about.headline}<strong className={"text-caribbean-green"}>{strings.landing.about.headlineRemark}</strong></h2>
                    <p className={`w-full text-neutral-400 text-2xl font-normal ${animation} animation-duration-1400`}>{strings.landing.about.content}</p>
                    <button
                        className={"hidden ml-32 mt-12 font-normal rounded-full bg-white text-2xl text-viridian-green px-16 py-2 shadow-lg shadow-viridian-green/20 transition duration-500 ease-in-out scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-white focus:text-viridian-green border-viridian-green border-2 border-solid lg:hover:shadow-viridian-green/15"}
                        onClick={() => navigate.push("/about")}>Ver más</button>
                </article>
            </section>
            <span ref={triggerRef}
                  className={"absolute top-96 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
        </article>
    );
}