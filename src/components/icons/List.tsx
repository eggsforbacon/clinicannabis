import * as React from "react"
import { SVGProps } from "react"
const List = (props: SVGProps<SVGSVGElement> & {size? : number}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 16 16"
        fill={props.fill ?? "currentColor"}
        className="bi bi-list"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            className={props.className}
        />
    </svg>
)
export default List
