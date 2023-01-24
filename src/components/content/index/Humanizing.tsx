import Image from "next/image";
import {useEffect, useRef, useState} from "react";

export const Humanizing = () => {

    const imageTriggerRef = useRef(null);
    const [imageAnimation, setImageAnimation] = useState("opacity-0 -translate-x-[100px]");
    const textTriggerRef = useRef(null);
    const [textAnimation, setTextAnimation] = useState("opacity-0 -translate-x-[100px]");

    useEffect(() => {
        const imgTrigger = imageTriggerRef.current as unknown as HTMLSpanElement;
        const textTrigger = textTriggerRef.current as unknown as HTMLSpanElement;
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

        observe(imgTrigger, [imageAnimation, setImageAnimation], "animate-fade-in-bottom");
        observe(textTrigger, [textAnimation, setTextAnimation], "animate-fade-in-bottom animation-duration-1600");

    }, []);

    return (
        <>
            <article className={"relative px-40 pt-16 min-h-[56rem] w-full flex items-start justify-center"}>
                <Image src={"/images/backgrounds/humanizing.png"}
                       className={"z-0 pointer-events-none absolute selection:bg-transparent -top-0"} alt={""}
                       height={584} width={1920} priority/>
                <section className={"z-10 w-full grid grid-cols-2 place-items-end gap-x-56 px-6"}>
                    <section className={`h-fit w-fit rounded-3xl overflow-clip shadow-lg ${imageAnimation}`}>
                        <Image src={"/images/landing/humanizingHero.png"}
                               className={"pointer-events-none selection:bg-transparent"} alt={""}
                               height={660} width={640} priority/>
                    </section>
                    <article className={`h-3/4 flex flex-col items-start justify-end space-y-20 ${textAnimation}`}>
                        <h2 className={"text-white font-black text-8xl"}><strong
                            className={"text-caribbean-green"}>Humanización</strong><br/>en atención<br/>al paciente
                        </h2>
                        <p className={"text-white text-3xl font-normal"}>Clinicannabis cuenta con personal calificado,
                            sus profesionales tienen experiencia en humanización en la atención e implementación de las
                            políticas de Seguridad del Paciente y Gestión del Riesgo</p>
                    </article>
                </section>
                <span ref={imageTriggerRef}
                      className={"absolute bottom-56 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
                <span ref={textTriggerRef}
                      className={"absolute top-96 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
            </article>
        </>
    );
}