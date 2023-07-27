import React, {CSSProperties} from "react";
import {ClinicIntro} from "./HeroSlides/ClinicIntro";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper";
import {BlogSlide} from "./HeroSlides/BlogSlide";

export const Hero = () => {
    const slides: JSX.Element[] = [
        <ClinicIntro />,
        <BlogSlide />,
    ];

    return (
        <header className={"w-full h-192 sm:h-208 md:h-224 relative"}>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay : 8000,
                    disableOnInteraction : false,
                    pauseOnMouseEnter : true,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                    clickableClass: "swiper-pagination"
                }}
                modules={[Navigation, Pagination, Autoplay]}
                style={{
                    "--swiper-pagination-color" : "#009490",
                    "--swiper-navigation-size": "2rem",
                    "--swiper-navigation-top-offset": "50%",
                    "--swiper-navigation-sides-offset": "2rem",
                    "--swiper-navigation-color": "#009490",
                } as CSSProperties}
                className="w-screen h-192 sm:h-208 md:h-256 lg:h-224"

            >
                {slides.map((slide, index) =>
                    <SwiperSlide key={`page${index}`}>
                        {slide}
                    </SwiperSlide>
                )}
            </Swiper>
        </header>
    );
}