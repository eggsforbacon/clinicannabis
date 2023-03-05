import {NextPage} from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {Hero} from "../../components/content/blog/Hero";
import {Posts} from "../../components/content/blog/Posts";
import Head from "next/head";

const Index : NextPage = () => {
    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Head>
                <title>Blog Médico</title>
            </Head>
            <Navbar selection={"blog"} />
            <Hero />
            <Posts />
            <Footer />
        </main>
    );
}

export default Index;