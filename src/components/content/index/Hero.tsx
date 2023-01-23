import {strings} from "../../../accessibility/strings";
import React, {useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import service1 from "../../../../public/images/hero/1.png";
import service2 from "../../../../public/images/hero/2.png";
import service3 from "../../../../public/images/hero/3.png";
import service4 from "../../../../public/images/hero/4.png";
import service5 from "../../../../public/images/hero/5.png";



export const Hero = (props : {
    hasWindow : boolean
}) => {
    const [animateHero, setAnimateHero] = useState("lg:opacity-0 translate-y-[100px]");
    const [animateHeroVideo, setAnimateHeroVideo] = useState("lg:w-[80%]");
    const [animateHeroHeadline, setAnimateHeroHeadline] = useState("lg:w-0 opacity-0 pointer-events-none");
    const handleOnEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        e.preventDefault();
        setAnimateHero("lg:opacity-0 lg:translate-y-[100px] lg:animate-fade-in-bottom lg:animation-delay-600");
        setAnimateHeroVideo("lg:w-[80%] lg:animate-shrink-to-half lg:animation-fill-both");
        setAnimateHeroHeadline("lg:animate-expand-to-half");
    }

    const navigate = useRouter();

    return (
        <>
            <header className={"px-44 pt-24 h-136 w-full flex items-start justify-center"}>
                <section className={`flex items-center justify-around ${animateHeroHeadline}`}>
                    <article className={"w-136 flex flex-col md:items-start md:justify-center gap-8 w-full"}>
                        <h1 className={`text-viridian-green w-full lg:text-6xl tracking-normal font-black ${animateHero} lg:animation-duration-800`}>{strings.landing.hero.headline}<br/><strong className={"text-caribbean-green"}>{strings.landing.hero.headlineRemark}</strong></h1>
                        <p className={`text-neutral-400 w-full pr-12 font-normal lg:text-xl ${animateHero} lg:animation-duration-1200`}>
                            {strings.landing.hero.subtitle}
                            <strong
                                className={"bg-gradient-to-r w-fit from-clinic-jade to-clinic-blue-chill bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-bg-size duration-300 ease-in-out lg:hover:bg-[length:100%_3px]"}>{strings.landing.hero.subtitleRemark}</strong>
                        </p>
                        <button
                            className={`mt-6 rounded-full bg-viridian-green text-xl text-white px-10 py-2 shadow-lg shadow-viridian-green/15 transition duration-500 ease-in-out scale-110 lg:hover:bg-white lg:hover:text-viridian-green focus:scale-110 focus:bg-white focus:text-viridian-green border-transparent border-2 border-solid lg:hover:border-viridian-green lg:hover:shadow-viridian-green/20 ${animateHero} lg:animation-duration-2400`}
                            onClick={() => navigate.push("/contact")}>{strings.landing.hero.cta}</button>
                    </article>
                </section>
                <section
                    className={`relative h-full flex justify-center items-center overflow-clip ${animateHeroVideo}`}>
                    {props.hasWindow &&
                        <video height={1080 * 1.5} width={1920 * 1.5} muted playsInline autoPlay className={""}
                               onEnded={handleOnEnded}>
                            <source src={"/video/ClinicannabisAnimation.mp4"} placeholder={"/images/hero/heroHash.png"} type={"video/mp4"}/>
                            Your browser does not support the video tag.
                        </video>}
                </section>
            </header>
            <section className={"h-72 flex justify-center gap-10 w-full hero-clip bg-white overflow-clip"}>
                <div className={"relative bg-[url('/images/hero/1.png')] bg-cover bg-center bg-no-repeat full w-full"}>

                </div>
                <div className={"relative bg-[url('/images/hero/2.png')] bg-cover bg-center bg-no-repeat h-full w-full"}>

                </div>
                <div className={"relative bg-[url('/images/hero/3.png')] bg-cover bg-center bg-no-repeat h-full w-full"}>

                </div>
                <div className={"relative bg-[url('/images/hero/4.png')] bg-cover bg-center bg-no-repeat h-full w-full"}>

                </div>
                <div className={"relative bg-[url('/images/hero/5.png')] bg-cover bg-center bg-no-repeat h-full w-full"}>

                </div>
            </section>
        </>
    );
}