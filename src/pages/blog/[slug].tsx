import {useRouter} from "next/router";
import Image from "next/image";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {fetchURI} from "../../lib/api";
import {AttributesBlogPost, BlogPost, CoverAttributesBlogPost, StrapiGetAllResponse} from "../../interfaces/interfaces";
import React, {useEffect, useState} from "react";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import rehypeRaw from "rehype-raw";


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
            <article className={"relative w-ful flex flex-col items-center justify-start gap-2 lg:gap-6"}>
                <header
                    className={"w-full relative md:h-168 xl:h-[44rem] md:px-16 lg:px-20 flex flex-col items-center justify-end pb-0 xl:pb-16 text-rich-black"}>
                    <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${cover.data.attributes.url}`} alt={""}
                           width={1920} height={544}
                           className={"brightness-90 absolute top-[20%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[4.385] md:scale-[2.342] lg:scale-[1.6203] xl:scale-105"}/>
                    <section className={"flex relative flex-col items-center justify-start gap-2 bg-white rounded-t-2xl mt-64 md:mt-0 mx-2 md:mx-0 p-4 md:p-8"}>
                        <h1 className={"text-3xl md:text-5xl xl:text-6xl text-center relative font-black"}>{title}</h1>
                        <h2 className={"text-xl md:text-2xl xl:text-3xl text-center relative font-semibold"}>{subtitle}</h2>
                        <h3 className={"text-lg md:text-xl xl:text-2xl text-center relative font-normal"}>{date}</h3>
                    </section>
                </header>
                <section
                    className={"w-full h-full relative px-4 md:px-16 lg:px-20 xl:px-64 text-justify flex flex-col items-center justify-start text-xl leading-[2] pb-28"}>
                    <ReactMarkdown className={"custom-blog bg-white max-w-[768px]"} skipHtml={false} children={body}
                                   remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}
                                   transformImageUri={input => `${process.env.NEXT_PUBLIC_STRAPI_URL}${input}`}/>
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

