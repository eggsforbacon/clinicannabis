import {Carousel} from "../../Carousel";
import {useEffect, useState} from "react";
import {CarouselSlide} from "./CarouselSlide";
import {CoffeeShop} from "./CoffeeShop";
import {Boutique} from "./Boutique";
import {OriginsHall} from "./OriginsHall";
import {strings} from "../../../accessibility/strings";

export const Areas = () => {

    const [current, setCurrent] = useState(0);

    const navItemStyle = "text-2xl transition duration-1000 ease-in-out font-semibold";

    useEffect((() => {
        const carouselInterval = setInterval(() => {
            setCurrent((current) => current === 3 ? 0 : current + 1);
        }, 4000);
        return () => clearInterval(carouselInterval);
    }), [current]);

    const carouselItems = [
        <CarouselSlide src={"/images/experience/carousel/0.jpg"} alt={""} headline={strings.experience.carousel["1"].headline} content={strings.experience.carousel["1"].content} interaction={strings.experience.carousel["1"].interaction} to={"/experience/pharmacy"} />,
        <CarouselSlide src={"/images/experience/carousel/1.jpg"} alt={""} headline={strings.experience.carousel["2"].headline} content={strings.experience.carousel["2"].content} interaction={strings.experience.carousel["2"].interaction} to={"/experience/coffee-shop"} />,
        <CarouselSlide src={"/images/experience/carousel/2.jpg"} alt={""} headline={strings.experience.carousel["3"].headline} content={strings.experience.carousel["3"].content} interaction={strings.experience.carousel["3"].interaction} to={"/experience/boutique"} />,
        <CarouselSlide src={"/images/experience/carousel/3.jpg"} alt={""} headline={strings.experience.carousel["4"].headline} content={strings.experience.carousel["4"].content} interaction={strings.experience.carousel["4"].interaction} to={"/experience/origins-hall"} />,
    ];

    return (
        <section className={"w-full mt-32 relative"}>
            <article className={"w-full flex items-center justify-around px-40 py-16"}>
                <section className={"flex flex-col items-start justify-start gap-16 h-full"}>
                    <h2 className={"text-8xl font-black w-112 text-caribbean-green"}>Conoce <strong
                        className={"text-viridian-green"}>el Centro</strong></h2>
                    <ul className={"flex flex-col items-start justify-start gap-8 h-full w-64"}>
                        <li className={`${navItemStyle} ${(current % 4 === 0) ? "text-caribbean-green" : "text-neutral-400"}`}>Droguería</li>
                        <li className={`${navItemStyle} ${(current % 4 === 1) ? "text-caribbean-green" : "text-neutral-400"}`}>Coffee Shop</li>
                        <li className={`${navItemStyle} ${(current % 4 === 2) ? "text-caribbean-green" : "text-neutral-400"}`}>Boutique</li>
                        <li className={`${navItemStyle} ${(current % 4 === 3) ? "text-caribbean-green" : "text-neutral-400"}`}>Salón Orígenes</li>
                    </ul>
                </section>
                <Carousel indexState={[current, setCurrent]} items={carouselItems}/>
            </article>
        </section>
    );
}