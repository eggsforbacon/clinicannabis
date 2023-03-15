import Image from "next/image";
import {strings} from "../../../model/strings";

export const SIS = () => {
    return (
        <article className={"relative h-224 z-0"} id={"sis"}>
            <Image src={"/images/services/service2.png"} className={"absolute select-none -top-36 -left-0"} alt={""} width={1920}
                   height={1151}/>
            <section className={"absolute w-256 mt-72 ml-56 flex flex-col justify-between items-start"}>

            </section>
        </article>
    );
}