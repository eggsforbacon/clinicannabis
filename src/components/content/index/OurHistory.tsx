import Image from "next/image";

export const OurHistory = () => {
    return (
        <section className={"relative px-44 pt-24 min-h-[56rem] w-full flex items-start justify-center"}>
            <Image src={"/images/backgrounds/ourHistory.png"}
                   className={"z-0 pointer-events-none absolute selection:bg-transparent -top-0"} alt={""}
                   height={584} width={1920} priority/>
        </section>
    );
}