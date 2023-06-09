import Link from "next/link";

export const BlogCard = (props : {
    children : JSX.Element | JSX.Element[]
    slug: string,
    title: string,
    subtitle: string
} ) => {
    return (
        <Link href={`/blog/${props.slug}`} className={"border-2 border-neutral-300 relative rounded-2xl md:h-128 lg:h-144 w-full shadow-md bg-white flex flex-col justify-start items-stretch overflow-clip transition duration-300 ease-in-out hover:-translate-y-3 hover:cursor-pointer focus:-translate-y-3 hover:border-caribbean-green focus:border-caribbean-green hover:shadow-caribbean-green/40 focus:shadow-caribbean-green/40"}>
            {props.children}
            <section className={"left-0 bottom-10 w-full min-h-[9rem] px-4 lg:px-2 text-center text-midnight-green bg-white flex flex-col items-stretch justify-start pt-4 gap-2"}>
                <h2 className={"text-xl lg:text-2xl xl:text-3xl font-bold "}>{props.title}</h2>
                <h3 className={"text-lg lg:text-xl  xl:text-2xl font-normal"}>{props.subtitle}</h3>
            </section>
        </Link>
    );
}