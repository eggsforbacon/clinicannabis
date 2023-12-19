import Link from "next/link";

export const RecommendedPost = (props: {
    title : string,
    subtitle : string,
    to : string
}) => {
    return (
        <Link href={props.to} className={"w-96 xl:w-136 h-136 relative rounded-3xl flex items-start justify-center"} >
            <article className={"w-full h-96 flex items-center justify-start rounded-3xl overflow-clip shadow-md"}>

            </article>
            <section className={"text-center text-rich-black bg-white w-80 xl:w-96 absolute bottom-24 left-1/2 -translate-x-1/2 h-32 rounded-2xl shadow-md flex flex-col items-center justify-center px-8"}>
                <h2 className={"text-2xl font-bold"}>{props.title}</h2>
                <h3 className={"text-xl"}>{props.subtitle}</h3>
            </section>
        </Link>
    );
}

/*
* <p>Imagen esa vaina</p>
* */