import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {strings} from "../model/strings";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Hero} from "../components/content/index/Hero";
import {About} from "../components/content/index/About";
import {Values} from "../components/content/index/Values";
import {Numbers} from "../components/content/index/Numbers";
import {Experience} from "../components/content/index/Experience";
import {Blog} from "../components/content/index/Blog";


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

    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    const navigate = useRouter();

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
            <Hero hasWindow={hasWindow}/>
            <About />
            <Values />
            <Experience />
            {/*<Numbers />*/}
            {/*<Blog />*/}
            <Footer/>
        </main>
    )
}

export default Home
