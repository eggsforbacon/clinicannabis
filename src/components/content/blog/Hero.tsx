import {strings} from "../../../model/strings";
import Image from "next/image";
import {SearchBar} from "../../SearchBar";

export const Hero = () => {
    return (
        <article className={"h-128 relative"}>
            <Image src={"/images/landing/blogBackground.png"} alt={""} width={1920} height={1075}
                   className={"absolute z-0 top-0 left-0"}/>
            <section className={"relative w-full h-full flex flex-col items-center pt-28 justify-center gap-10 px-44"}>
                <h2 className={"text-8xl font-black text-viridian-green"}>{strings.blog.headline}</h2>
                <h3 className={"text-2xl font-bold text-neutral-600 text-center w-256"}>{strings.blog.copy}</h3>
                {/*<SearchBar className={"mt-4 h-14 w-full rounded-2xl border-2 border-solid border-neutral-400 bg-white"}/>*/}
            </section>
        </article>
    );
}