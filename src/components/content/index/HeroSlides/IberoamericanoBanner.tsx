import Image from "next/image";
import {useRouter} from "next/router";

export const IberoamericanoBanner = () => {

    const navigate = useRouter();

    return (
        <header className={"w-full h-224 relative -mb-20 bg-[#584280]"}>
            <Image src={"/images/LandingSeminario/littleBannerNotchUpTop.png"}
                   alt={""} width={925} height={48} className={"w-full absolute top-0 left-0"} quality={100} priority/>
            <Image onClick={() => {navigate.push("/seminario/seminario-iberoamericano")}} src={"/images/LandingSeminario/Landing page - Clinicannabis - Seminario_Mesa de trabajo 1.png"}
                   alt={""} width={1280} height={565} className={"w-full absolute top-16 left-0"} quality={100} priority/>

        </header>
    );
}