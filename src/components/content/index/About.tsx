import Image from "next/image";
import {strings} from "../../../model/strings";
import React, {useContext, useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions";
import NavbarContext from "../../../context/Navbar/NavbarContext";

export const About = () => {

    const hereRef = useRef(null);
    const triggerRef = useRef(null);
    const [animation, setAnimation] = useState("opacity-0 -translate-x-[100px]");
    const {setLogoShown, logoShown} = useContext(NavbarContext);

    useEffect(() => {
        const trigger = triggerRef.current as unknown as HTMLSpanElement;
        const here = hereRef.current as unknown as HTMLSpanElement;

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

    const {width: wWidth, height: wHeight} = useWindowDimensions();
    const buttonStyle: string = "hidden lg:block rounded-full border-solid border-2 border-viridian-green text-viridian-green font-normal text-base px-6 py-1 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white";
    const navigate = useRouter();
    return (
        <article
                 className={"relative lg:px-44 pt-16 lg:pt-32 h-[36rem] lg:min-h-[56rem] lg:h-auto w-full flex items-start justify-center"}>
            <Image src={"/images/landing/whoAreWeBg.png"}
                   className={`hidden lg:block lg:!opacity-40 xl:!opacity-100 absolute pointer-events-none -top-10 -right-0 selection:bg-transparent ${animation}`}
                   alt={""}
                   height={1055*1.4} width={1920*1.4} quality={100} loading={"lazy"}/>
            <Image src={"/images/svg/leafHumanizing.svg"}
                   className={"hidden lg:block z-0 pointer-events-none absolute selection:bg-transparent left-0 top-0 opacity-40"}
                   alt={""}
                   height={1000} width={1000}/>
            <section className={"z-10 px-12 lg:px-0 w-full flex items-center justify-between mb-20"}>
                <article className={"lg:w-136 flex flex-col items-start justify-start pt-16 gap-8 lg:gap-16"}>
                    <h2 className={` tracking-tight max-w-[22rem] leading-[0.8] lg:leading-[0.6] text-caribbean-green text-6xl lg:text-9xl font-black ${animation} animation-duration-1000`}>{strings.landing.about.headline}<strong
                        className={"text-viridian-green relative "}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{strings.landing.about.headlineRemark}</strong>
                    </h2>
                    <p className={`lg:ml-8 w-full text-neutral-800 text-left text-base lg:text-2xl font-normal ${animation} animation-duration-1400`}>{strings.landing.about.content}</p>
                    {/*<button*/}
                    {/*    className={"hidden ml-32 lg:mt-12 font-normal rounded-full bg-white text-2xl text-viridian-green px-16 py-2 shadow-lg shadow-viridian-green/20 transition duration-500 ease-in-out scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-white focus:text-viridian-green border-viridian-green border-2 border-solid lg:hover:shadow-viridian-green/15"}*/}
                    {/*    onClick={() => navigate.push("/about")}>Ver más</button>*/}
                </article>
            </section>
            <span ref={triggerRef}
                  className={"absolute top-96 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
        </article>
    );
}