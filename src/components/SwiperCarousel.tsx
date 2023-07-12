import React, {CSSProperties, ReactNode} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay, Pagination} from "swiper";

export const SwiperCarousel = (
    props : {
        items : ReactNode[],
        delay : number,
        className? : string,
        auto? : boolean,
        pagination? : boolean,
        navigation? : boolean,
        loop? : boolean,
    }
) => {
    const modules = [];
    if (props.auto) modules.push(Autoplay);
    if (props.pagination) modules.push(Pagination);

    return (
        <Swiper
            slidesPerView={1}
            loop={props.loop ?? true}
            autoplay={{
                delay : props.delay,
                disableOnInteraction : false,
                pauseOnMouseEnter : true,
            }}
            pagination={{
                clickable: true,
                clickableClass: "swiper-pagination"
            }}
            modules={modules}
            style={{
                "--swiper-pagination-color" : "#009490",
            } as CSSProperties}
            className="mySwiper"

        >
            {props.items.map((slide, index) =>
                <SwiperSlide key={`page${index}`} className={`w-screen h-full ${props.className ?? ""}`}>
                    {slide}
                </SwiperSlide>
                )}
        </Swiper>
    );
}
