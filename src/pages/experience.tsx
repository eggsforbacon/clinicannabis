import {NextPage} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Experience : NextPage = () => {
    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Navbar selection={"experience"} />

            <Footer />
        </main>
    );
}

export default Experience;