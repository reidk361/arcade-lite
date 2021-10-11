import React, { useState, createContext } from 'react';
import piece from '../helpers/piece';

export const GridContext = createContext();
const GridContextProvider = ({ children }) => {
  const GRID_HEIGHT = 20;
  const GRID_WIDTH = 12;
  const emptyGrid = Array.from(Array(GRID_HEIGHT), () => new Array(GRID_WIDTH).fill(0));
  const [gridState, setGridState] = useState(emptyGrid);
  const [pieceXY, setPieceXY] = useState({x: 0, y: 0});

  const setPiece = (pieceName) => {
    const newGrid = gridState.map(x => x);
    piece(pieceName, pieceXY.x, pieceXY.y).forEach(coord => {
      newGrid[coord[0]][coord[1]] = 1;
    });
    setGridState(newGrid);
  }


  return (
    <GridContext.Provider
      value={{
        gridState: gridState,
        pieceXY: pieceXY,
        setGridState: setGridState,
        setPiece: setPiece,
        setPieceXY: setPieceXY
      }}
    >
      {children}
    </GridContext.Provider>
  );
};
export default GridContextProvider;
