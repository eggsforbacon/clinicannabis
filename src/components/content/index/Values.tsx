import Image from "next/image";
import {useEffect, useRef, useState} from "react";

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
            <article className={"relative px-40 pt-16 min-h-[56rem] w-full flex items-start justify-center"}>
                <Image src={"/images/backgrounds/humanizing.png"}
                       className={"z-0 pointer-events-none absolute selection:bg-transparent -top-0"} alt={""}
                       height={584} width={1920} priority/>
                <section className={"z-10 w-full grid grid-cols-2 place-items-end gap-x-56 px-6"}>
                    <section className={`h-fit w-fit rounded-3xl overflow-clip shadow-lg ${animation} animation-duration-500`}>
                        <Image src={"/images/landing/humanizingHero.png"}
                               className={"pointer-events-none selection:bg-transparent"} alt={""}
                               height={660} width={640} priority/>
                    </section>
                    <article className={`h-3/4 flex flex-col items-start justify-end space-y-20 ${animation} animation-duration-800`}>
                        <h2 className={"text-white font-black text-8xl"}><strong
                            className={"text-caribbean-green"}>Humanización</strong><br/>en atención<br/>al paciente
                        </h2>
                        <p className={"text-white text-2xl font-normal w-144"}>Clinicannabis cuenta con personal calificado,
                            sus profesionales tienen experiencia en humanización en la atención e implementación de las
                            políticas de Seguridad del Paciente y Gestión del Riesgo</p>
                    </article>
                </section>
                <span ref={triggerRef}
                      className={"absolute top-96 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
            </article>
        </>
    );
}