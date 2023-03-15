import Image from "next/image";

export const Numbers = () => {
    return (
        <article className={"relative px-40 w-full flex items-center justify-center overflow-clip py-16 backdrop-blur-2xl"}>
            <section className={"text-midnight-green z-10 grid gap-16 grid-cols-3 w-full"}>
                <section className={"py-3 text-center w-full flex flex-col items-center justify-center gap-2"}>
                    <h2 className={"font-black text-5xl"}>147.000+</h2>
                    <h3 className={"font-light text-3xl"}>Procedimientos</h3>
                </section>
                <section className={"py-3 text-center w-full flex flex-col items-center justify-center gap-2"}>
                    <h2 className={"font-black text-5xl"}>40+</h2>
                    <h3 className={"font-light text-3xl"}>Productos</h3>
                </section>
                <section className={"py-3 text-center w-full flex flex-col items-center justify-center gap-2"}>
                    <h2 className={"font-black text-5xl"}>430</h2>
                    <h3 className={"font-light text-3xl"}>Personal</h3>
                </section>
            </section>
        </article>
    );
}