import type {NextPage} from 'next'
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {strings} from "../accessibility/strings";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import {Hero} from "../components/content/index/Hero";

const Home: NextPage = () => {

    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);

    const navigate = useRouter();

    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Head>
                <title>Clinicannabis</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name={"description"}
                      content={`${strings.landing.hero.headline}. ${strings.landing.hero.subtitle}${strings.landing.hero.subtitleRemark}`}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={"home"}/>
            <Hero hasWindow={hasWindow}/>
            <section className={"h-80 flex justify-center gap-8 w-full hero-clip overflow-clip"}>
                <Image src={"/images/hero/1.png"} className={"h-[288px] w-auto"} alt={""} height={480 / 2}
                       width={640 / 1.5} priority/>
                <Image src={"/images/hero/2.png"} className={"h-[288px] w-auto"} alt={""} height={480 / 2}
                       width={640 / 1.5} priority/>
                <Image src={"/images/hero/3.png"} className={"h-[288px] w-auto"} alt={""} height={480 / 2}
                       width={640 / 1.5} priority/>
                <Image src={"/images/hero/4.png"} className={"h-[288px] w-auto"} alt={""} height={480 / 2}
                       width={640 / 1.5} priority/>
                <Image src={"/images/hero/5.png"} className={"h-[288px] w-auto"} alt={""} height={480 / 2}
                       width={640 / 1.5} priority/>
            </section>
            <Footer/>
        </main>
    )
}

export default Home
