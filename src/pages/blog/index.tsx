import {NextPage} from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {Hero} from "../../components/content/blog/Hero";
import {Posts} from "../../components/content/blog/Posts";
import Head from "next/head";
import React from "react";

const Index : NextPage = () => {
    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Head>
                <title>Blog Médico</title>
                <meta name={"description"}
                      content={"Entérate de la actualidad médica, de bienestar y tratamientos basados en la medicina cannábica y funcional, entre otros temas de interés."}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={"blog"} />
            <Hero />
            <Posts />
            <Footer />
        </main>
    );
}

export default Index;