import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {strings} from "../model/strings";
import React, {useContext, useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";
import {Hero} from "../components/content/index/Hero";
import {About} from "../components/content/index/About";
import {Values} from "../components/content/index/Values";
import {Experience} from "../components/content/index/Experience";
import {Blog} from "../components/content/index/Blog";
import NavbarContext from "../context/Navbar/NavbarContext";
import {Invima} from "../components/content/index/Invima";
import {PopUP} from "../components/PopUP";
import {Services} from "../components/content/index/Services";
import {HeroCarousel} from "../components/content/index/HeroSlides/HeroCarousel";
import {ClinicIntro} from "../components/content/index/HeroSlides/ClinicIntro";
import {IberoamericanoBanner} from "../components/content/index/HeroSlides/IberoamericanoBanner";


const Home: NextPage = () => {

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

    const {setLogoShown, logoShown} = useContext(NavbarContext);
    const navbarLogoRef = useRef(null);
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
        setLogoShown(false);
        console.log(hasWindow);
    }, []);

    return (
        <main>
            <Head>
                <title>Clinicannabis</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name={"description"}
                      content={`${strings.landing.hero.headline}. ${strings.landing.hero.subtitle}${strings.landing.hero.subtitleRemark}`}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={"home"}/>
            {/*<ClinicIntro hasWindow={hasWindow}/>*/}
            <IberoamericanoBanner /> {/* Temporal fix */}
            <Services />
            <About/>
            <Values/>
            <Experience/>
            <Invima/>
            <Blog />
            <Footer/>
        </main>
    )
}

export default Home
