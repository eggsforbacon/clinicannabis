import Image from "next/image";

export const Hero = () => {
    return (
        <header className={"w-full h-224 relative flex flex-col items-stretch justify-center"}>
            <Image className={"absolute -top-4 left-0 select-none scale-125"}
                   src={"/images/experience/hero.png"} alt={"Placeholder"} width={1920} height={1044}/>
            <article className={"z-30 w-full h-full flex flex-col items-stretch justify-between px-48 py-32"}>
                <h2 className={"text-9xl w-192 text-white font-black leading-[0.8]"}>Te ofrecemos <strong
                    className={"text-[6.5rem] text-caribbean-green"}>experiencias</strong></h2>
                <p className={"text-neutral-400 font-normal text-3xl text-right pl-[54rem] w-full"}>{"Hay un coffee shop, una boutique, una droguería y una vaina que se llama salón orígenes. Aquí va una descripción que englobe todo eso"}</p>
            </article>
        </header>
    );
}