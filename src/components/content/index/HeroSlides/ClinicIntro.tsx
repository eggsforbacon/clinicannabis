import React, {Dispatch, SetStateAction, useState} from "react";
import {useRouter} from "next/router";
import {useWindowDimensions} from "../../../../hooks/useWindowDimensions";
import {ServiceCard} from "../../../ServiceCard";
import Link from "next/link";
import {SwiperCarousel} from "../../../SwiperCarousel";
import {strings} from "../../../../model/strings";

interface IProps {
    hasWindow: boolean,
    // videoState : {videoPlayedOnce: boolean, setVideoPlayedOnce: Dispatch<SetStateAction<boolean>>},
}

export const ClinicIntro = (props: IProps) => {

    const [animateHero, setAnimateHero] = useState("lg:opacity-0 translate-y-[100px]");
    const [animateHeroVideo, setAnimateHeroVideo] = useState("lg:!w-[80%]");
    const [animateHeroHeadline, setAnimateHeroHeadline] = useState("lg:hidden lg:w-0 opacity-0 pointer-events-none");
    const [opacity, setOpacity] = useState("opacity-100");
    const loaded = props.hasWindow && sessionStorage.getItem("loaded");
    const [hasLoaded, setHasLoaded] = useState(loaded !== null && loaded === "true");

    const handleOnEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        e.preventDefault();
        setAnimateHero("lg:opacity-0 lg:translate-y-[100px] lg:animate-fade-in-bottom lg:animation-delay-600");
        setAnimateHeroVideo("lg:!w-[80%] md:animate-shrink-to-top-sm lg:animate-shrink-to-half-lg xl:animate-shrink-to-half-xl lg:animation-fill-both");
        setAnimateHeroHeadline("flex md:animate-expand-to-half");
        setOpacity("opacity-0 pointer-events-none selection:bg-transparent lg:opacity-100 lg:pointer-events-auto lg:z-10");
        sessionStorage.setItem("loaded", "true");
        setHasLoaded(true);
        // props.videoState.setVideoPlayedOnce(true);
    }

    const navigate = useRouter();

    const beforePlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        e.preventDefault();
        console.log("Start (ms): ", performance.now());
        if (hasLoaded) (e.target as HTMLVideoElement).autoplay = false;
    };

    const handleTextAnimEnd = () => {
        console.log("End (ms): ", performance.now());
    };

    return (
        <header
            className={`transition-opacity duration-700 ease-in-out ${opacity} pt-46 lg:px-44 lg:pt-52 h-screen md:h-208 lg:h-192 fixed lg:relative z-50 lg:z-10 bg-white flex items-start justify-center overflow-x-clip`}>
            <section
                className={`absolute h-full w-full lg:w-auto lg:h-auto z-10 lg:relative flex items-center justify-around ${animateHeroHeadline}`}>
                <article
                    className={"lg:w-136 h-full w-full flex flex-col items-center justify-end pb-20 md:pb-96 lg:py-0 lg:items-start lg:justify-center gap-16 lg:gap-8"}>
                    <h2 className={`hidden lg:block text-viridian-green text-center !w-screen lg:!w-auto text-3xl lg:text-6xl lg:text-left tracking-normal font-black ${animateHero} lg:animation-duration-800`}>{strings.landing.hero.headline}<br/><strong
                        className={"text-caribbean-green"}>{strings.landing.hero.headlineRemark}</strong></h2>
                    <p className={`hidden lg:block text-neutral-400 w-full pr-12 font-normal lg:text-xl ${animateHero} lg:animation-duration-1200`}>
                        {strings.landing.hero.subtitle}
                        <strong
                            className={"bg-gradient-to-r w-fit from-clinic-jade to-clinic-blue-chill bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-bg-size duration-300 ease-in-out lg:hover:bg-[length:100%_3px]"}>{strings.landing.hero.subtitleRemark}</strong>
                    </p>
                    <button onAnimationEnd={handleTextAnimEnd}
                            className={`hidden lg:block mt-6 rounded-full bg-viridian-green text-xl text-white px-10 py-2 shadow-lg shadow-viridian-green/15 transition duration-500 ease-in-out lg:hover:bg-white lg:hover:text-viridian-green focus:scale-110 focus:bg-white focus:text-viridian-green border-transparent border-2 border-solid lg:hover:border-viridian-green lg:hover:shadow-viridian-green/20 ${animateHero} lg:animation-duration-2400`}
                            onClick={() => navigate.push("/contact")}>{strings.landing.hero.cta}</button>
                </article>
            </section>
            <section
                className={`${!hasLoaded ? "" : "max-lg:hidden"} relative h-full bg-white z-50 lg:z-auto flex justify-center items-center overflow-clip ${animateHeroVideo}`}>
                {props.hasWindow && /*&& <Image priority src={"/video/ClinicannabisAnimation.gif"} alt={""} height={1080 * 1.8} width={1920 * 1.8} className={"scale-[1.5] lg:scale-[1.75] xl:scale-[1.25]"} /> */
                    <video height={1080 * 1.8} width={1920 * 1.8} muted playsInline autoPlay controls={false}
                           className={"scale-[1.5] lg:scale-[1.75] xl:scale-[1.25]"}
                           onEnded={handleOnEnded}
                           onCanPlay={beforePlay}>
                        <source src={"/video/ClinicannabisAnimation.mp4"}
                                type={"video/mp4"}/>
                        Your browser does not support the video tag.
                    </video>
                }
                <section
                    className={"lg:hidden aspect-square absolute -top-52 -left-52 opacity-70 h-168 lg:w-0 lg:h-0 w-168"}>
                    <div
                        className={"absolute bg-white h-136 aspect-square rounded-full bg-gradient-radial from-caribbean-green via-transparent animate-rotate-blob"}/>
                    <div className={"absolute top-0 left-0 w-full h-full backdrop-blur-[200px]"}/>
                </section>
            </section>
        </header>
    );
}