import car0 from "../../public/images/experience/carousel/0.jpg"
import car1 from "../../public/images/experience/carousel/1.jpg"
import car2 from "../../public/images/experience/carousel/2.jpg"
import car3 from "../../public/images/experience/carousel/3.jpg"
import Image from "next/image";

export const Carousel = (
    props: {
        indexState: [number, any],
    }
) => {

    const [index, setIndex] = props.indexState;
    const prev = (index === 0) ? 3 : index - 1;
    const next = (index === 3) ? 0 : index + 1;

    const images = [
        car0, car1, car2, car3
    ];

    return (
        <article className={"rounded-3xl overflow-clip w-192 h-192 relative flex flex-col items-center justify-center"}>
            <section className={"bg-fuchsia-100 h-fit w-full flex flex-col justify-center items-stretch"}>
                <Image src={images[prev]} alt={"Cat"} className={"z-0 h-full w-auto"} width={1300} height={1300} />
                <Image src={images[index]} alt={"Cat"} className={"z-0 h-full w-auto"} width={1300} height={1300} />
                <Image src={images[next]} alt={"Cat"} className={"z-0 h-full w-auto"} width={1300} height={1300} />
            </section>
        </article>
    );
}