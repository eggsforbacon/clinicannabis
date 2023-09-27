import {Metadata} from "next";
import Navbar from "../../components/ui/Navbar";
import {MedicalCannabis} from "../../components/content/services/MedicalCannabis";
import {SIS} from "../../components/content/services/SIS";
import {PainClinic} from "../../components/content/services/PainClinic";
import {Serums} from "../../components/content/services/Serums";
import {FunctionalMedicine} from "../../components/content/services/FunctionalMedicine";
import {Experience} from "../../components/content/services/Experience";
import Footer from "../../components/ui/Footer";
import React from "react";
export const metadata : Metadata = {
    title: 'Nuestros Servicios',
    description: 'Trabajamos para cumplir con los estándares de calidad que garanticen que nuestros tratamientos y productos te brinden una mejor calidad de vida.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        }
    ],
    viewport: 'width=device-width, initial-scale=1',
}

export default function Services() {


    return (
        <main className={"w-full min-h-screen overflow-x-clip"}>
            <Navbar selection={"services"} />
            <MedicalCannabis />
            <SIS />
            <PainClinic />
            <Serums />
            <FunctionalMedicine />
            <Experience />
            <Footer />
        </main>
    );
}