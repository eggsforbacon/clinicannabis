import Navbar from "../components/ui/Navbar";
import {Hero} from "../components/content/index/Hero";
import {Services} from "../components/content/index/Services";
import {WhatsappButton} from "../components/ui/WhatsappButton";
import React from "react";
import {GlobalProvider} from "../context/GlobalProvider";
import {About} from "../components/content/index/About";
import {Values} from "../components/content/index/Values";
import {Experience} from "../components/content/index/Experience";
import {Testimonials} from "../components/content/index/Testimonials";
import {Invima} from "../components/content/index/Invima";
import Footer from "../components/ui/Footer";

export default function Home() {
    return (
        <GlobalProvider>
            <WhatsappButton/>
            <main>
                <Navbar selection={"home"}/>
                <Hero/>
                {/*<Services/>*/}
                <li className={"w-full h-44 px-16 flex items-center justify-start gap-2"}>
                   <ul className={"w-full text-center debug h-full"}></ul>
                   <ul className={"w-full text-center debug h-full"}></ul>
                   <ul className={"w-full text-center debug h-full"}></ul>
                   <ul className={"w-full text-center debug h-full"}></ul>
                   <ul className={"w-full text-center debug h-full"}></ul>
                   <ul className={"w-full text-center debug h-full"}></ul>
                   <ul className={"w-full text-center debug h-full"}></ul>
                   <ul className={"w-full text-center debug h-full"}></ul>
                </li>
                <About />
                <Values />
                <Experience />
                <Testimonials />
                <Invima/>
                <Footer/>
            </main>
        </GlobalProvider>
    );
}