import Image from "next/image";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import {FetchOptions, fetchURI} from "@/lib/api";
import {AttributesBlogPost, CoverAttributesPost, StrapiGetAllResponse, StrapiPost,} from "@/interfaces/interfaces";
import React, {useEffect} from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeRaw from "rehype-raw";
import {IncomingMessage} from "http";
import {getTokenFromLocalCookie, getTokenFromServerCookie, setToken} from "@/lib/auth";
import Link from "next/link";

interface IProps {
    post: StrapiPost | null,
    error?: string,
    token?: string,
}

export function slug(props: IProps) {
    const postRaw = props.post;

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (props.token) setToken({jwt: props.token}, true);
        }
    }, []);

    if (postRaw === null) {
        return (
            <p>Cargando...</p>
        );
    }
    const attributes = postRaw.attributes as unknown as AttributesBlogPost;
    const {title, subtitle, body, date, description} = attributes;
    const cover: CoverAttributesPost = attributes.cover as unknown as CoverAttributesPost;
    return (
        <main>
            <Head>
                <title>{title} | Clinicannabis</title>
                <meta name={"description"} content={description}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={""}/>
            <article className={"relative w-ful flex flex-col items-center justify-start gap-2 lg:gap-6"}>
                <header
                    className={"w-full relative md:h-168 xl:h-[44rem] md:px-16 lg:px-20 flex flex-col items-center justify-end pb-0 xl:pb-16 text-rich-black"}>
                    <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${cover.data.attributes.url}`} alt={""}
                           width={1920} height={544} priority quality={80}
                           className={"brightness-90 absolute top-[20%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[4.385] md:scale-[2.342] lg:scale-[1.6203] xl:scale-105"}/>
                    <section
                        className={"flex relative flex-col items-center justify-start gap-2 bg-white rounded-t-2xl mt-64 md:mt-0 mx-2 md:mx-0 p-4 md:p-8"}>
                        <h1 className={"text-3xl md:text-5xl xl:text-6xl text-center relative font-black"}>{title}</h1>
                        <h2 className={"text-xl md:text-2xl xl:text-3xl text-center relative font-semibold"}>{subtitle}</h2>
                        <h3 className={"text-lg md:text-xl xl:text-2xl text-center relative font-normal"}>{date}</h3>
                    </section>
                </header>
                <section
                    className={"w-full h-full relative px-4 md:px-16 lg:px-20 xl:px-64 text-justify flex flex-col items-center justify-start text-xl leading-[2] pb-28"}>
                    <ReactMarkdown className={"custom-blog bg-white max-w-[768px]"} skipHtml={false} children={body}
                                   remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}
                    />
                    <section className={"flex flex-col w-full items-center justify-start gap-4 text-center"}>
                        <p>Te puede interesar: <Link
                            className={"underline underline-offset-4 decoration-1 text-caribbean-green"}
                            href={"https://clinicannabis.com.co/servicios"}>Nuestros Servicios</Link></p>
                        <p className={"font-bold"}>Agenda tu cita 📱 <Link
                            className={"underline underline-offset-4 decoration-1 text-caribbean-green"}
                            href={"https://wa.link/e7swak"}>317 435 5876</Link></p>
                        <p className={"font-bold"}>Te invitamos a conocer mucho más de Clinicannabis navegando por su
                            página web <Link
                                className={"underline underline-offset-4 decoration-1 text-caribbean-green"}
                                href={"/"}>www.clinicannabis.com</Link></p>
                        <ul className={"list-none flex flex-row items-center justify-center gap-4"}>
                            <li>
                                <Link
                                    className={"underline underline-offset-4 decoration-1 text-caribbean-green flex flex-col items-center justify-start gap-1"}
                                    href={"https://twitter.com/clinicannabis"}>
                                    <img
                                        src={"https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"}
                                        alt={"Twitter"}/>
                                    @clinicannabis
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={"underline underline-offset-4 decoration-1 text-caribbean-green flex flex-col items-center justify-start gap-1"}
                                    href={"https://instagram.com/clinicannabis.col"}>
                                    <img
                                        src={"https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"}
                                        alt={"Instagram"}/>
                                    @clinicannabis.col
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={"underline underline-offset-4 decoration-1 text-caribbean-green flex flex-col items-center justify-start gap-1"}
                                    href={"https://facebook.com/Clinicanabis"}>
                                    <img
                                        src={"https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"}
                                        alt={"Facebook"}/>
                                    @Clinicannabis
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={"underline underline-offset-4 decoration-1 text-caribbean-green flex flex-col items-center justify-start gap-1"}
                                    href={"/"}>
                                    <img
                                        src={"https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white"}
                                        alt={"Nuestra página web"}/>
                                    clinicannabis.com.co
                                </Link>
                            </li>
                        </ul>
                    </section>
                </section>
                {/*<section className={"w-full grid lg:grid-cols-2 place-items-center py-44"}>*/}
                {/*    {prev && <RecommendedPost title={prev.title} subtitle={prev.subtitle}*/}
                {/*                              to={`/blog/${prev.id}`}/>}*/}
                {/*    {next && <RecommendedPost title={next.title} subtitle={next.subtitle}*/}
                {/*                              to={`/blog/${next.id}`}/>}*/}
                {/*</section>*/}
            </article>
            <Footer/>
        </main>
    );
}

export default slug;

export const getServerSideProps: ({req, params}: { req: IncomingMessage, params: any }) => Promise<{
    props: IProps
}> = async ({req, params}) => {
    const {slug} = params;
    let jwt =
        typeof window !== "undefined"
            ? getTokenFromLocalCookie()
            : getTokenFromServerCookie(req);
    if (!jwt) {
        const response = await fetchURI<{ jwt: string }>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
            method: 'POST',
            body: {
                identifier: process.env.NEXT_PUBLIC_STRAPI_USER,
                password: process.env.NEXT_PUBLIC_STRAPI_PASS,
            },
        });
        jwt = response.jwt;
    }
    if (typeof window !== 'undefined') {
        sessionStorage.setItem("spi_jwt", jwt);
    }
    const {
        data: blogsData,
        error
    } = await fetchURI<StrapiGetAllResponse>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts/?locale=es-CO&populate=*`, jwt ? {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    } : {} as FetchOptions);
    if (blogsData === null) {
        return {
            props: {
                post: blogsData,
                error: error?.message
            }
        }
    }

    const post = blogsData.filter(p => (p.attributes as unknown as AttributesBlogPost).slug === slug)[0]
    return {
        props: {
            post,
            token: jwt
        }
    }
}