import React from "react";
import Image from "next/image";
import {BlogCard} from "./BlogCard";
import {AttributesBlogPost, BlogPost, CoverAttributesBlogPost} from "../../../interfaces/interfaces";

interface IProps {
    blogPosts: BlogPost[] | undefined
}

export const Posts = (props: IProps) => {

    return (
        <article className={"min-h-[62rem] w-full relative pb-16"}>
            <span
                className={"absolute z-0 w-full h-104 md:h-144 xl:h-224 pointer-events-none select-none bg-gradient-to-t from-white via-white top-0"}/>
            <section
                className={"relative w-full pt-8 px-8 lg:px-16 xl:px-32 grid md:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 h-full"}>
                {props.blogPosts && props.blogPosts.map((post) => {
                    const attributes: AttributesBlogPost = post.attributes as unknown as AttributesBlogPost;
                    const thumbnail: CoverAttributesBlogPost = (attributes.thumbnail as unknown as CoverAttributesBlogPost);
                    return (
                        <BlogCard key={attributes.slug} {...attributes} >
                            <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${thumbnail.data.attributes.url}`}
                                   alt={""}
                                   width={thumbnail.data.attributes.width} height={thumbnail.data.attributes.height}
                                   className={"top-0 left-0 z-0 transition duration-700 ease-in-out hover:scale-[1.1]"}/>
                        </BlogCard>
                    );
                })}
            </section>
        </article>
    );
}