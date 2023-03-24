import Image from "next/image";

export const Numbers = () => {
    return (
        <article className={"relative lg:px-40 w-full flex items-center justify-center overflow-clip py-16 bg-midnight-green"}>
            <span className={"absolute z-0 bg-gradient-to-br from-caribbean-green/20 via-viridian-green/10 w-[150vw] h-full"}/>
            <section className={"text-white px-16 relative z-10 grid gap-16 grid-cols-2 lg:grid-cols-3 w-full"}>
                <section className={"col-span-2 lg:col-span-1 py-3 text-center w-full flex flex-col items-center justify-center gap-2"}>
                    <h2 className={"font-black text-4xl lg:text-5xl"}>147.000+</h2>
                    <h3 className={"font-light text-2xl lg:text-3xl"}>Procedimientos</h3>
                </section>
                <section className={"py-3 text-center w-full flex flex-col items-center justify-center gap-2"}>
                    <h2 className={"font-black text-4xl lg:text-5xl"}>40+</h2>
                    <h3 className={"font-light text-2xl lg:text-3xl"}>Productos</h3>
                </section>
                <section className={"py-3 text-center w-full flex flex-col items-center justify-center gap-2"}>
                    <h2 className={"font-black text-4xl lg:text-5xl"}>430</h2>
                    <h3 className={"font-light text-2xl lg:text-3xl"}>Personal</h3>
                </section>
            </section>
        </article>
    );
}