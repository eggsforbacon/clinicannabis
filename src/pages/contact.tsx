import {NextPage} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact : NextPage = () => {
    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Navbar selection={"contact"} />

            <Footer />
        </main>
    );
}

export default Contact;