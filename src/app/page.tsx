import Navbar from "../components/ui/Navbar";
import {Hero} from "../components/content/index/Hero";
import {Services} from "../components/content/index/Services";
import {WhatsappButton} from "../components/WhatsappButton";
import React from "react";
import {GlobalProvider} from "../context/GlobalProvider";
import {About} from "../components/content/index/About";
import {Values} from "../components/content/index/Values";
import {Experience} from "../components/content/index/Experience";

export default function Home() {
    return (
        <GlobalProvider>
            <WhatsappButton/>
            <main>
                <Navbar selection={"home"}/>
                <Hero/>
                <Services/>
                <About />
                <Values />
                <Experience />
            </main>
        </GlobalProvider>
    );
}