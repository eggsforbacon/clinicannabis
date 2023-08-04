import Navbar from "../components/ui/Navbar";
import {Hero} from "../components/content/index/Hero";
import {Services} from "../components/content/index/Services";
import {WhatsappButton} from "../components/WhatsappButton";
import React from "react";
import {GlobalProvider} from "../context/GlobalProvider";

export default function Home() {
    return (
        <GlobalProvider>
            <WhatsappButton/>
            <main>
                <Navbar selection={"home"}/>
                <Hero/>
                <Services/>
            </main>
        </GlobalProvider>
    );
}