import {Search} from "react-bootstrap-icons";

export const SearchBar = (
    props: {
        className? : string
    }) => {
    return (
        <section className={props.className + " relative flex items-center px-4 justify-between overflow-hidden"}>
            <Search />
            <input type={"text"} className={"focus:ring-0 h-full w-11/12 bg-transparent border-none"}/>
        </section>
    );
}