type _CProps = {
    className?: string,
    overrideBackgroundAndBorder?: string,
    overrideRing?: string,
    overrideText?: string,
    name?: string,
    required?: boolean,
}

const _defaults: { [key: string]: string } = {
    "background&border": "bg-neutral-200/20 border-neutral-400 checked:bg-GO-green/20 checked:border-GO-green/20",
    "ring": "focus:ring-offset-0 focus:ring-GO-green focus:border-0",
    "text": "text-GO-green/30",
}

export const Checkbox = (props: _CProps) => {

    const baseClassName: string = `h-4 aspect-square rounded-sm border-2 border-solid ${props.overrideBackgroundAndBorder || _defaults["background&border"]} ${props.overrideRing || _defaults["ring"]} ${props.overrideText || _defaults["text"]}`;
    const finalClassName: string = `relative z-10 ${baseClassName} ${props.className}`;

    return (
        <input type={"checkbox"} className={finalClassName} name={props.name} required={props.required}/>);


}