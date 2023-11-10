import * as React from "react"
import {SVGProps} from "react"

const ChevronLeft = (props: SVGProps<SVGSVGElement> & { size?: number }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 16 16"
        fill="currentColor"
        className="bi bi-chevron-right"
        {...props}
    >
        <path fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              className={props.className}
        />
    </svg>
)
export default ChevronLeft
