import {useRouter} from "next/router";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {fetchURI} from "../../lib/api";
import {AttributesBlogPost, BlogPost, CoverAttributesBlogPost, StrapiGetAllResponse} from "../../interfaces/interfaces";
import React, {useEffect, useState} from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";

export const slug = () => {
    const [posts, setPost] = useState<BlogPost[]>([]);
    const router = useRouter();
    const {slug} = router.query;

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const token = sessionStorage.getItem("spi_jwt");
                if (token === null) {
                    const response = await fetchURI<{
                        jwt: string
                    }>(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local`, {
                        method: 'POST',
                        body: {
                            identifier: process.env.NEXT_PUBLIC_STRAPI_USER,
                            password: process.env.NEXT_PUBLIC_STRAPI_PASS,
                        },
                    });
                    sessionStorage.setItem("spi_jwt", response.jwt);
                }
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*`,
                    {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch blog post.");
                }

                const data = await response.json();
                console.log(data)
                const posts = data as unknown as StrapiGetAllResponse;
                setPost(posts.data as BlogPost[]);
            } catch (error) {
                console.error(error);
            }
        };

        if (slug) {
            fetchBlogPost();
        }
    }, [slug]);

    if (!posts.length) {
        // router.reload();
        return <div>Cargando...</div>;
    }

    const post = posts.filter(p => (p.attributes as unknown as AttributesBlogPost).slug === slug)[0]
    const pIndex = post.id;
    const next = pIndex + 1 < posts.length ? posts[pIndex + 1] : undefined;
    const prev = pIndex - 1 >= 0 ? posts[pIndex - 1] : undefined;
    const attributes = post.attributes as unknown as AttributesBlogPost
    const {title, subtitle, body, date, description} = attributes

    const cover: CoverAttributesBlogPost = (attributes.cover as unknown as CoverAttributesBlogPost);
    return (
        <main>
            <Head>
                <title>{title} | Clinicannabis</title>
                <meta name={"description"} content={description}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
            </Head>
            <Navbar selection={"none"}/>
            <article className={"relative pt-24 w-full lg:px-44 flex flex-col items-center justify-start gap-16"}>
                <section
                    className={"absolute h-120 w-full flex flex-col gap-2 items-center justify-center text-white"}>
                    <span
                        className={"absolute -top-96 left-0 h-full w-full bg-midnight-green"}/>
                    <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${cover.data.attributes.url}`} alt={""}
                           width={1920} height={640}
                           className={"absolute top-0 left-0"}/>
                    <span className={"absolute -top-3 left-0 h-full w-full bg-midnight-green/60"}/>
                    <h1 className={"text-6xl relative font-black"}>{title}</h1>
                    <h2 className={"text-3xl relative font-semibold"}>{subtitle}</h2>
                    <h3 className={"text-2xl relative font-normal"}>{date}</h3>
                </section>
                <section
                    className={"w-full h-full mt-96 relative px-4 lg:px-[26rem] text-justify flex flex-col items-center justify-start text-xl leading-[2] py-28"}>
                    <ReactMarkdown transformImageUri={input => `${process.env.NEXT_PUBLIC_STRAPI_URL}${input}`}>
                        {body}
                    </ReactMarkdown>
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

