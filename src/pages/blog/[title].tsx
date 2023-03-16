import {useRouter} from "next/router";
import Image from "next/image";
import {posts} from "../../model/posts";
import Footer from "../../components/Footer";
import {BlogCard} from "../../components/content/blog/BlogCard";
import {RecommendedPost} from "../../components/content/blog/RecommendedPost";
import Navbar from "../../components/Navbar";

export const title = () => {
    const router = useRouter();
    const {title} = router.query;

    const post = posts.find(p => p.id === title);
    const pIndex = posts && posts.indexOf(post!);
    const next = pIndex + 1 < posts.length ? posts[pIndex + 1] : undefined;
    const prev = pIndex - 1 >= 0 ? posts[pIndex - 1] : undefined;
    const text = post && post.text;
    const images = post && post.images;

    return (
        <main>
            <Navbar selection={"none"} />
            <article className={"relative w-full lg:px-44 flex flex-col items-center justify-start gap-16"}>
                <section
                    className={"w-full absolute h-120 w-full flex flex-col gap-2 items-center justify-center debug"}>
                    <Image src={`/images/blog/posts/${images && images[0]}`} alt={""} width={1920} height={640}
                           className={"absolute top-0 left-0"}/>
                    <h1 className={"text-6xl font-black"}>{post && post.title}</h1>
                    <h2 className={"text-3xl font-semibold"}>{post && post.subtitle}</h2>
                    <h3>{post && post.date}</h3>
                </section>
                <section className={"w-full h-full mt-[36rem] px-4 lg:px-96 flex flex-col items-center justify-start gap-16"}>
                    {text && text.map((t, index) => {
                        return (
                            <>
                                <p className={"w-full text-rich-black text-xl lg:text-2xl text-justify leading-[1.4]"}>
                                    {t}
                                </p>
                                {index % 2 !== 0 &&
                                    <Image src={`/images/blog/posts/${images && images[Math.floor(index / 2)]}`}
                                           alt={""} width={1920} height={640} className={"debug w-full h-64"}/>}
                            </>
                        )
                    })}
                </section>
                <section className={"w-full grid lg:grid-cols-2 place-items-center py-44"}>
                    {prev && <RecommendedPost title={prev.title} subtitle={prev.subtitle}
                                      to={`/blog/${prev.id}`}/>}
                    {next && <RecommendedPost title={next.title} subtitle={next.subtitle}
                                      to={`/blog/${next.id}`}/>}
                </section>
            </article>
            <Footer/>
        </main>
    );
}

export default title;