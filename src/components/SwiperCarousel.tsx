import React, {CSSProperties, ReactNode, useRef, useState} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

export const SwiperCarousel = (
    props : {
        items : ReactNode[],
        delay : number
    }
) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay : props.delay,
                    disableOnInteraction : false,
                    pauseOnMouseEnter : true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                style={{
                    "--swiper-pagination-color" : "#009490",
                } as CSSProperties}
                className="mySwiper"

            >
                {props.items.map((slide, index) =>
                    <SwiperSlide key={`page${index}`} className={"w-full h-full"}>
                        {slide}
                    </SwiperSlide>
                    )}
            </Swiper>
        </>
    );
}
