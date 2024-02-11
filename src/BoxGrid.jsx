import { useState } from "react";
import Box from "./Box";
import uniqid from "uniqid";

function BoxGrid() {
    const [boxes, setboxes] = useState(Array(9)
    .fill({})
    .map(() => ({ isActive: false, key: uniqid() })));
    const Reset = () => setboxes(Array(9)
        .fill({})
        .map(() => ({ isActive: false, key: uniqid() })));
   
    const toggleBox = (idx) => {
        setboxes((oldboxes) => {
           return oldboxes.map((value, i) => {
                if (i === idx) {
                    return !value
                } else {
                    return value
                }
            });
    });
    }
    
    return (
        <div className="BoxGrid">
            {boxes.map((b, idx) => (
                <Box key={ uniqid} isActive={b} toggle={() => toggleBox(idx)}
                />))}
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default BoxGrid;