import {strings} from "../../../model/strings";
import Link from "next/link";
import Image from "next/image";

export const Testimonials = () => {
    return (
        <section
            className={"w-full overflow-x-clip lg:mt-36 lg:h-168 xl:h-[46rem] 2xl:h-192 flex justify-center items-center md:justify-between px-6 py-6 xl:px-44 relative bg-white"}>
            <span
                className={"absolute top-0 left-0 h-full w-full pointer-events-none select-none z-0 bg-gradient-to-tr from-viridian-green/40 via-white to-caribbean-green/20"}/>
            <section
                className={"hidden lg:flex items-center justify-center rounded-2xl relative z-0 pointer-events-none select-none overflow-clip w-168 px-6 h-full shadow-sm"}>
                <Image src={"/images/landing/testimonials.png"} alt={""} height={2160} width={1215}
                       className={"absolute top-36 left-1/2 -translate-x-2/3 scale-[2.5]"}
                       quality={100} loading={"lazy"}/>
            </section>
            <div className={"flex flex-col items-center justify-start gap-6 relative"}>
                <h2 className={"text-center lg:text-start w-full lg:w-auto text-midnight-green lg:text-caribbean-green text-[3.2rem] md:text-[5rem] lg:text-[7rem] font-black leading-[0.8] lg:leading-[0.6]"}>{strings.landing.testimonials.headline}<br/><strong
                    className={"text-caribbean-green lg:text-midnight-green text-6xl md:text-8xl lg:text-9xl"}>{strings.landing.testimonials.remark}</strong>
                </h2>
                <p className={"text-neutral-800 text-base md:text-xl lg:text-2xl font-normal text-left md:text-left max-w-[28rem] md:max-w-max md:w-144 xl:w-192"}>{strings.landing.testimonials.content}</p>
                <Link href={"/testimonios"}
                      className={"text-viridian-green rounded-full px-6 lg:px-10 py-1.5 text-xl bg-transparent border-solid border-2 border-viridian-green transition duration-100 lg:hover:cursor-pointer lg:hover:bg-white/10 lg:hover:backdrop-blur-2xl focus:bg-white/10 focus:backdrop-blur-2xl lg:hover:scale-110"}>{strings.landing.testimonials.cta}</Link>
            </div>
        </section>
    );
}