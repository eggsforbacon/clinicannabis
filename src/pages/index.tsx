import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {strings} from "../accessibility/strings";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useRouter} from "next/router";

const Home: NextPage = () => {

    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);
    const [animateHero, setAnimateHero] = useState("opacity-0 translate-y-[100px]");
    const [animateHeroVideo, setAnimateHeroVideo] = useState("w-[80%]");
    const [animateHeroHeadline, setAnimateHeroHeadline] = useState("w-0 opacity-0 pointer-events-none");
    const handleOnEnded = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        e.preventDefault();
        setAnimateHero("opacity-0 translate-y-[100px] animate-fade-in-bottom animation-delay-600");
        setAnimateHeroVideo("w-[80%] animate-shrink-to-half animation-fill-both");
        setAnimateHeroHeadline("animate-expand-to-half");
    }
    const navigate = useRouter();

    return (
        <div className="min-h-screen">
            <Head>
                <title>Clinicannabis</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar selection={"home"}/>
            <main className="w-full min-h-screen">
                <header className={"px-44 pt-24 h-136 w-full flex items-start justify-center"}>
                    <section className={`flex items-center justify-around ${animateHeroHeadline}`}>
                        <article className={"w-136 flex flex-col md:items-start md:justify-center gap-8 w-full"}>
                            <h1 className={`text-clinic-jade lg:text-5xl font-semibold ${animateHero} animation-duration-800`}>{strings.landing.hero.headline}</h1>
                            <p className={`text-neutral-400 w-4/5 font-normal lg:text-lg ${animateHero} animation-duration-1200`}>
                                {strings.landing.hero.subtitle}
                                <strong
                                    className={"bg-gradient-to-r w-fit from-clinic-jade to-clinic-blue-chill lg:bg-[length:0%_3px] bg-no-repeat bg-left-bottom transition-bg-size duration-300 ease-in-out lg:hover:bg-[length:100%_3px]"}>{strings.landing.hero.subtitleRemark}</strong>
                            </p>
                            <button
                                className={`rounded-md bg-clinic-jade text-base text-green-50 px-16 py-3 shadow-lg shadow-clinic-jade/15 transition duration-500 ease-in-out lg:hover:-translate-y-2 lg:hover:shadow-clinic-jade/50 ${animateHero} animation-duration-2400`}
                                onClick={() => navigate.push("/contact")}>{strings.landing.hero.cta}</button>
                        </article>
                    </section>
                    <section
                        className={`relative h-full flex justify-center items-center overflow-clip ${animateHeroVideo}`}>
                        {hasWindow &&
                            <video height={1080 * 1.5} width={1920 * 1.5} muted playsInline autoPlay className={""}
                                   onEnded={handleOnEnded}>
                                <source src={"/video/ClinicannabisAnimation.mp4"} type={"video/mp4"}/>
                                Your browser does not support the video tag.
                            </video>}
                    </section>
                </header>
                <section className={"h-80 flex justify-center gap-8 w-full hero-clip overflow-hidden"}>
                    <Image src={"/images/hero/1.png"} className={"h-[288px] w-auto"} alt={""} height={480 / 2}
                           width={640 / 1.5}/>
                    <Image src={"/images/hero/2.png"} className={"h-[288px] w-auto"} alt={""} height={480 / 2}
                           width={640 / 1.5}/>
                    <Image src={"/images/hero/3.png"} className={"h-[288px] w-auto"} alt={""} height={480 / 2}
                           width={640 / 1.5}/>
                    <Image src={"/images/hero/4.png"} className={"h-[288px] w-auto"} alt={""} height={480 / 2}
                           width={640 / 1.5}/>
                    <Image src={"/images/hero/5.png"} className={"h-[288px] w-auto"} alt={""} height={480 / 2}
                           width={640 / 1.5}/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Home
