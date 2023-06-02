import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState, useCallback, Component  } from "react";

function CoundTimer({maxRange}) {
        const [counter, setCounter] = useState(maxRange);

    useEffect(() => {
        if(counter > 0){
            setTimeout(() => setCounter(counter - 1), 1000 * 60 * 24);
        }
    }, [counter]);

    return(
        <>
            <p>{counter}</p>
        </>
    )
}

export default CoundTimer;