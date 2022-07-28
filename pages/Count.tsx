import React from 'react';
import {useAtom} from "jotai";
import {incrementCountAtom} from "../atoms";

const Count = () => {
    const [count, increment] = useAtom(incrementCountAtom)
    return (
        <>
            {count}
            <button onClick={increment}>Add</button>
        </>
    )
}

export default Count