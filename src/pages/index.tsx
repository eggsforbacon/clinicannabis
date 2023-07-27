import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {strings} from "../model/strings";
import React, {useContext, useEffect} from "react";
import {About} from "../components/content/index/About";
import {Values} from "../components/content/index/Values";
import {Experience} from "../components/content/index/Experience";
import {Invima} from "../components/content/index/Invima";
import {Services} from "../components/content/index/Services";
import {Testimonials} from "../components/content/index/Testimonials";
import {Hero} from "../components/content/index/Hero";
import GlobalContext from "../context/GlobalContext";


const Home: NextPage = () => {

    const {enableWindow} = useContext(GlobalContext);

    useEffect(() => {
        if (typeof window !== "undefined") {
            enableWindow();
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
            <Hero />
            <Services />
            <About/>
            <Values/>
            <Experience/>
            <Testimonials />
            <Invima/>
            {/*<Blog />*/}
            <Footer/>
        </main>
    )
}

export default Home
