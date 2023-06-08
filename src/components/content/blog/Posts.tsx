import React from "react";
import Image from "next/image";
import {BlogCard} from "./BlogCard";
import {AttributesBlogPost, BlogPost, CoverAttributesBlogPost} from "../../../interfaces/interfaces";

interface IProps {
    blogPosts: BlogPost[] | undefined
}

export const Posts = (props: IProps) => {

    return (
        <article className={"min-h-[62rem] w-full relative"}>
            <section
                className={"w-full px-8 lg:px-16 xl:px-32 grid lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 h-full"}>
                {props.blogPosts && props.blogPosts.map((post) => {
                    const attributes: AttributesBlogPost = post.attributes as unknown as AttributesBlogPost;
                    const thumbnail: CoverAttributesBlogPost = (attributes.thumbnail as unknown as CoverAttributesBlogPost);
                    return (
                        <BlogCard key={attributes.slug} {...attributes} >
                            <Image src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${thumbnail.data.attributes.url}`} alt={""}
                                   width={thumbnail.data.attributes.width} height={thumbnail.data.attributes.height} className={"scale-125"}/>
                        </BlogCard>
                    );
                })}
            </section>
        </article>
    );
}