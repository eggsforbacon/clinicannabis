import Image from "next/image";
import {strings} from "../../../../model/strings";

export const BlogSlide = () => {
    return (
        <article className={"w-full h-[55vh] lg:h-192 relative flex items-center lg:px-36 justify-start overflow-clip"}>
            <Image src={strings.landing.blog.slides["1"].image} alt={""} width={1920} height={1280}
                   quality={100} className={"z-0 absolute brightness-[60%] lg:brightness-100 scale-[3.2] md:scale-[2.2] lg:scale-[1.8] xl:scale-[1.35] bottom-36 md:bottom-20 lg:bottom-32 right-16 lg:-right-10 select-none pointer-events-none"}/>
            <span className={"select-none absolute w-full h-full top-0 left-0 bg-gradient-to-r from-viridian-green lg:from-viridian-green/80 lg:via-viridian-green/30 z-10 selection:none pointer-events-none"}/>
            <section className={"text-white px-6 lg:px-0 h-full lg:h-auto text-left lg:w-136 relative z-10 flex flex-col items-start lg:items-stretch justify-center lg:justify-end gap-6 lg:gap-8"}>
                <h2 className={"font-black text-5xl leading-[0.85] lg:leading-[0.85] w-full lg:text-7xl"}>{strings.landing.blog.slides["1"].title}
                </h2>
                <p className={"lg:text-2xl text-xl font-light md:text-left lg:w-112"}>{strings.landing.blog.slides["1"].copy}</p>
                <button className={"mt-8 w-fit rounded-full border-solid border-2 text-white border-white px-10 py-1.5 text-xl transition duration-300 ease-in-out lg:hover:cursor-pointer lg:hover:bg-viridian-green lg:hover:shadow-md lg:hover:shadow-white/30 focus:bg-viridian-green focus:shadow-md focus:shadow-white/30"}>{strings.landing.blog.slides["1"].cta}</button>
            </section>
        </article>
    );
}