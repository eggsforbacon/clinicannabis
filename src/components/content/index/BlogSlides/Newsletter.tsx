import Image from "next/image";
import {strings} from "../../../../model/strings";

export const Newsletter = () => {
    return (
        <article className={"w-full h-224 relative flex items-center px-36 justify-start"}>
            <Image src={"/images/landing/blog/blogBackground.png"} alt={""} width={1920} height={1280}
                   quality={100} className={"z-0 absolute -top-20 right-0"}/>
            <span className={"absolute w-full h-full top-0 left-0 bg-gradient-to-r from-viridian-green/80 via-viridian-green/30 z-10"}/>
            <section className={"text-white w-1/2 relative z-10 flex flex-col items-stretch justify-end gap-8"}>
                <h2 className={"font-black text-6xl lg:leading-[0.85] w-full lg:text-8xl"}>{strings.landing.blog.slides["1"].title}
                </h2>
                <p className={"text-base lg:text-4xl font-light text-left md:text-left lg:w-144"}>{strings.landing.blog.slides["1"].copy}</p>
                <button className={"w-fit rounded-full border-solid border-2 text-white border-white px-16 py-2 text-2xl transition duration-300 ease-in-out lg:hover:cursor-pointer lg:hover:bg-viridian-green lg:hover:shadow-md lg:hover:shadow-white/30 focus:bg-viridian-green focus:shadow-md focus:shadow-white/30"}>{strings.landing.blog.slides["1"].cta}</button>
            </section>
        </article>
    );
}