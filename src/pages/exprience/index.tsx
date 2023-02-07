import {NextPage} from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {Hero} from "../../components/content/experience/Hero";
import {ExperienceAssistant} from "../../components/content/experience/ExperienceAssistant";
import Image from "next/image";
import {strings} from "../../model/strings";
import Head from "next/head";
import React from "react";
import {Areas} from "../../components/content/experience/Areas";

const Index: NextPage = () => {
    return (
        <main>
            <Head>
                <title>Centro de Experiencia</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name={"description"}
                      content={`Pendiente`}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={"experience"}/>
            <Hero/>
            <ExperienceAssistant/>
            <Areas />
            <Footer/>
        </main>
    );
}

export default Index;