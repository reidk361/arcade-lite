import { useContext } from "react";
import { GridContext } from "../GameGrid/GridContextProvider";

const StartOver = () => {
    const { gridState, setGridState, SCORE } = useContext(GridContext);
}