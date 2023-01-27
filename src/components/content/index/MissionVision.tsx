import {strings} from "../../../accessibility/strings";

export const MissionVision = () => {
    return (
        <article className={"z-10 w-full h-168 px-44 flex items-stretch justify-between"}>
            <section className={"w-136 h-full flex flex-col items-start gap-8 justify-start"}>
                <h2 className={"text-7xl font-black text-viridian-green"}>{strings.landing.about.mission.headline}<br/><strong className={"text-caribbean-green"}>{strings.landing.about.mission.remark}</strong></h2>
                <p className={"text-2xl text-neutral-400 font-normal"}>{strings.landing.about.mission.content}</p>
            </section>
            <section className={"feat w-136 h-full flex flex-col items-start gap-8 justify-end"}>
                <h2 className={"text-7xl font-black text-viridian-green"}>{strings.landing.about.vision.headline}<br/><strong className={"text-caribbean-green"}>{strings.landing.about.vision.remark}</strong></h2>
                <p className={"text-2xl text-neutral-400 font-normal"}>{strings.landing.about.vision.content}</p>
            </section>
        </article>
    );
}