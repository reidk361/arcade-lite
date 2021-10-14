import React, { useState, createContext } from 'react';
import piece from '../helpers/piece';

export const GridContext = createContext();
const GridContextProvider = ({ children }) => {
  const GRID_HEIGHT = 20;
  const GRID_WIDTH = 12;
  const emptyGrid = Array.from(Array(GRID_HEIGHT), () => new Array(GRID_WIDTH).fill(0));
  const [gridState, setGridState] = useState(emptyGrid);
  const [pieceXY, setPieceXY] = useState({x: 0, y: 0});

  const setPiece = (pieceName, newCoords) => {
    const newGrid = [...gridState];
    piece(pieceName, newCoords.x, newCoords.y).forEach(coord => {
      newGrid[coord[0]][coord[1]] = 1;
    });
    setGridState(() => newGrid);
  }

  const removePiece = (pieceName, oldCoords) => {
    const newGrid = [...gridState];
    piece(pieceName, oldCoords.x, oldCoords.y).forEach(coord => {
      newGrid[coord[0]][coord[1]] = 0;
    });
    setGridState(()=> newGrid);
  }

  const stopPiece = () => {
    const newGrid = [...gridState];
    setGridState(() => newGrid);
  }


  return (
    <GridContext.Provider
      value={{
        gridState: gridState,
        pieceXY: pieceXY,
        setGridState: setGridState,
        setPiece: setPiece,
        setPieceXY: setPieceXY,
        removePiece: removePiece,
        stopPiece: stopPiece
      }}
    >
      {children}
    </GridContext.Provider>
  );
};
export default GridContextProvider;
