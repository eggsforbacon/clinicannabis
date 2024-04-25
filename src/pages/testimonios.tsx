import {GetStaticProps, InferGetStaticPropsType} from "next";
import Navbar from "../components/ui/Navbar";
import React, {useEffect, useState} from "react";
import Head from "next/head";
import Footer from "../components/ui/Footer";
import {TestimonialSlide} from "@/components/content/testimonials/TestimonialSlide";
import Image from "next/image";
import {AttributesTestimonialPost, StrapiGetAllResponse, StrapiPost} from "@/interfaces/interfaces";
import {fetchURI} from "@/lib/api";
import {setToken} from "@/lib/auth";
import useSWR from "swr";
import {TestimonialCarousel} from "@/components/content/testimonials/TestimonialCarousel";
import {strings} from "@/model/strings";


function Testimonios ({testimonials, token} : InferGetStaticPropsType<typeof getStaticProps>) {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (typeof  window !== "undefined") {
            setToken({jwt: token}, true);
            setMounted(true);
        }
    }, []);

    const { data } = useSWR(
        mounted ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonials?locale=es-CO&sort=date%3Adesc&populate=*` : null,
        () => fetchURI<StrapiGetAllResponse>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonials?locale=es-CO&sort=id%3Adesc&populate=*`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
            }
        }),
        {
            fallbackData: {
                data: testimonials
            },
        }
    );

    return (
        <main>
            <Head>
                <title>Testimonios de pacientes</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name={"description"}
                      content={""}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={""}/>
            <article className={"relative flex flex-col pt-32 lg:pt-52 items-center justify-start lg:gap-6 xl:gap-0 overflow-x-clip"}>
                <Image src={"/images/testimonios/background.svg"} alt={""} height={1920} width={1920}
                       className={"absolute top-56 xl:top-28 left-0 select-none z-0 scale-[7] lg:scale-[1.7] xl:scale-[1.3]"}/>
                <Image src={"/images/testimonios/leaf.svg"} alt={""} height={1920} width={1920}
                       className={"absolute bottom-0 left-0 select-none z-0"}/>
                <div className={"relative flex flex-col items-stretch justify-start gap-6"}>
                    <h2 className={"text-midnight-green font-black text-6xl lg:text-8xl text-center w-full"}>{strings.testimonials.title}</h2>
                    <p className={"text-lg lg:text-2xl text-neutral-700 text-center box-border px-6 lg:px-0 lg:w-208"}>{strings.testimonials.copy}</p>
                </div>
                <section className={"relative flex flex-col items-center justify-start gap-4 lg:gap-0 lg:justify-start w-screen border-box pt-16 pb-40"}>
                    <TestimonialCarousel>
                        {data.data!.map((t, i) => {
                            const attributes = t.attributes as unknown as AttributesTestimonialPost;
                            return <TestimonialSlide key={`testimonial${i}`} {...attributes}/>
                        })}
                    </TestimonialCarousel>
                </section>
            </article>
            <Footer/>
        </main>
    );
}

export default Testimonios

export const getStaticProps: GetStaticProps<{ testimonials: StrapiPost[], token : string }> = async () => {
    const response = await fetchURI<{ jwt: string }>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
        method: 'POST',
        body: {
            identifier: process.env.NEXT_PUBLIC_STRAPI_USER,
            password: process.env.NEXT_PUBLIC_STRAPI_PASS,
        },
    });
    const { jwt: token } = response;
    if (typeof window !== 'undefined') {
        sessionStorage.setItem("spi_jwt", token);
    }
    const {data: testimonialResponse} = await fetchURI<StrapiGetAllResponse>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/testimonials?locale=es-CO&sort=date%3Adesc&populate=*`, {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
        }
    });
    return {
        props: {
            testimonials: testimonialResponse !== null ? testimonialResponse : [],
            token
        }
    }
}