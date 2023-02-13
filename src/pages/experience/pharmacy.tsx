import {NextPage} from "next";
import Navbar from "../../components/Navbar";

const Pharmacy : NextPage = () => {
    return (
        <main>
            <Navbar selection={"1"} context={"shop"} />
        </main>
    );
}

export default Pharmacy;