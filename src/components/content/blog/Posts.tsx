import {strings} from "../../../model/strings";
import React from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {BlogCard} from "./BlogCard";
import {posts} from "../../../model/posts";

export const Posts = () => {

    const navigate = useRouter();

    return (
        <article className={"min-h-[62rem] w-full relative"}>
            <section className={"w-full px-8 lg:px-16 xl:px-32 grid lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-10 h-full"}>
                {posts.map((post, index) => {
                    return (
                        <BlogCard title={post.title} subtitle={post.subtitle} to={"/blog/"+post.id} date={post.date}>
                            <Image src={"/images/blog/posts/1.png"} alt={""} width={16} height={16} />
                        </BlogCard>
                    );
                })}
                {/*<button onClick={() => navigate.push("/")} className={"px-16 py-2 text-2xl text-viridian-green bg-white border-solid border-2 border-viridian-green rounded-full shadow-md transition duration-500 ease-in-out hover:cursor-pointer lg:hover:bg-viridian-green focus:bg-viridian-green lg:hover:text-white focus:text-white lg:hover:-translate-y-2 focus:-translate-y-2"}>*/}
                {/*    {strings.blog.cta}*/}
                {/*</button>*/}
            </section>
        </article>
    );
}