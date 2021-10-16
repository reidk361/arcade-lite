import React, { useState, createContext } from 'react';
import piece from '../helpers/piece';

export const GridContext = createContext();
const GridContextProvider = ({ children }) => {
  const GRID_HEIGHT = 20;
  const GRID_WIDTH = 12;
  const emptyGrid = Array.from(Array(GRID_WIDTH), () =>
    new Array(GRID_HEIGHT).fill(0)
  );
  const [gridState, setGridState] = useState(emptyGrid);
  const [pieceXY, setPieceXY] = useState({ x: 0, y: 0 });
  const [SCORE, setSCORE] = useState(0);
  const [pieceName, setPieceName] = useState('');

  const setPiece = (pieceName, newCoords) => {
    const newGrid = [...gridState];
    const chosenPiece = piece(pieceName, newCoords.x, newCoords.y);
    chosenPiece.coords.forEach((coord) => {
      newGrid[coord[0]][coord[1]] = 1;
    });
    setGridState(() => newGrid);
  };

  const removePiece = (pieceName, oldCoords) => {
    const newGrid = [...gridState];
    const chosenPiece = piece(pieceName, oldCoords.x, oldCoords.y);
    chosenPiece.coords.forEach((coord) => {
      newGrid[coord[0]][coord[1]] = 0;
    });
    setGridState(() => newGrid);
  };

  const stopPiece = () => {
    const newGrid = [...gridState];
    setGridState(() => newGrid);
  };

  const startPieceMove = (ifContinue) => {
    const pieces = ['square', 'long', 't-shape', 'l', 'j', 's', 'z'];
    // const pieceName = pieces[Math.floor(Math.random() * (pieces.length - 1))];
    const selectedName = pieces[6];

    setPieceName(selectedName);
    const chosenPiece = piece(selectedName, 0, 0);
    const spawnLocation = chosenPiece.spawn;
    console.log('chosenPiece.spawn : ', spawnLocation);
    setPieceXY({ x: spawnLocation, y: 0 });
    setPiece(selectedName, { x: spawnLocation, y: 0 });
    const helper = async (ifContinue) => {
      if (ifContinue) {
        stopPiece();
        return;
      }
      setTimeout(() => {
        movePiece(selectedName, { x: 0, y: +1 });
        helper();
      }, 500);
    };
    helper(ifContinue);
  };

  const tetrisClear = () => {
    const newGrid = [...gridState];
    let count = 0;
    const rows = [];

    for (let i = 0; i < GRID_HEIGHT; i++) {
      for (let square = 0; square < GRID_WIDTH; square++) {
        if (newGrid[square][i] !== 0) {
          count++;
        }
      }
      if (count === GRID_WIDTH) {
        rows.push(i);
        count = 0;
      } else {
        count = 0;
      }
    }
    rows.forEach((row) => {
      for (let i = 0; i < GRID_WIDTH; i++) {
        newGrid[i].splice(row, 1);
        newGrid[i].unshift(0);
      }
    });
    setGridState(newGrid);

    return rows.length;
  };

  const movePiece = (selectedName, diff) => {
    return setPieceXY((prevState) => {
      const newCoords = { x: prevState.x + diff.x, y: prevState.y + diff.y };

      const checkPieceMove = () => {
        if (newCoords.x < 0 || newCoords.x > GRID_WIDTH - piece(selectedName, newCoords).border.right) {
          return false;
        }
        const checkCoords = piece(selectedName, newCoords.x, newCoords.y);
        let flag = true;
        checkCoords.coords.forEach((pair) => {
          if (gridState[pair[0]][pair[1]] !== 0) {
            flag = false;
          }
        });
        return flag;
      };

      removePiece(selectedName, prevState);

      if (checkPieceMove()) {
        setPiece(selectedName, newCoords);
        return newCoords;
      } else {
        setPiece(selectedName, prevState);
        if (prevState.y < newCoords.y || newCoords.y > GRID_HEIGHT - piece(selectedName, newCoords).border.bottom) {
          const rowsCleared = tetrisClear();
          setSCORE((prevState) => prevState + 100 * rowsCleared);
          startPieceMove(true);
        }
        return prevState;
      }
    });
  };

  return (
    <GridContext.Provider
      value={{
        gridState: gridState,
        pieceXY: pieceXY,
        SCORE: SCORE,
        pieceName: pieceName,
        setGridState: setGridState,
        setPiece: setPiece,
        setPieceXY: setPieceXY,
        setSCORE: setSCORE,
        removePiece: removePiece,
        stopPiece: stopPiece,
        startPieceMove: startPieceMove,
        movePiece: movePiece,
        tetrisClear: tetrisClear,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};
export default GridContextProvider;
