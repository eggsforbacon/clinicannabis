import {GetStaticProps, InferGetStaticPropsType} from "next";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import {Hero} from "../../components/content/blog/Hero";
import {Posts} from "../../components/content/blog/Posts";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import {fetchURI} from "../../lib/api";
import {StrapiGetAllResponse, StrapiPost} from "../../interfaces/interfaces";
import useSWR from "swr";
import {setToken} from "../../lib/auth";
import {FloatingSignupForm} from "../../components/content/blog/FloatingSignupForm";
import {ChevronLeft, ChevronRight} from "react-bootstrap-icons";

function Index({blogs, token}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [mounted, setMounted] = useState(false);
    const [pageIndex, setPageIndex] = useState(1);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setToken({jwt: token}, true);
            setMounted(true);
        }
    }, []);

    const {data} = useSWR(
        mounted ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?locale=es-CO&pagination[page]=${pageIndex}&pagination[pageSize]=6&sort=date%3Adesc&populate=*` : null,
        () => fetchURI<StrapiGetAllResponse>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?locale=es-CO&pagination[page]=${pageIndex}&pagination[pageSize]=6&sort=date%3Adesc&populate=*`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }),
        {
            fallbackData: {
                data: blogs
            },
        }
    );

    const prevPage = () => {
        setPageIndex(pageIndex - 1);
    }

    const nextPage = () => {
        setPageIndex(pageIndex + 1);
    }

    return (
        <main className="w-full min-h-screen overflow-x-clip">
            <Head>
                <title>Blog Médico</title>
                <meta name={"description"}
                      content={"Entérate de la actualidad médica, de bienestar y tratamientos basados en la medicina cannábica y funcional, entre otros temas de interés."}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={"blog"}/>
            <Hero/>
            <FloatingSignupForm/>
            <section
                className={"relative h-20 box-border px-8 lg:px-16 xl:px-32 mx-8 lg:mx-16 xl:mx-32 py-2 flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md rounded-lg"}>
                <button onClick={prevPage}
                        className={"rounded-xl box-border p-1 aspect-square h-8 flex items-center justify-center bg-caribbean-green/20 disabled:bg-neutral-100/60 backdrop-blur-md disabled:cursor-not-allowed [&>*]:fill-white [&>*]:disabled:fill-neutral-500"}
                        disabled={pageIndex === 1}><ChevronLeft size={20}/></button>
                <p className={"text-center text-lg text-neutral-300"}>Página {pageIndex} de {data.meta?.pagination.pageCount}</p>
                <button onClick={nextPage}
                        className={"rounded-xl box-border p-1 aspect-square h-8 flex items-center justify-center bg-caribbean-green/20 disabled:bg-neutral-100/60 backdrop-blur-md disabled:cursor-not-allowed [&>*]:fill-white [&>*]:disabled:fill-neutral-500"}
                        disabled={pageIndex === (data && data.meta?.pagination.pageCount)}><ChevronRight size={20}/>
                </button>
            </section>
            <Posts blogPosts={data.data !== null ? data.data : undefined}/>
            <Footer/>
        </main>
    );
}

export default Index;

export const getStaticProps: GetStaticProps<{ blogs: StrapiPost[], token: string }> = async () => {
    const response = await fetchURI<{ jwt: string }>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
        method: 'POST',
        body: {
            identifier: process.env.NEXT_PUBLIC_STRAPI_USER,
            password: process.env.NEXT_PUBLIC_STRAPI_PASS,
        },
    });
    const {jwt: token} = response;
    if (typeof window !== 'undefined') {
        sessionStorage.setItem("spi_jwt", token);
    }
    const {data: blogResponse} = await fetchURI<StrapiGetAllResponse>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?locale=es-CO&pagination[page]=1&pagination[pageSize]=6&sort=date%3Adesc&populate=*`, {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${token}`
        }
    });
    return {
        props: {
            blogs: blogResponse !== null ? blogResponse : [],
            token
        }
    }
}