import {useRouter} from "next/router";
import React from "react";
import {SwiperCarousel} from "../../SwiperCarousel";
import {BlogSlide} from "./BlogSlides/BlogSlide";

export const Blog = () => {

    const buttonStyle: string = "text-viridian-green border-solid border-2 border-viridian-green rounded-full px-16 py-2 text-xl shadow-md transition duration-300 quartic-out lg:hover:bg-viridian-green lg:hover:shadow-viridian-green/20 lg:hover:border-white lg:hover:text-white";
    const navigate = useRouter();

    const blogItems = [
        <BlogSlide index={"1"}
                   imageClass={"z-0 absolute brightness-[60%] lg:brightness-100 scale-[3.2] md:scale-[1.7] lg:scale-[1.8] xl:scale-[1.35] bottom-36 md:bottom-20 lg:bottom-32 right-16 lg:-right-10"}/>,
        // <BlogSlide  index={"2"} imageClass={"z-0 absolute !scale-[4] lg:!scale-100 top-10 lg:-top-20 right-36 lg:right-0"}/>,
    ];

    return (
        <article className={"w-full relative overflow-clip"}>
            <SwiperCarousel items={blogItems} delay={5000} pagination className={"overflow-clip"}/>
        </article>
    );
}