import {Checkbox} from "flowbite-react";
import {strings} from "../model/strings";

export const TOSCheckbox = () => {
    return (
        <section className={"flex flex-row items-center justify-center gap-2"}>
            <Checkbox required className={"text-GO-green focus:ring-GO-green rounded"}/>
            <a href={"/legal"} target={"_blank"} rel={"noreferrer"} className={"text-sm underline-offset-2 underline text-neutral-400 transition duration-300 ease-in-out hover:text-GO-green focus:text-GO-green"}>
                {strings.legal.disclaimer}
            </a>
        </section>
    );
}