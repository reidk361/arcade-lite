import React, { useState, createContext } from 'react';
import piece from '../helpers/piece';

export const GridContext = createContext();
const GridContextProvider = ({ children }) => {
  const GRID_HEIGHT = 20;
  const GRID_WIDTH = 12;
  //builds grid from array width/height
  const emptyGrid = Array.from(Array(GRID_WIDTH), () =>
    new Array(GRID_HEIGHT).fill(0)
  );
  const [gridState, setGridState] = useState(emptyGrid);
  const [pieceXY, setPieceXY] = useState({ x: 0, y: 0 });
  const [SCORE, setSCORE] = useState(0);
  const [pieceName, setPieceName] = useState('');
  const [isEnd, setIsEnd] = useState(false);
  let movingPieceName = '';

  //sets a piece at the new coords. if there is a name included (from the controls component) then it uses that name for the piece
  //places 1's at the piece's coords
  const setPiece = (newCoords, nameOfPiece) => {
    const newGrid = [...gridState];
    const chosenPiece = piece(
      nameOfPiece ? nameOfPiece : movingPieceName,
      newCoords.x,
      newCoords.y
    );
    chosenPiece.coords.forEach((coord) => {
      newGrid[coord[0]][coord[1]] = chosenPiece.number;
    });
    setGridState(() => newGrid);
  };

  //same as setPiece but places 0's at the old coords
  const removePiece = (oldCoords, nameOfPiece) => {
    const newGrid = [...gridState];
    const chosenPiece = piece(
      nameOfPiece ? nameOfPiece : movingPieceName,
      oldCoords.x,
      oldCoords.y
    );
    chosenPiece.coords.forEach((coord) => {
      newGrid[coord[0]][coord[1]] = 0;
    });
    setGridState(() => newGrid);
  };

  //copies state and makes no new pieces
  const stopPiece = () => {
    const newGrid = [...gridState];
    setGridState(() => newGrid);
  };

  //starts piece movement on the board as well as after a piece stops on the board
  const startPieceMove = (shouldStop) => {
    //randomizes piece name selection
    const pieces = ['square', 'long', 't-shape', 'l', 'j', 's', 'z'];
    const selectedName =
      pieces[Math.floor(Math.random() * (pieces.length - 1))];
    movingPieceName = selectedName;
    //gets piece properties
    const chosenPiece = piece(movingPieceName, 0, 0);
    setPieceName(movingPieceName);
    const spawnLocation = chosenPiece.spawn;
    setPieceXY({ x: spawnLocation, y: 0 });
    //sets piece at spawn location
    setPiece({ x: spawnLocation, y: 0 });
    //helper is called to repeatedly move the piece down
    const helper = async (shouldStop) => {
      if (shouldStop) {
        //copies grid, ends timeout
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

  //after piece is placed at the bottom of the grid or on another piece, this function is called to check for filled rows
  const tetrisClear = () => {
    const newGrid = [...gridState];
    let count = 0;
    const rows = [];

    //check each y index row for grid squares that don't contain a 0, add to count. 
    //if count is == GRID_WIDTH splice row. unshift spliced rows with 0's
    //returns number of rows cleared
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

  //moves piece down, left, or right
  const movePiece = (diff, nameOfPiece) => {
    return setPieceXY((prevState) => {
      //gets new coords of piece placement
      const newCoords = { x: prevState.x + diff.x, y: prevState.y + diff.y };
      //checks if new piece placement is valid
      const checkPieceMove = () => {
        //check if piece placement is outside of grid's x coord borders
        if (
          newCoords.x < 0 ||
          newCoords.x >
            GRID_WIDTH -
              piece(nameOfPiece ? nameOfPiece : movingPieceName, newCoords)
                .border.right
        ) {
          return false;
        }
        //get piece's properties to check borders
        const checkCoords = piece(
          nameOfPiece ? nameOfPiece : movingPieceName,
          newCoords.x,
          newCoords.y
        );
        let flag = true;
        //check each of the new piece's coords for invalid placement. if there is an invalid placement - set false flag
        checkCoords.coords.forEach((pair) => {
          if (gridState[pair[0]][pair[1]] !== 0) {
            flag = false;
          }
        });
        return flag;
      };

      //place 0's at old coords - if there's a name from controls component, use that
      removePiece(prevState, nameOfPiece ? nameOfPiece : movingPieceName);

      if (checkPieceMove()) {
        //if move is valid, set piece at new coords
        setPiece(newCoords, nameOfPiece ? nameOfPiece : movingPieceName);
        return newCoords;
      } else {
        //if move is invalid, set piece at old coords
        setPiece(prevState, nameOfPiece ? nameOfPiece : movingPieceName);
        if (
          //if attempted movement is down, or piece is at the bottom of the board, check tetris, set score, start new piece
          prevState.y < newCoords.y ||
          newCoords.y >
            GRID_HEIGHT -
              piece(nameOfPiece ? nameOfPiece : movingPieceName, newCoords)
                .border.bottom
        ) {
          if(newCoords.y === 1){
            endGame();
          } else {
            const rowsCleared = tetrisClear();
            setSCORE((prevState) => prevState + 100 * rowsCleared);
            startPieceMove(true);
          }
        }
        //return the previous state as the pieceXY
        return prevState;
      }
    });
  };

  const endGame = () => {
    console.log('made it to endGame')
    setIsEnd(isEnd => !isEnd);
    const newGrid = [...gridState];
    setGridState(newGrid);
  }

  return (
    <GridContext.Provider
      value={{
        gridState: gridState,
        pieceXY: pieceXY,
        SCORE: SCORE,
        pieceName: pieceName,
        isEnd: isEnd,
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
