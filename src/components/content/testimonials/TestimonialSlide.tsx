import React, {useEffect, useState} from "react";
import ReactPlayer from "react-player";

export const TestimonialSlide = (props: {
    firstName: string,
    lastName: string,
    description: string,
    reel: string,
}) => {

    const [hasWindow, setHasWindow] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true);
        }
    }, []);
    return (
        <article
            className={"w-screen box-border h-224 relative flex flex-col lg:flex-row items-center lg:px-36 justify-center gap-16 overflow-clip"}>
            <section className={"flex flex-col items-center relative justify-center gap-8 w-128 px-16 lg:px-0"}>
                <h2 className={"text-center lg:text-start text-4xl lg:text-6xl font-bold text-viridian-green"}>{props.firstName} <span
                    className={"text-caribbean-green"}>{props.lastName}</span></h2>
                <p className={"text-center lg:text-start text-neutral-500 text-lg lg:text-2xl"}>{props.description}</p>
            </section>
            {hasWindow && /*&& <Image priority src={"/video/ClinicannabisAnimation.gif"} alt={""} height={1080 * 1.8} width={1920 * 1.8} className={"scale-[1.5] lg:scale-[1.75] xl:scale-[1.25]"} /> */
                <ReactPlayer controls muted playsinline url={props.reel} height={1920*0.4}
                             width={1080*0.4} className={"relative"}/>
            }
        </article>
    );
}