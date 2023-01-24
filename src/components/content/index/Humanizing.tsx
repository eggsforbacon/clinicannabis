import Image from "next/image";

export const Humanizing = () => {
    return (
        <article className={"relative px-44 pt-16 min-h-[62rem] w-full flex items-start bg-fuchsia-100 justify-center"}>
            <Image src={"/images/backgrounds/Humanizacion_1.png"}
                   className={"z-0 pointer-events-none absolute selection:bg-transparent -top-0 opacity-30"} alt={""}
                   height={584} width={1920} priority/>
            <section className={"debug w-full"} >

            </section>
        </article>
    );
}