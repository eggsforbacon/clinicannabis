import Image from "next/image";

export const Numbers = () => {
    return (
        <article className={"relative px-40 w-full flex items-center justify-center overflow-clip py-16"}>
            <Image src={"/images/backgrounds/numbers.png"}
                   className={"z-0 pointer-events-none absolute selection:bg-transparent h-full w-auto"} alt={""}
                   height={584} width={1920} priority/>
            <section className={"text-white z-10 grid grid-cols-3 w-full"}>
                <section className={"text-center w-full flex flex-col items-center justify-center gap-2"}>
                    <h2 className={"font-black text-6xl"}>147.000+</h2>
                    <h3 className={"font-light text-4xl"}>Procedimientos</h3>
                </section>
                <section className={"text-center w-full flex flex-col items-center justify-center gap-2"}>
                    <h2 className={"font-black text-6xl"}>40+</h2>
                    <h3 className={"font-light text-4xl"}>Productos</h3>
                </section>
                <section className={"text-center w-full flex flex-col items-center justify-center gap-2"}>
                    <h2 className={"font-black text-6xl"}>430</h2>
                    <h3 className={"font-light text-4xl"}>Personal</h3>
                </section>
            </section>
        </article>
    );
}