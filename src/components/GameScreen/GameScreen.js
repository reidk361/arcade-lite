import GameGrid from "../GameGrid/GameGrid";
import { useContext } from "react";
import { GridContext } from "../GameGrid/GridContextProvider";
import EndGame from "../EndGame/EndGame";

const GameScreen = () => (
    <div id="grid-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <GameGrid />
        {useContext(GridContext).isEnd && <EndGame />}
    </div>
);

export default GameScreen;