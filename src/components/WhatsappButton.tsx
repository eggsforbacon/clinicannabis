import {Whatsapp} from "react-bootstrap-icons";
import {useRouter} from "next/router";

export const WhatsappButton = () => {
    const navigate = useRouter();
    return (
        <a  href={"https://wa.me/+573174355876"} target={"_blank"} rel={"noreferrer"}
            className={`${navigate.asPath.startsWith("/blog") ? "hidden" : ""} py-4 rounded-full px-10 z-40 fixed right-2 bottom-4 lg:right-8 lg:bottom-8 font-semibold text-white flex items-center justify-center space-x-4 bg-viridian-green/50 backdrop-blur-lg fill-white shadow-md border-solid border-[3px] border-viridian-green transition duration-300 quintic-out hover:cursor-pointer hover:scale-110 hover:bg-caribbean-green hover:border-white`}
            >
            <Whatsapp size={32}/>
            <p className={"max-md:hidden"}>¡Contáctanos!</p>
        </a>
    );
}