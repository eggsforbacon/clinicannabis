import {strings} from "../../../accessibility/strings";
import {useRouter} from "next/router";
import React from "react";
import {JournalBookmarkFill} from "react-bootstrap-icons";
import Image from "next/image";

export const Blog = () => {

    const buttonStyle: string = "text-viridian-green border-solid border-2 border-viridian-green rounded-full px-16 py-2 text-xl shadow-md transition duration-300 quartic-out lg:hover:bg-viridian-green lg:hover:shadow-viridian-green/20 lg:hover:border-white lg:hover:text-white";
    const navigate = useRouter();

    return (
        <article className={"w-full relative overflow-clip px-44 bg-viridian-green/25 min-h-[56rem]"}>
            <Image src={"/images/landing/blogBackground.png"} className={"z-0 top-0 left-0 absolute pointer-events-none select-none"}
                   alt={""} width={1920} height={1075}/>
            <section className={"z-10 relative w-full min-h-[56rem] flex items-start pt-44 justify-between "}>
                <article className={"flex flex-col items-start justify-start gap-6 w-144"}>
                    <h2 className={"text-viridian-green text-8xl font-black"}>{strings.landing.blog.headline}<br/><strong
                        className={""}>{strings.landing.blog.remark}</strong></h2>
                    <p className={"text-viridian-green text-2xl"}>{strings.landing.blog.content}</p>
                </article>
                <button onClick={() => navigate.push("/blog")}
                        className={"flex flex-col border-solid border-4 border-viridian-green bg-white/10 backdrop-blur-md py-4 px-10 rounded-[4rem] shadow-md items-center justify-center transition duration-1000 ease-in-out lg:hover:shadow-lg lg:hover:-translate-y-6 lg:hover:shadow-viridian-green/20"}>
                    <Image src={"/images/landing/blogButton.png"} alt={""} className={"p-4"} width={810*.5} height={869*.5} />
                    <p className={"text-4xl text-viridian-green font-bold"}>
                        {strings.landing.blog.cta}
                    </p>
                </button>
            </section>
        </article>
    );
}