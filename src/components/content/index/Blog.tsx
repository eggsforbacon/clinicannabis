import {strings} from "../../../model/strings";
import {useRouter} from "next/router";
import React from "react";
import {JournalBookmarkFill} from "react-bootstrap-icons";
import Image from "next/image";
import {SwiperCarousel} from "../../SwiperCarousel";
import {Newsletter} from "./BlogSlides/Newsletter";

export const Blog = () => {

    const buttonStyle: string = "text-viridian-green border-solid border-2 border-viridian-green rounded-full px-16 py-2 text-xl shadow-md transition duration-300 quartic-out lg:hover:bg-viridian-green lg:hover:shadow-viridian-green/20 lg:hover:border-white lg:hover:text-white";
    const navigate = useRouter();

    const blogItems = [
        <Newsletter />,
        <Newsletter />,
        <Newsletter />,
    ];

    return (
        <article className={"w-full relative overflow-clip min-h-[56rem]"}>
            <SwiperCarousel items={blogItems} delay={5000} pagination className={"min-h-[56rem] overflow-clip"}/>
        </article>
    );
}