import React, { useState, createContext } from 'react';
import piece from '../helpers/piece';

export const GridContext = createContext();
const GridContextProvider = ({ children }) => {
  const GRID_HEIGHT = 20;
  const GRID_WIDTH = 12;
  const emptyGrid = Array.from(Array(GRID_WIDTH), () => new Array(GRID_HEIGHT).fill(0));
  const [gridState, setGridState] = useState(emptyGrid);
  const [pieceXY, setPieceXY] = useState({x: 0, y: 0});
  const [SCORE, setSCORE] = useState(0);

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

  const startPieceMove = (ifContinue) => {
    const randNum = Math.floor(Math.random() * 11);
    setPieceXY({ x: randNum, y: 0 });
    setPiece('square',{ x: randNum, y: 0 });
    const helper = async (ifContinue) => {
      if (ifContinue) {
        stopPiece();
        return;
      }
      setTimeout(() => {
        movePiece({ x: 0, y: +1 });
        helper();
      }, 500);
    };
    helper(ifContinue);
  };

  const ifTetris = () => {
    const newGrid = [...gridState];
    let count = 0;
    const rows = [];
    
    for(let i = 0; i < GRID_HEIGHT; i++){
      for(let j = 0; j < GRID_WIDTH; j++){
        if(newGrid[j][i] !== 0){
          count++;
        }
      }
      if(count === GRID_WIDTH){
        rows.push(i);
        count = 0;
      } else {
        count = 0;
      }
    }
    rows.forEach((row) => {
      for(let i = 0; i < GRID_WIDTH; i++){
        newGrid[i].splice(row, 1);
        newGrid[i].unshift(0);
      }
      setSCORE((score) => (score + 100));
    })
    setGridState(newGrid);
    console.log('score is: ', SCORE);
  };

  const movePiece = (diff) =>{
    return setPieceXY((prevState) => {
        const newCoords = { x: prevState.x + diff.x, y: prevState.y + diff.y };
     
        if (newCoords.y > (GRID_HEIGHT - 2)) {
          ifTetris();
          startPieceMove(true);
          return prevState;
        }
     
        const checkPieceMove = () => {
          if(newCoords.x < 0 || newCoords.x > (GRID_WIDTH - 2)){
            return false;
          }
          const checkCoords = piece('square', newCoords.x, newCoords.y);
          let flag = true;
          checkCoords.forEach((pair) => {
            if (gridState[pair[0]][pair[1]] !== 0) {
              flag = false;
            }
          });
          return flag;
        };
     
        removePiece('square', prevState);
     
        if (checkPieceMove()) {
          setPiece('square', newCoords);
          return newCoords;
        } else {
          setPiece('square', prevState);
          if (prevState.y < newCoords.y) {
            ifTetris();
            startPieceMove(true);
          }
          return prevState;
        }
      });

}


  return (
    <GridContext.Provider
      value={{
        gridState: gridState,
        pieceXY: pieceXY,
        SCORE: SCORE,
        setGridState: setGridState,
        setPiece: setPiece,
        setPieceXY: setPieceXY,
        setSCORE: setSCORE,
        removePiece: removePiece,
        stopPiece: stopPiece,
        startPieceMove: startPieceMove,
        movePiece: movePiece,
        ifTetris: ifTetris,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};
export default GridContextProvider;
