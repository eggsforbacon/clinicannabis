"use client";

import React, {CSSProperties, useContext, useEffect, useState} from "react";
import {ClinicIntro} from "./HeroSlides/ClinicIntro";
import {Swiper as SwiperComponent, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination, Swiper as SwiperClass} from "swiper";
import {BlogSlide} from "./HeroSlides/BlogSlide";
import GlobalContext from "../../../context/GlobalContext";

export const Hero = () => {

    const {enableWindow} = useContext(GlobalContext);

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            enableWindow();
        }
    }, []);

    const slides: JSX.Element[] = [
        <ClinicIntro/>,
        <BlogSlide/>,
    ];

    const colors = ["#009490", "#FAFAFA", "#00B451"]

    const handleChange = (s: SwiperClass) => {
        setActiveIndex(s.realIndex);
    };

    return (
        <header className={"w-full h-192 sm:h-208 md:h-224 lg:h-[50rem] xl:h-[51.5rem] 2xl:h-[51.75rem] relative"}>
            <SwiperComponent
                onSlideChange={handleChange}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                navigation={true}
                pagination={{
                    horizontalClass: "c-swiper-horizontal",
                    clickable: true,
                    clickableClass: "swiper-pagination",
                }}
                modules={[Navigation, Pagination, Autoplay]}
                style={{
                    "--swiper-pagination-color": colors[activeIndex],
                    "--swiper-navigation-size": "2rem",
                    "--swiper-navigation-top-offset": "50%",
                    "--swiper-navigation-sides-offset": "1rem",
                    "--swiper-navigation-color": colors[activeIndex],
                } as CSSProperties}
                className="max-w-[1920px] w-screen h-192 sm:h-208 md:h-256 lg:h-224"

            >
                {slides.map((slide, index) =>
                    <SwiperSlide key={`page${index}`}>
                        {slide}
                    </SwiperSlide>
                )}
            </SwiperComponent>
        </header>
    );
}