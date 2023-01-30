import {strings} from "../../../accessibility/strings";
import {useRouter} from "next/router";
import React from "react";
import {JournalBookmarkFill} from "react-bootstrap-icons";

export const Blog = () => {

    const buttonStyle : string = "text-viridian-green border-solid border-2 border-viridian-green rounded-full px-16 py-2 text-xl shadow-md transition duration-300 quartic-out lg:hover:bg-viridian-green lg:hover:shadow-viridian-green/20 lg:hover:border-white lg:hover:text-white";
    const navigate = useRouter();

    return (
        <article className={"w-full -mt-3 px-44 bg-viridian-green/25 min-h-[56rem]"}>
            <section className={"w-full h-224 flex items-center justify-between "}>
                <article className={"flex flex-col items-start justify-start w-144"}>
                    <h2 className={"text-white text-7xl font-black"}>{strings.landing.blog.headline}<br/><strong className={"text-viridian-green"}>{strings.landing.blog.remark}</strong></h2>
                    <p className={"text-white text-2xl"}>{strings.landing.blog.content}</p>
                </article>
                <article className={"flex flex-col border-solid border-2 border-white gap-6 bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-md items-center justify-center w-96 h-128 transition duration-1000 ease-in-out lg:hover:shadow-lg lg:hover:-translate-y-6 lg:hover:shadow-viridian-green/20"}>
                    <JournalBookmarkFill className={"fill-viridian-green h-full w-auto"} size={42} />
                    <button className={buttonStyle} onClick={() => navigate.push("/blog")}>
                        {strings.landing.blog.cta}
                    </button>
                </article>
            </section>
        </article>
    );
}