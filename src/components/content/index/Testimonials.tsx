import {strings} from "../../../model/strings";
import Link from "next/link";
import Image from "next/image";

export const Testimonials = () => {
    return (
        <section
            className={"w-full overflow-clip xl:mt-8 2xl:mt-0 h-96 md:h-128 lg:h-168 2xl:h-192 flex justify-center items-center md:justify-end px-6 py-6 xl:px-44 relative bg-white"}>
            <section
                className={"flex items-center justify-center rounded-2xl absolute w-full h-full z-0 pointer-events-none select-none px-6 top-0 left-0 shadow-sm"}>
                <Image src={"/images/landing/testimonials.png"} alt={""} height={1023} width={2400}
                       className={"absolute md:top-32 lg:top-28 xl:top-16 2xl:top-0 md:left-24 lg:left-0 scale-[2.3] md:scale-[1.8] lg:scale-[1.55] xl:scale-[1.4] 2xl:scale-105"}
                       quality={99}/>
                <Image src={"/images/landing/testimonialsLeaf.svg"} alt={""} height={1248} width={1248}
                       className={"absolute -bottom-1 right-0 z-0"}
                       quality={100}/>
            </section>
            <div className={"flex flex-col items-center justify-start gap-6 relative"}>
                <h2 className={"text-center lg:text-start w-full lg:w-auto text-midnight-green text-[3.2rem] md:text-[5rem] xl:text-[7rem] font-black leading-[0.8] lg:leading-[0.6]"}>{strings.landing.testimonials.headline}<br/><strong
                    className={"text-white text-6xl md:text-8xl xl:text-9xl"}>{strings.landing.testimonials.remark}</strong>
                </h2>
                {/*<p className={"text-neutral-800 text-base md:text-xl xl:text-2xl font-normal text-left md:text-left max-w-[28rem] md:max-w-max md:w-144 xl:w-192"}>{strings.landing.testimonials.content}</p>*/}
                <Link href={"/testimonios"}
                      className={"text-midnight-green rounded-full px-6 lg:px-10 py-1.5 text-xl bg-transparent border-solid border-2 border-midnight-green transition duration-100 lg:hover:cursor-pointer lg:hover:bg-white/10 lg:hover:backdrop-blur-2xl focus:bg-white/10 focus:backdrop-blur-2xl lg:hover:scale-110"}>{strings.landing.testimonials.cta}</Link>
            </div>
        </section>
    );
}