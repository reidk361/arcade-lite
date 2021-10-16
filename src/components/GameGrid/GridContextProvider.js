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
  let movingPieceName = '';

  const setPiece = (newCoords) => {
    const newGrid = [...gridState];
    const chosenPiece = piece(movingPieceName, newCoords.x, newCoords.y);
    chosenPiece.coords.forEach((coord) => {
      newGrid[coord[0]][coord[1]] = 1;
    });
    setGridState(() => newGrid);
  };

  const removePiece = (oldCoords) => {
    const newGrid = [...gridState];
    const chosenPiece = piece(movingPieceName, oldCoords.x, oldCoords.y);
    console.log('movingPieceName remove piece is: ', movingPieceName);
    console.log('chsoen piece in 29 is: ', chosenPiece);
    chosenPiece.coords.forEach((coord) => {
      newGrid[coord[0]][coord[1]] = 0;
    });
    setGridState(() => newGrid);
  };

  const stopPiece = () => {
    const newGrid = [...gridState];
    setGridState(() => newGrid);
  };

  const startPieceMove = (shouldStop) => {
    const pieces = ['square', 'long', 't-shape', 'l', 'j', 's', 'z'];
    const selectedName =
      pieces[Math.floor(Math.random() * (pieces.length - 1))];
    //const selectedName = pieces[0];
    movingPieceName = selectedName;
    console.log('movingPieceName in statPiece is: ', movingPieceName);
    const chosenPiece = piece(movingPieceName, 0, 0);
    setPieceName(movingPieceName);
    console.log('should be moving: ', movingPieceName);
    const spawnLocation = chosenPiece.spawn;
    setPieceXY({ x: spawnLocation, y: 0 });
    setPiece({ x: spawnLocation, y: 0 });

    const helper = async (shouldStop) => {
      if (shouldStop) {
        stopPiece();
        return;
      }
      setTimeout(() => {
        movePiece({ x: 0, y: +1 });
        helper(shouldStop);
      }, 500);
    };
    helper(shouldStop);
  };

  const tetrisClear = () => {
    const newGrid = [...gridState];
    let count = 0;
    const rows = [];

    for (let i = 0; i < GRID_HEIGHT; i++) {
      for (let j = 0; j < GRID_WIDTH; j++) {
        if (newGrid[j][i] !== 0) {
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

  const movePiece = (diff) => {
    return setPieceXY((prevState) => {
      const newCoords = { x: prevState.x + diff.x, y: prevState.y + diff.y };

      const checkPieceMove = () => {
        if (
          newCoords.x < 0 ||
          newCoords.x > GRID_WIDTH - piece(movingPieceName, newCoords).border.right
        ) {
          return false;
        }
        const checkCoords = piece(movingPieceName, newCoords.x, newCoords.y);
        let flag = true;
        console.log(checkCoords);
        checkCoords.coords.forEach((pair) => {
          if (gridState[pair[0]][pair[1]] !== 0) {
            flag = false;
          }
        });
        return flag;
      };

      removePiece(prevState);

      if (checkPieceMove()) {
        setPiece(newCoords);
        return newCoords;
      } else {
        setPiece(prevState);
        if (
          prevState.y < newCoords.y ||
          newCoords.y >
            GRID_HEIGHT - piece(movingPieceName, newCoords).border.bottom
        ) {
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
