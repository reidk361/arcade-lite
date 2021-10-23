import { useContext } from "react";
import { GridContext } from "../GameGrid/GridContextProvider";

const StartOver = () => {
    const { endGame } = useContext(GridContext);
    return (
        <div onClick={() => endGame(true)}>
            Start Over
        </div>
    );
};

export default StartOver;