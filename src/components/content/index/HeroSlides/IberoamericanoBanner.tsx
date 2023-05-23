import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
/* import { Style } from "styles\BannerHead.css"; */
export const IberoamericanoBanner = () => {
    const navigate = useRouter();

    return (
        <section className={"w-full h-224 relative -mb-20 mt-20"}>
            <Image src={"/images/LandingSeminario/Banner Web-1280x620.png"}
                alt={""} width={1280} height={565} className={"w-full absolute top-0 left-0"} quality={100} priority />
            {/* <Image onClick={() => { navigate.push("/seminario/seminario-iberoamericano") }} src={"/images/LandingSeminario/Banner Web-1280x620.png"}
                alt={""} width={1280} height={565} className={"w-full absolute top-16 left-0"} quality={100} priority /> */}

            <div className={'Button-Banner'}>
                <div className="Position-Btn">
                    {/* <div className="button-Info-1">
                        <button className={'rounded-full border-Button text-center text-white bg-buttonHD'}>
                            <Link href={""} className={`text-button`} target="_blank">Inscribete</Link>
                        </button>
                    </div> */}

                    <div className="button-Info-2">
                        <button className={'rounded-full border-Button text-center text-white bg-buttonHD'}>
                            <Link href={"/seminario/seminario-iberoamericano"} className={`text-button`} target="_blank">M&aacute;s informaci&oacute;n</Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}