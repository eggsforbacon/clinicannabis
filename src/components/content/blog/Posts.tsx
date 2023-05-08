import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {BlogCard} from "./BlogCard";
import {AttributesBlogPost, BlogPost, CoverAttributesBlogPost} from "../../../interfaces/interfaces";

interface IProps {
    blogPosts : BlogPost[]
}

export const Posts = (props : IProps) => {

    return (
        <article className={"min-h-[62rem] w-full relative"}>
            <section className={"w-full px-8 lg:px-16 xl:px-32 grid lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 h-full"}>
                {props.blogPosts.map((post) => {
                    const attributes : AttributesBlogPost = post.attributes as unknown as AttributesBlogPost;
                    return (
                        <BlogCard key={attributes.slug} {...attributes}>
                            <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${(attributes.cover as unknown as CoverAttributesBlogPost).data.attributes.url}`} alt={""} width={16} height={16} />
                        </BlogCard>
                    );
                })}
            </section>
        </article>
    );
}