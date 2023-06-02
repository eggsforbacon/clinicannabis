import React, {useEffect, useState, Dispatch, SetStateAction} from "react";

function CoundTimer({maxRange} : {maxRange : number}) {
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