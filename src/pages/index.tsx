import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from "../components/ui//Navbar";
import Footer from "../components/Footer";
import {strings} from "../model/strings";
import React, {useEffect, useState} from "react";
import {About} from "../components/content/index/About";
import {Values} from "../components/content/index/Values";
import {Experience} from "../components/content/index/Experience";
import {Blog} from "../components/content/index/Blog";
import {Invima} from "../components/content/index/Invima";
import {Services} from "../components/content/index/Services";
import {ClinicIntro} from "../components/content/index/HeroSlides/ClinicIntro";
import {Testimonials} from "../components/content/index/Testimonials";


const Home: NextPage = () => {
    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
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
            <ClinicIntro hasWindow={hasWindow}/>
            {/*<IberoamericanoBanner /> /!* Temporal fix *!/*/}
            <Services />
            <About/>
            <Values/>
            <Experience/>
            <Testimonials />
            <Invima/>
            <Blog />
            <Footer/>
        </main>
    )
}

export default Home
