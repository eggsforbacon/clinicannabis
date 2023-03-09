export const ServiceCard = (
    props: {
        name : string,
        url : string,
        to : string,
        interaction : string
    }) => {
    return (
        <article className={`relative flex flex-col justify-end items-center h-screen w-screen bg-cover bg-center bg-no-repeat overflow-clip ${props.url}`}>
            <section className={"w-224 h-224 rounded-full bg-teal-50/50 absolute -bottom-[33rem] z-10 animate-float-down-sm"}/>
            <section className={`w-224 h-224 rounded-full bg-teal-50/90 absolute -bottom-[34.5rem] z-10 animate-float-up-sm`}/>
            <section className={`w-224 h-224 rounded-full bg-teal-50 absolute -bottom-[36rem] z-10 flex flex-col gap-6 items-center pt-16 justify-start`}>
                <h2 className={"text-midnight-green text-center text-4xl w-64 h-28 font-black"}>{props.name}</h2>
                <button className={"text-viridian-green text-xl flex items-center justify-center rounded-full border-2 border-solid border-viridian-green px-8 py-2 animate-float-up-button-landing-service animation-duration-[6s]"}>{props.interaction}</button>
            </section>
        </article>
    );
}