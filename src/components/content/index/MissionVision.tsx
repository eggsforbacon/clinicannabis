import {strings} from "../../../accessibility/strings";
import {useEffect, useRef, useState} from "react";

export const MissionVision = () => {

    const mTriggerRef = useRef(null);
    const vTriggerRef = useRef(null);
    const [leftAnimation, setLeftAnimation] = useState("opacity-0 -translate-x-[100px]");
    const [rightAnimation, setRightAnimation] = useState("opacity-0 translate-x-[100px]");

    useEffect(() => {
        const mTrigger = mTriggerRef.current as unknown as HTMLSpanElement;
        const vTrigger = vTriggerRef.current as unknown as HTMLSpanElement;
        const observe = (trigger: HTMLSpanElement, state: [string, any], change: string) => {
            const observer = new IntersectionObserver(callback);
            observer.observe(trigger);

            function callback(entries: IntersectionObserverEntry[]) {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    state[1](change);
                    observer.unobserve(trigger);
                }
            }
        }

        observe(mTrigger, [leftAnimation, setLeftAnimation], "animate-fade-in-left ");
        observe(vTrigger, [rightAnimation, setRightAnimation], "animate-fade-in-right ");

    }, []);

    return (
        <article className={"z-10 w-full h-168 px-44 relative flex items-stretch justify-between"}>
            <section className={"w-136 h-full flex flex-col items-start gap-8 justify-start"}>
                <h2 className={`text-7xl font-black text-viridian-green ${leftAnimation} animation-duration-1000`}>{strings.landing.about.mission.headline}<br/><strong className={"text-caribbean-green"}>{strings.landing.about.mission.remark}</strong></h2>
                <p className={`text-2xl text-neutral-400 font-normal ${leftAnimation} animation-duration-800`}>{strings.landing.about.mission.content}</p>
            </section>
            <section className={"feat w-136 h-full flex flex-col items-start gap-8 justify-end"}>
                <h2 className={`text-7xl font-black text-viridian-green ${rightAnimation} animation-duration-1000`}>{strings.landing.about.vision.headline}<br/><strong className={"text-caribbean-green"}>{strings.landing.about.vision.remark}</strong></h2>
                <p className={`text-2xl text-neutral-400 font-normal ${rightAnimation} animation-duration-800`}>{strings.landing.about.vision.content}</p>
            </section>
            <span ref={mTriggerRef}
                  className={"absolute top-72 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
            <span ref={vTriggerRef}
                  className={"absolute bottom-56 w-full h-1 bg-transparent pointer-events-none selection:bg-transparent"}/>
        </article>
    );
}