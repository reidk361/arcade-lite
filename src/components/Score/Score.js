import { useContext } from "react";
import { GridContext } from "../GameGrid/GridContextProvider";

const Score = () => {
    const { SCORE } = useContext(GridContext);
    return (
    <div>
        SCORE: {SCORE}
    </div>
)}

export default Score;