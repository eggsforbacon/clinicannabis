import Link from "next/link";

export const BlogCard = (props : {
    children : JSX.Element | JSX.Element[]
    slug: string,
    title: string,
    subtitle: string
} ) => {
    return (
        <Link href={`/blog/${props.slug}`} className={"relative rounded-2xl h-144 w-full shadow-md bg-white flex flex-col justify-end items-stretch overflow-clip transition duration-300 ease-in-out lg:hover:-translate-y-3 lg:hover:cursor-pointer focus:-translate-y-3"}>
            {props.children}
            <section className={"relative z-20 w-full text-center text-midnight-green bg-white h-44 flex flex-col items-stretch justify-start pt-4 gap-2"}>
                <h2 className={"text-3xl font-bold"}>{props.title}</h2>
                <h3 className={"text-2xl font-normal"}>{props.subtitle}</h3>
            </section>
        </Link>
    );
}