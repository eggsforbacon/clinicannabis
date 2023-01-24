import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {strings} from "../accessibility/strings";
import React, {useEffect, useState} from "react";
import Image from "next/image";

import {useRouter} from "next/router";
import {Hero} from "../components/content/index/Hero";
import {OurHistory} from "../components/content/index/OurHistory";
import {Humanizing} from "../components/content/index/Humanizing";
import {Numbers} from "../components/content/index/Numbers";

const Home: NextPage = () => {

    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    const navigate = useRouter();

    return (
        <main className="max-w-[1920px] w-full min-h-screen overflow-x-clip bg-white">
            <Head>
                <title>Clinicannabis</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name={"description"}
                      content={`${strings.landing.hero.headline}. ${strings.landing.hero.subtitle}${strings.landing.hero.subtitleRemark}`}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={"home"}/>
            <Hero hasWindow={hasWindow}/>
            <OurHistory />
            <Humanizing />
            <Numbers />
            <Footer/>
        </main>
    )
}

export default Home
