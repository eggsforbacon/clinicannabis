import Link from "next/link";
import {useRouter} from "next/router";

const Localize = () => {
    const {locales, locale, pathname, query, asPath} = useRouter();
    const otherLocales = locales?.filter((l) => l !== locale);

    return (
        <>
            {otherLocales!.map((locale) => {
                return (
                    <Link
                        key={locale}
                        href={{pathname, query}}
                        as={asPath}
                        locale={locale}>
                        <a>{locale}</a>
                    </Link>
                );
            })}
        </>
    );
}

export default Localize;