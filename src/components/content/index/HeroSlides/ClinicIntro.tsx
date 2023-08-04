import React, {useContext, useState} from "react";
import {strings} from "../../../../model/strings";
import GlobalContext from "../../../../context/GlobalContext";
import Link from "next/link";


export const ClinicIntro = () => {

    const {hasWindow, loadedOnce, disableAnimation} = useContext(GlobalContext);

    const [animateHero, setAnimateHero] = useState("lg:opacity-0 translate-y-[100px]");
    const [animateHeroVideo, setAnimateHeroVideo] = useState("lg:!w-[80%]");
    const [animateHeroHeadline, setAnimateHeroHeadline] = useState("lg:hidden lg:w-0 opacity-0 pointer-events-none");

    const finalVideoState : string = "lg:w-[70%] md:-translate-y-[150px] lg:-translate-y-[70px] xl:-translate-y-[50px]";
    const finalHeroHeadline : string = "flex md:w-1/2 opacity-100 md:translate-y-[100px]";

    const handleOnEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        e.preventDefault();
        setAnimateHero("lg:opacity-0 lg:translate-y-[100px] lg:animate-fade-in-bottom lg:animation-delay-600");
        setAnimateHeroVideo("lg:!w-[80%] md:animate-shrink-to-top-sm lg:animate-shrink-to-half-lg xl:animate-shrink-to-half-xl lg:animation-fill-both");
        setAnimateHeroHeadline("flex md:animate-expand-to-half");
        // setOpacity("opacity-0 pointer-events-none selection:bg-transparent lg:opacity-100 lg:pointer-events-auto lg:z-10");
        sessionStorage.setItem("loaded", "true");
    }

    const handleTextAnimEnd = () => {
        disableAnimation();
    };

    return (
        <article
            className={"lg:px-44 lg:pt-52 xl:pt-32 2xl:pt-40 h-screen md:h-208 lg:h-192 fixed lg:relative z-50 lg:z-10 bg-white flex items-start justify-center overflow-x-clip"}>
            <section
                className={`absolute h-full w-full lg:w-auto lg:h-auto z-10 lg:relative flex items-center justify-around ${loadedOnce ? finalHeroHeadline : animateHeroHeadline}`}>
                <article
                    className={"lg:w-136 h-full w-full flex flex-col items-center justify-end pb-20 md:pb-96 lg:py-0 lg:items-start lg:justify-center gap-16 lg:gap-8"}>
                    <h2 className={`text-viridian-green text-center !w-screen lg:!w-auto text-3xl lg:text-6xl lg:text-left tracking-normal font-black ${loadedOnce ? "" : animateHero} lg:animation-duration-800`}>{strings.landing.hero.animation.headline}<br/><strong
                        className={"text-caribbean-green"}>{strings.landing.hero.animation.headlineRemark}</strong></h2>
                    <p className={`text-neutral-400 w-full pr-12 font-normal lg:text-xl ${loadedOnce ? "" : animateHero} lg:animation-duration-1200`}>
                        {strings.landing.hero.animation.subtitle}
                        <strong
                            className={"bg-gradient-to-r w-fit from-clinic-jade to-clinic-blue-chill bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-bg-size duration-300 ease-in-out lg:hover:bg-[length:100%_3px]"}>{strings.landing.hero.animation.subtitleRemark}</strong>
                    </p>
                    <Link href={"/contacto"} onAnimationEnd={handleTextAnimEnd}
                            className={`hidden lg:block mt-6 rounded-full bg-viridian-green text-xl text-white px-10 py-2 shadow-lg shadow-viridian-green/15 transition duration-500 ease-in-out lg:hover:bg-white lg:hover:text-viridian-green focus:scale-110 focus:bg-white focus:text-viridian-green border-transparent border-2 border-solid lg:hover:border-viridian-green lg:hover:shadow-viridian-green/20 ${loadedOnce ? "" : animateHero} lg:animation-duration-2400`}>{strings.landing.hero.animation.cta}</Link>
                </article>
            </section>
            <section
                className={`relative h-full bg-white z-50 lg:z-auto flex justify-center items-center overflow-clip ${loadedOnce ? finalVideoState : animateHeroVideo}`}>
                {hasWindow &&
                    <video height={1080 * 1.8} width={1920 * 1.8} muted playsInline autoPlay controls={false}
                           className={"scale-[1.5] lg:scale-[1.75] xl:scale-[1.25]"}
                           onEnded={handleOnEnded}>
                        <source src={"/video/ClinicannabisAnimation.mp4"}
                                type={"video/mp4"}/>
                        Your browser does not support the video tag.
                    </video>
                }
            </section>
        </article>
    );
}