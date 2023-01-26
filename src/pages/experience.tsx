import {NextPage} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Hero} from "../components/content/experience/Hero";
import {ExperienceAssistant} from "../components/content/experience/ExperienceAssistant";
import Image from "next/image";

const Experience: NextPage = () => {
    return (
        <main>
            <Navbar selection={"experience"}/>
            <Hero/>
            <article className={"flex relative items-stretch justify-center mt-32"}>
                <ExperienceAssistant/>
            </article>
            <Footer/>
        </main>
    );
}

export default Experience;