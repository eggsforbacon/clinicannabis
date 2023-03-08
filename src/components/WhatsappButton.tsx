import {Whatsapp} from "react-bootstrap-icons";

export const WhatsappButton = () => {
    return (
        <button
            className={"max-md:hidden py-4 rounded-full px-10 z-40 fixed right-8 bottom-8 font-semibold text-white flex items-center justify-center space-x-4 bg-viridian-green/50 backdrop-blur-lg fill-white shadow-md border-solid border-[3px] border-viridian-green transition duration-300 quintic-out hover:cursor-pointer hover:scale-110 hover:bg-caribbean-green hover:border-white"}
            onClick={() => window.open("https://wa.me/+573174834360", "_blank")}>
            <Whatsapp size={32}/>
            <p>¡Contáctanos!</p>
        </button>
    );
}