import Image from "next/image";

export const OurHistory = () => {

    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat nisi ultricies, dapibus diam a, tincidunt est. Nunc ultrices enim vitae tincidunt feugiat. Vestibulum aliquet ligula massa, sit amet vehicula nulla tincidunt sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.";

    return (
        <article className={"relative px-44 pt-24 min-h-[56rem] w-full flex items-start justify-center"}>
            <Image src={"/images/backgrounds/ourHistory.svg"}
                   className={"z-0 pointer-events-none absolute selection:bg-transparent -top-0"} alt={""}
                   height={584} width={1920}/>
            <section className={"z-10 debug w-full flex items-center justify-between"}>
                <article className={"w-full flex flex-col items-start justify-start"}>
                    <h2 className={"text-white text-6xl font-bold"}>Nuestra Historia</h2>
                    <p>{lorem}</p>
                </article>
                <section className={"h-full w-fit"}>

                </section>
            </section>
        </article>
    );
}