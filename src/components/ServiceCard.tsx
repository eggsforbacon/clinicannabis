import Image from "next/image";

export const ServiceCard = (
    props: {
        name : string | JSX.Element,
        url : string,
        to : string,
        interaction : string,
        bgPos: string,
        index : number,
    }) => {
    return (
        <article className={`relative flex flex-col justify-end items-center h-[90vh] w-screen ${props.bgPos} bg-no-repeat overflow-clip ${props.url}`}>
            <section className={"w-full h-1/2 absolute top-0 lef-0 z-10 bg-gradient-to-b from-rich-black via-rich-black/70"}/>
            {/*<Image src={"/images/svg/clinic_white.svg"} alt={""} loading={"lazy"} width={16} height={16} className={"z-10 absolute top-3 left-1/2 -translate-x-1/2 h-28 w-auto"} />*/}
            <section className={`w-full h-80 ${props.index % 2 === 0 ? "service-clip-even" : "service-clip-odd"} bg-white absolute -bottom-8 z-10 flex flex-col gap-1 items-center pt-20 justify-start animate-float-down-sm`}>
                <h2 className={"text-rich-black text-center text-5xl leading-[0.9] w-[95vw] h-28 font-black"}>{props.name}</h2>
                <button className={"text-viridian-green text-xl flex items-center justify-center rounded-full border-2 border-solid border-viridian-green px-8 py-2"}>{props.interaction}</button>
            </section>
        </article>
    );
}
