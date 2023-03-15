import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {strings} from "../../../model/strings";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions";

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

    const {width: wWidth, height: wHeight} = useWindowDimensions();

    return (
        <>
            <article
                className={"relative xl:px-40 pt-16 pb-44 min-h-[44rem] lg:min-h-[54rem] xl:min-h-[64rem] w-full flex items-start lg:items-end justify-end"}>
                <Image src={"/images/landing/values/humanizing.png"} className={`!scale-[3.5] w-full h-auto lg:!scale-100 pointer-events-none selection:bg-transparent absolute z-10 -left-44 top-32 lg:-top-10 lg:left-0 ${animation} animation-duration-500`} alt={""} width={1920} height={1087} />
                <span ref={triggerRef}
                      className={"absolute -top-6 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
                <section className={"px-6 lg:mt-0 lg:px-0 lg:w-1/2 relative z-10 flex flex-col items-stretch justify-end gap-8"}>
                    <h2 className={"text-white font-black text-5xl lg:leading-[0.85] w-full lg:text-8xl"}><strong
                        className={"text-caribbean-green"}>{strings.landing.values.humanization.headline}</strong><br/>{strings.landing.values.humanization.remark}
                    </h2>
                    <p className={"text-white text-base lg:text-2xl font-light text-left md:text-left lg:w-144"}>{strings.landing.values.humanization.content}</p>
                </section>
            </article>
        </>
    );
}