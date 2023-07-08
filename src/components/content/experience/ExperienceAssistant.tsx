import Image from "next/image";
import {strings} from "../../../model/strings";
import React, {useEffect, useRef, useState} from "react";

export const ExperienceAssistant = () => {

    const triggerRef = useRef(null);
    const [bgAnimation, setBgAnimation] = useState("opacity-0 translate-y-[100px]");
    const [textAnimation, setTextAnimation] = useState("opacity-0 -translate-x-[100px]");

    useEffect(() => {
        const trigger = triggerRef.current as unknown as HTMLSpanElement;
        const observe = (trigger: HTMLSpanElement, state: [string, any][], changes: string[]) => {
            const observer = new IntersectionObserver(callback);
            observer.observe(trigger);

            function callback(entries: IntersectionObserverEntry[]) {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    state.forEach((e,i) => {
                        e[1](changes[i]);
                        observer.unobserve(trigger);
                    })
                }
            }
        }

        observe(trigger, [[bgAnimation, setBgAnimation], [textAnimation, setTextAnimation]], ["animate-fade-in-bottom", "animate-fade-in-left"]);

    }, []);

    return (
        <section className={"w-full h-320 relative mt-32"}>
            <Image className={"absolute select-none bottom-[27rem] left-[52rem] scale-[190]"}
                   src={"/images/experiencia/assistantBackLeaf.svg"} alt={"Placeholder"} width={16} height={6}/>
            <Image className={`absolute select-none top-1 ${bgAnimation}`}
                   src={"/images/experiencia/assistantFront.png"} alt={"Placeholder"} width={1932} height={1210}/>
            <article className={"w-256 h-2/3 relative flex flex-col items-start justify-between pt-20 pl-40"}>
                <h2 className={`leading-[0.8] text-9xl text-caribbean-green font-black ${textAnimation} animation-duration-1200`}>{strings.experience.assistant.headline}<br/><strong
                    className={"text-viridian-green text-[6.5rem]"}>{strings.experience.assistant.remark}</strong></h2>
                <section className={`text-white mb-7 ${textAnimation} animation-duration-900`}>
                    <h3 className={"text-5xl font-black"}>{strings.experience.assistant.subtitle}</h3>
                    <p className={"text-3xl font-normal text-justify pr-40 leading-[1.25]"}>{strings.experience.assistant.content}</p>
                </section>
            </article>
            <span ref={triggerRef}
                  className={"absolute top-96 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
        </section>
    );
}