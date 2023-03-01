import Image from "next/image";
import {useRouter} from "next/router";

export const CarouselSlide = (
    props: {
        src: string | any,
        alt?: string,
        headline: string | any,
        content: string | any,
        interaction: string | any,
        to: string,
    }
) => {

    const navigate = useRouter();

    return (
        <article className={"w-192 h-192 relative flex flex-col items-stretch justify-start gap-4 p-16"}>
            <Image src={props.src} alt={props.alt!}
                   className={"absolute h-full w-auto z-0 top-0 left-0 pointer-events-none select-none"} height={1300}
                   width={1300}
                   quality={100}/>
            <span
                className={"absolute h-full w-full z-0 top-0 left-0 pointer-events-none select-none bg-gradient-to-r from-black/70 to-black/50"}/>
            <section className={"z-10 w-full h-full flex flex-col items-start justify-between"}>
                <h2 className={"text-white text-8xl font-bold"}>{props.headline}</h2>
                <section className={"flex flex-col items-start justify-end gap-8"}>
                    <p className={"text-2xl text-white w-136"}>{props.content}</p>
                    <button
                        className={"lg:block rounded-full border-solid border-2 border-white text-white font-normal text-2xl px-6 py-1 transition duration-300 exponential-out lg:hover:scale-110 lg:hover:bg-viridian-green lg:hover:text-white focus:scale-110 focus:bg-viridian-green focus:text-white"}
                        onClick={() => navigate.push("/soon")}>{props.interaction}</button>
                </section>
            </section>
        </article>
    );
}