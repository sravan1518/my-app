import { useState } from "react";
import { getRolls } from "./Utils";
import Dice from "./Dice";
import { sum } from "./Utils";
import Button from "./Button";
function LuckyN({ title="Dice Game" ,numDice = 2, winCheck,color="slateblue"}) {
    
    const [dice, setDice] = useState(getRolls(numDice));
    const roll = () => setDice(getRolls(numDice));
    const isWinner = winCheck(dice);
    return (
        <main className="LuckyN">
            <h1>{title} : {isWinner && "You Win!"} </h1>
            <Dice dice={dice} color={color}/>
            <Button clickFunc={roll} label="Re-Roll"/>
        </main>
    );

}

export default LuckyN;