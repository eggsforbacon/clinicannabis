import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {strings} from "../../../model/strings";

const humanizing = require(`../../../../public/images/landing/values/humanizing.png`);

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
                className={"z-20 bg-rich-black md:bg-transparent relative lg:px-16 xl:px-20 2xl:px-40 pt-16 md:pt-0 lg:pt-16 pb-20 lg:pb-56 xl:pb-40 mb-44 md:mb-0 md:min-h-[40rem] lg:min-h-[54rem] xl:min-h-[60rem] 2xl:min-h-[66rem] flex items-start justify-center lg:items-center md:justify-end"}>
                <Image quality={80} loading={"lazy"} src={humanizing}
                       className={`hidden md:block min-w-[360px] scale-[1.9] md:scale-[1.75] lg:scale-[1.3] xl:scale-[1.3] 2xl:scale-[1.1] pointer-events-none selection:bg-transparent absolute z-20 -left-64 md:-left-44 -top-8 md:-top-36 lg:top-10 xl:-top-2 2xl:top-4 lg:-left-10 ${animation} animation-duration-500`}
                       alt={""}/>
                {/* !!! COMPOUND SHAPE STARTS HERE -- DO NOT TOUCH UNLESS EXPLICITLY ALLOWED TO DO SO !!! */}
                {/* !!! INICIO DE FORMA COMPUESTA -- NO TOCAR SIN AUTORIZACIÓN EXPLICITA !!! */}
                <span className={"md:hidden select-none absolute bg-rich-black aspect-square h-44 -bottom-28 left-0 z-20"}/>
                <Image src={"/images/services/questionableAsset.svg"} alt={""} height={440} width={440}
                       className={"md:hidden select-none absolute -bottom-[26rem] -left-10 -scale-[2.8] -rotate-45 z-20"}/>
                <Image src={"/images/services/service1_left.png"} alt={""} height={2461} width={1255}
                       className={"md:hidden select-none absolute -top-52 -left-52 -rotate-12 z-20"}/>
                <Image src={"/images/services/questionableAsset.svg"} alt={""} height={440} width={440}
                       className={"md:hidden select-none absolute -top-[26rem] left-[24rem] scale-[2.9] -rotate-[40deg] z-20"}/>
                <span className={"md:hidden select-none absolute bg-rich-black aspect-square h-48 -top-7 left-0 z-20"}/>
                <span className={"md:hidden select-none absolute bg-rich-black aspect-square h-44 -top-16 right-0 z-20"}/>
                {/* !!! FIN DE FORMA COMPUESTA !!! */}
                {/* !!! COMPOUND SHAPE END !!! */}
                {/* Handcrafted hell yeah man, only took 2 hours or so */}
                <span
                    className={"hidden lg:block bg-gradient-to-b from-white via-white/80 w-full absolute bottom-4 left-0 h-28 z-10 lg:bottom-16 2xl:-bottom-10"}/>
                <span ref={triggerRef}
                      className={"absolute -top-6 w-full h-1 bg-transparent pointer-events-none select-none"}/>
                <section
                    className={"bg-rich-black md:bg-transparent px-6 max-w-[30rem] md:max-w-[42rem] md:-mt-16 lg:mt-0 md:px-16 lg:w-168 relative z-20 flex flex-col items-stretch justify-end gap-8"}>
                    <h2 className={"text-white font-black text-5xl leading-[0.85] lg:leading-[0.85] w-full md:text-7xl lg:text-8xl"}>
                        <strong
                            className={"text-caribbean-green"}>{strings.landing.values.humanization.headline}</strong><br/>{strings.landing.values.humanization.remark}
                    </h2>
                    <p className={"text-white text-base md:text-xl lg:text-2xl font-light text-left md:text-left lg:w-144"}>{strings.landing.values.humanization.content}</p>
                </section>
            </article>
        </>
    );
}