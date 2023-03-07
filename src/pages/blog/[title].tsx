import {useRouter} from "next/router";

export const title = () => {
    const router = useRouter();
    const {title} = router.query;

    return (
        <main>
            {title}
        </main>
    );
}

export default title;