import Image from "next/image";
import {strings} from "../../../../model/strings";
import {ReactNode} from "react";

export const BlogSlide = (
    props: {
        index : string,
        imageClass : string,
    }
) => {
    return (
        <article className={"w-full h-[80vh] lg:h-224 relative flex items-center lg:px-36 justify-start overflow-clip"}>
            <Image src={strings.landing.blog.slides[props.index].image} alt={""} width={1920} height={1280}
                   quality={100} className={props.imageClass}/>
            <span className={"absolute w-full h-full top-0 left-0 bg-gradient-to-r from-viridian-green/80 via-viridian-green/30 z-10 selection:none pointer-events-none"}/>
            <section className={"text-white px-6 lg:px-0 h-full lg:h-auto text-center lg:text-left lg:w-136 relative z-10 flex flex-col items-center lg:items-stretch justify-evenly lg:justify-end gap-8"}>
                <h2 className={"font-black text-5xl lg:leading-[0.85] w-full lg:text-7xl"}>{strings.landing.blog.slides[props.index].title}
                </h2>
                <p className={"lg:text-2xl text-2xl font-light md:text-left lg:w-112"}>{strings.landing.blog.slides[props.index].copy}</p>
                <button className={"w-fit rounded-full border-solid border-2 text-white border-white px-16 py-2 text-xl transition duration-300 ease-in-out lg:hover:cursor-pointer lg:hover:bg-viridian-green lg:hover:shadow-md lg:hover:shadow-white/30 focus:bg-viridian-green focus:shadow-md focus:shadow-white/30"}>{strings.landing.blog.slides[props.index].cta}</button>
            </section>
        </article>
    );
}