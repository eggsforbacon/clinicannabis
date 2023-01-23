import {NextPage} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services : NextPage = () => {
    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Navbar selection={"services"} />

            <Footer />
        </main>
    );
}

export default Services;