import {NextPage} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {MedicalCannabis} from "../components/content/services/MedicalCannabis";
import {SIS} from "../components/content/services/SIS";
import {FunctionalMedicine} from "../components/content/services/FunctionalMedicine";
import {Serums} from "../components/content/services/Serums";
import {Experience} from "../components/content/services/Experience";

const Services : NextPage = () => {
    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Navbar selection={"services"} />
            <MedicalCannabis />
            <SIS />
            <FunctionalMedicine />
            <Serums />
            <Experience />
            <Footer />
        </main>
    );
}

export default Services;