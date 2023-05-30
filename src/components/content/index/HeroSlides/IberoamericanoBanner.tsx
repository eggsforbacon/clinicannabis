import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
/* import { Style } from "styles\BannerHead.css"; */
export const IberoamericanoBanner = () => {
    const navigate = useRouter();

    return (
        <section className={"w-full h-168 lg:h-192 xl:h-208 relative mt-30 flex flex-col items-center justify-start pt-44 gap-16"}>
            <Image src={"/images/landing/bannerIberoamericano.png"}
                alt={""} width={1920} height={1080} className={"absolute w-full scale-[2.5] top-[17rem] left-52 lg:scale-[1.4] lg:top-auto lg:bottom-8 lg:left-0 xl:scale-100 xl:top-0 xl:left-0"} quality={100} priority />
            <article className={"relative debug w-full px-44 flex flex-col min-h-[20rem]"}>
                <h1 className={"font-aeonik"}>Seminario Iberoamericano</h1>

            </article>
            <button className={'relative rounded-full border-solid border-[3px] lg:border-4 border-neutral-100 text-center text-white py-1.5 px-5 lg:px-8 lg:py-3 xl:py-4 xl:px-10 backdrop-blur-lg transition duration-500 ease-in-out lg:hover:bg-white/20 lg:hover:shadow-xl'}>
                <Link href={"/seminario/seminario-iberoamericano"} className={`text-base font-normal`} target="_blank">M&aacute;s informaci&oacute;n</Link>
            </button>
        </section>
    );
}