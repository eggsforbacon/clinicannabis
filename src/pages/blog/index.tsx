import {GetStaticProps, InferGetStaticPropsType} from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {Hero} from "../../components/content/blog/Hero";
import {Posts} from "../../components/content/blog/Posts";
import Head from "next/head";
import React from "react";
import {fetchURI} from "../../lib/api";
import {BlogPost, StrapiGetAllResponse} from "../../interfaces/interfaces";

function Index ({blogs} : InferGetStaticPropsType<typeof getStaticProps>) {
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
            <Posts blogPosts={blogs} />
            <Footer />
        </main>
    );
}

export default Index;

export const getStaticProps: GetStaticProps<{ blogs: BlogPost[] }> = async (
    context,
) => {
    const response = await fetchURI<{ jwt: string }>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
        method: 'POST',
        body: {
            identifier: process.env.NEXT_PUBLIC_STRAPI_USER,
            password: process.env.NEXT_PUBLIC_STRAPI_PASS,
        },
    });
    const { jwt: token } = response;

    const {data: blogResponse} = await fetchURI<StrapiGetAllResponse>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*`, {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${token}`
        }
    });
    console.log(blogResponse);
    return {
        props: {
            blogs: blogResponse
        }
    }
}