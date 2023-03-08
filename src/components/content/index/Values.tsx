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
            <article className={"relative xl:px-40 pt-16 lg:min-h-[54rem] xl:min-h-[64rem] w-full flex items-start justify-center"}>
                <Image src={"/images/backgrounds/humanizing.png"}
                       className={"z-0 pointer-events-none left-0 lg:scale-[2] xl:scale-125 absolute selection:bg-transparent -top-0"} alt={""}
                       height={584} width={1920} priority/>
                <section className={"z-10 w-full grid grid-cols-2 place-items-end lg:ml-44 xl:ml-auto xl:gap-x-56"}>
                    <section className={`h-168 w-[40rem] relative rounded-3xl overflow-clip shadow-lg ${animation} animation-duration-500`}>
                        <Image src={"/images/landing/humanizingHero.png"}
                               className={"pointer-events-none relative h-full selection:bg-transparent"} alt={""}
                               height={660} width={640} priority/>
                        <span className={"w-full h-full absolute xl:bg-gradient-to-t xl:from-black/0 lg:bg-gradient-to-r lg:from-black/60 top-0 right-0"}/>
                    </section>
                    <article className={`lg:-order-1 xl:order-1 h-full flex flex-col items-start justify-end space-y-20 ${animation} animation-duration-800`}>
                        <h2 className={"text-white font-black text-8xl"}><strong
                            className={"text-caribbean-green"}>{strings.landing.values.humanization.headline}</strong><br/>{strings.landing.values.humanization.remark}</h2>
                        <p className={"text-white text-2xl font-normal w-144"}>{strings.landing.values.humanization.content}</p>
                    </article>
                </section>
                <span ref={triggerRef}
                      className={"absolute top-96 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
            </article>
        </>
    );
}