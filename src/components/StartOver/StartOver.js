import { useContext } from "react";
import { GridContext } from "../GameGrid/GridContextProvider";

const StartOver = () => {
    const { endGame } = useContext(GridContext);
    return (
        <button style={{height: 'fit-content'}} onClick={() => endGame(true)}>
            Start Over
        </button>
    );
};

export default StartOver;