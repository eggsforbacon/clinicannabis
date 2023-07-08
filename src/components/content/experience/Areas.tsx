import {Carousel} from "../../Carousel";
import React, {useEffect, useRef, useState} from "react";
import {CarouselSlide} from "./CarouselSlide";
import {strings} from "../../../model/strings";
import {useRouter} from "next/router";

export const Areas = () => {

    const [current, setCurrent] = useState(0);

    const navItemStyle = "text-2xl transition duration-1000 ease-in-out font-semibold lg:hover:cursor-pointer lg:hover:text-viridian-green focus:cursor-pointer focus:text-viridian-green";
    const navigate = useRouter();
    const triggerRef = useRef(null);
    const [animateCarousel, setAnimateCarousel] = useState("opacity-0 -translate-y-[100px]");
    const [navAnimation, setNavAnimation] = useState("opacity-0 -translate-x-[100px]");

    useEffect((() => {
        const carouselInterval = setInterval(() => {
            setCurrent((current) => current === 3 ? 0 : current + 1);
        }, 5500);
        const trigger = triggerRef.current as unknown as HTMLSpanElement;
        const observe = (trigger: HTMLSpanElement, state: [string, any][], changes: string[]) => {
            const observer = new IntersectionObserver(callback);
            observer.observe(trigger);

            function callback(entries: IntersectionObserverEntry[]) {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    state.forEach((e, i) => {
                        e[1](changes[i]);
                        observer.unobserve(trigger);
                    })
                }
            }
        }

        observe(trigger, [[animateCarousel, setAnimateCarousel], [navAnimation, setNavAnimation]], ["animate-fade-in-top", "animate-fade-in-left"]);
        return () => clearInterval(carouselInterval);
    }), [current]);

    const links = ["/experiencia/pharmacy", "/experiencia/coffee-shop", "/experiencia/boutique", "/experiencia/origins-hall"];
    const carouselItems = [<span/>, <span/>, <span/>, <span/>].map((_, i : number) => {
        const index = (i+1).toString();
        return <CarouselSlide src={`/images/experience/carousel/${i}.jpg`} alt={""}
                              headline={strings.experience.carousel[index].headline}
                              content={strings.experience.carousel[index].content}
                              interaction={strings.experience.carousel[index].interaction} to={links[i]}/>
    });

    return (
        <section className={"w-full mt-28 mb-48 z-10 relative"}>
            <article className={"w-full flex items-center justify-around px-40 py-16"}>
                <section className={"flex flex-col items-start justify-start gap-16 h-full"}>
                    <h2 className={`text-8xl font-black w-112 text-caribbean-green ${navAnimation} animation-duration-1600`}>{strings.experience.carousel.title}<strong
                        className={"text-viridian-green"}>{strings.experience.carousel.remark}</strong></h2>
                    <ul className={"flex flex-col items-start justify-start gap-8 h-full w-64"}>
                        <li onClick={() => setCurrent(0)}
                            className={`${navItemStyle} ${(current % 4 === 0) ? "text-caribbean-green" : "text-neutral-400"} ${navAnimation} animation-duration-800`}>{strings.experience.carousel[1].headline}
                        </li>
                        <li onClick={() => setCurrent(1)}
                            className={`${navItemStyle} ${(current % 4 === 1) ? "text-caribbean-green" : "text-neutral-400"} ${navAnimation} animation-duration-1000`}>{strings.experience.carousel[2].headline}
                        </li>
                        <li onClick={() => setCurrent(2)}
                            className={`${navItemStyle} ${(current % 4 === 2) ? "text-caribbean-green" : "text-neutral-400"} ${navAnimation} animation-duration-1200`}>{strings.experience.carousel[3].headline}
                        </li>
                        <li onClick={() => setCurrent(3)}
                            className={`${navItemStyle} ${(current % 4 === 3) ? "text-caribbean-green" : "text-neutral-400"} ${navAnimation} animation-duration-1400`}>{strings.experience.carousel[4].headline}
                        </li>
                    </ul>
                </section>
                <Carousel index={current} items={carouselItems} animate={`${animateCarousel} animation-duration-1200`}/>
            </article>
            <span ref={triggerRef}
                  className={"absolute top-96 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
        </section>
    );
}