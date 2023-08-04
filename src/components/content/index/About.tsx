"use client";

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
                   alt={"Dos doctores de pie cruzándose de brazos y recostados el uno al otro por los hombros. Se encuentran en el lado derecho de la imagen. Ambos visten uniformes médicos de color verde esmeralda, sonriendo y mirando a la cámara. En el fondo, se alcanza a leer la recepción del 2do piso de la clínica. De izquierda a derecha, se encuentran una doctora y un doctor. La primera orienta su cuerpo hacia la izquierda de la imagen, y el segundo hacia la derecha, y sólo se le ve poco más de la mitad del cuerpo."}
                   height={1055*1.4} width={1920*1.4} quality={100} loading={"lazy"}/>
            <section className={"z-10 px-6 lg:h-auto lg:px-0 w-full flex items-center justify-center lg:justify-between mb-20 md:pb-0 lg:mb-20"}>
                <article className={"w-104 lg:w-[32.5rem] flex flex-col items-center lg:items-start justify-start pt-16 gap-8 lg:gap-12"}>
                    <h2 className={`tracking-tight max-w-[28rem] lg:max-w-[20rem] leading-[0.8] md:leading-[0.7] lg:leading-[0.6] text-caribbean-green text-6xl md:text-8xl font-black ${animation} animation-duration-1000`}>{strings.landing.about.headline}<strong
                        className={"text-viridian-green relative "}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{strings.landing.about.headlineRemark}</strong>
                    </h2>
                    <p className={`lg:ml-8 w-full text-neutral-800 text-left text-base md:text-xl font-normal ${animation} animation-duration-1400`}>{strings.landing.about.content}</p>
                </article>
            </section>
            <span ref={triggerRef}
                  className={"absolute top-72 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
        </article>
    );
}