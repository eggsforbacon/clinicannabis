import {NextPage} from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blog : NextPage = () => {
    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Navbar selection={"blog"} />

            <Footer />
        </main>
    );
}

export default Blog;