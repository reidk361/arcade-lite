import { useContext } from "react";
import { GridContext } from "../GameGrid/GridContextProvider";

const Score = () => {
    const { SCORE } = useContext(GridContext);
    return (
    <h2>
        SCORE: {SCORE}
    </h2>
)}

export default Score;