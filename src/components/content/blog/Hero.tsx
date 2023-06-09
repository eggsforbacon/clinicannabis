import {strings} from "../../../model/strings";
import Image from "next/image";

export const Hero = () => {
    return (
        <article className={"h-112 md:h-128 relative"}>
            <Image src={"/images/landing/blog/updatedBg.png"} alt={""} width={1920} height={1075}
                   className={"absolute scale-[4] md:scale-[3.5] lg:scale-[2.5] xl:scale-[2.2] z-0 top-0 left-0 opacity-40"}/>
            <section className={"relative w-full h-full flex flex-col items-center pt-20 md:pt-28 justify-center gap-4 md:gap-10 px-8 md:px-16 lg:px-44"}>
                <h2 className={"text-6xl md:text-8xl font-black text-viridian-green text-center lg:text-left"}>{strings.blog.headline}</h2>
                <h3 className={"text-lg md:text-2xl xl:w-256 font-semibold text-neutral-600 text-center"}>{strings.blog.copy}</h3>
                {/*<SearchBar className={"mt-4 h-14 w-full rounded-2xl border-2 border-solid border-neutral-400 bg-white"}/>*/}
            </section>
        </article>
    );
}