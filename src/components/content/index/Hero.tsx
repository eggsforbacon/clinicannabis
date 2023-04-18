import {strings} from "../../../model/strings";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {useWindowDimensions} from "../../../hooks/useWindowDimensions";
import {Carousel} from "../../Carousel";
import {ServiceCard} from "../../ServiceCard";
import {SwiperCarousel} from "../../SwiperCarousel";

export const Hero = (props: {
    hasWindow: boolean
}) => {
    const [animateHero, setAnimateHero] = useState("lg:opacity-0 translate-y-[100px]");
    const [animateHeroVideo, setAnimateHeroVideo] = useState("lg:!w-[80%]");
    const [animateHeroHeadline, setAnimateHeroHeadline] = useState("lg:hidden lg:w-0 opacity-0 pointer-events-none");
    const [opacity, setOpacity] = useState("opacity-100");
    const loaded = props.hasWindow && sessionStorage.getItem("loaded");
    const [hasLoaded, setHasLoaded] = useState(loaded !== null && loaded === "true");
    const serviceImageStyle = "absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full";
    const linkStyle = "lg:text-transparent flex flex-col text-center gap-4 items-center justify-center relative z-10 w-full h-full lg:bg-transparent transition duration-300 lg:hover:text-white text-[1.75rem] leading-[1] text-white lg:focus:text-white lg:hover:bg-dark-green/70 lg:hover:cursor-pointer lg:focus:bg-black/25 bg-black/60";
    const handleOnEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        e.preventDefault();
        setAnimateHero("lg:opacity-0 lg:translate-y-[100px] lg:animate-fade-in-bottom lg:animation-delay-600");
        setAnimateHeroVideo("lg:!w-[80%] md:animate-shrink-to-top-sm lg:animate-shrink-to-half-lg xl:animate-shrink-to-half-xl lg:animation-fill-both");
        setAnimateHeroHeadline("flex md:animate-expand-to-half");
        setOpacity("opacity-0 pointer-events-none selection:bg-transparent lg:opacity-100 lg:pointer-events-auto lg:z-10");
        sessionStorage.setItem("loaded", "true");
        setHasLoaded(true);
    }

    const navigate = useRouter();
    const {width: wWidth, height: wHeight} = useWindowDimensions();
    const servicesBgs = [
        "bg-[url('/images/hero/1.webp')]",
        "bg-[url('/images/hero/2.webp')]",
        "bg-[url('/images/hero/3.webp')]",
        "bg-[url('/images/hero/4.webp')]",
    ];

    // const servicesTitles = [
    //     <>{"Cannabis"}<br/>{"Medicinal"}</>, <>{"Medicina"}<br/>{"Funcional"}</>, <>{"Sueros"}<br/>{"Terapéuticos"}</>, <>{"Sistema"}<br/>{"Súper Inductivo"}</>
    // ];

    const servicesTitles = [
        "Cannabis Medicinal", "Medicina Funcional", "Sueros Terapéuticos", <>{"Sistema"}<br/>{"Súper Inductivo"}</>
    ]

    const serviceLinks = [
        "/services#medicinal-cannabis",
        "/services#functional-medicine",
        "/services#serums",
        "/services#sis",
    ]

    const serviceCards = [
        <ServiceCard name={servicesTitles[0]} to={serviceLinks[0]} url={servicesBgs[0]} interaction={"Descubre"}
                     bgPos={"bg-[right_-34rem_top_-12rem] bg-[length:1360px_auto]"} index={0}/>,
        <ServiceCard name={servicesTitles[1]} to={serviceLinks[1]} url={servicesBgs[1]} interaction={"Descubre"}
                     bgPos={"bg-[right_-24rem_top] bg-[length:1060px_auto]"} index={1}/>,
        <ServiceCard name={servicesTitles[2]} to={serviceLinks[2]} url={servicesBgs[2]} interaction={"Descubre"}
                     bgPos={"bg-[right_-24rem_top] bg-[length:960px_auto]"} index={2}/>,
        <ServiceCard name={servicesTitles[3]} to={serviceLinks[3]} url={servicesBgs[3]} interaction={"Descubre"}
                     bgPos={"bg-[right_-24rem_top] bg-[length:900px_auto]"} index={3}/>,
    ];

    const pickServiceDisplay = () => {
        if (wWidth > 768) {
            return (
                <ul className={"z-10 h-72 flex justify-center gap-10 w-full hero-clip bg-white overflow-clip"}>
                    <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                        <Link className={linkStyle} href={"/services#medicinal-cannabis"}>{servicesTitles[0]}</Link>
                        <section
                            className={`${servicesBgs[0]} bg-[640px_auto] bg-[center_top_-4rem] ${serviceImageStyle}`}>
                        </section>
                    </li>
                    <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                        <Link className={linkStyle} href={"/services#functional-medicine"}>{servicesTitles[1]}</Link>
                        <section
                            className={`${servicesBgs[1]} bg-[600px_auto] bg-[center_top_-2rem] ${serviceImageStyle}`}>
                        </section>
                    </li>
                    <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                        <Link className={linkStyle} href={"/services#serums"}>{servicesTitles[2]}</Link>
                        <section className={`${servicesBgs[2]}  ${serviceImageStyle}`}>
                        </section>
                    </li>
                    <li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>
                        <Link className={linkStyle} href={"/services#sis"}>{servicesTitles[3]}</Link>
                        <section
                            className={`${servicesBgs[3]} bg-[640px_auto] bg-[center_top_-4rem] ${serviceImageStyle}`}>
                        </section>
                    </li>
                    {/*<li className={"relative w-full h-full overflow-clip flex items-center justify-center transition duration-75 ease-in-out lg:hover:text-white focus:text-white"}>*/}
                    {/*    <Link className={linkStyle} href={"/experience"}>Centro de Experiencia</Link>*/}
                    {/*    <section className={`bg-[url('/images/hero/5.png')] ${serviceImageStyle}`}>*/}
                    {/*    </section>*/}
                    {/*</li>*/}
                </ul>
            );
        } else {
            return (
                <section className={"w-full relative"}>
                    <SwiperCarousel items={serviceCards} delay={6000} auto pagination/>
                </section>
            )
        }
    }

    const beforePlay = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        e.preventDefault();
        if (hasLoaded) (e.target as HTMLVideoElement).autoplay = false;
    };

    return (
        <>
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
                        <button
                            className={`hidden lg:block mt-6 rounded-full bg-viridian-green text-xl text-white px-10 py-2 shadow-lg shadow-viridian-green/15 transition duration-500 ease-in-out lg:hover:bg-white lg:hover:text-viridian-green focus:scale-110 focus:bg-white focus:text-viridian-green border-transparent border-2 border-solid lg:hover:border-viridian-green lg:hover:shadow-viridian-green/20 ${animateHero} lg:animation-duration-2400`}
                            onClick={() => navigate.push("/contact")}>{strings.landing.hero.cta}</button>
                    </article>
                </section>
                <section
                    className={`${!hasLoaded ? "" : "max-lg:hidden"} relative h-full bg-white z-50 lg:z-auto flex justify-center items-center overflow-clip ${animateHeroVideo}`}>
                    {props.hasWindow &&
                        <video height={1080 * 1.8} width={1920 * 1.8} muted playsInline autoPlay controls={false}
                               className={"scale-[1.5] lg:scale-[1.75] xl:scale-[1.25]"}
                               onEnded={handleOnEnded}
                               onCanPlay={beforePlay}>
                            <source src={"/video/ClinicannabisAnimation.mp4"}
                                    type={"video/mp4"}/>
                            Your browser does not support the video tag.
                        </video>}
                    <section
                        className={"lg:hidden aspect-square absolute -top-52 -left-52 opacity-70 h-168 lg:w-0 lg:h-0 w-168"}>
                        <div
                            className={"absolute bg-white h-136 aspect-square rounded-full bg-gradient-radial from-caribbean-green via-transparent animate-rotate-blob"}/>
                        <div className={"absolute top-0 left-0 w-full h-full backdrop-blur-[200px]"}/>
                    </section>
                </section>
            </header>
            {pickServiceDisplay()}
        </>
    );
}