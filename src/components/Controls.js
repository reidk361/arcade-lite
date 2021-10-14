import { GridContext } from './GameGrid/GridContextProvider';
import { useContext } from 'react';
import piece from './helpers/piece';

export default function Controls(props) {
  //TODO move this where apropriate and name
  const { setPiece, pieceXY, setPieceXY, removePiece, stopPiece, gridState } =
    useContext(GridContext);

  const movePiece = (diff) =>
    setPieceXY((prevState) => {
      const newCoords = { x: prevState.x + diff.x, y: prevState.y + diff.y };

      if (newCoords.y > 10 || newCoords.y < 0) {
        removePiece('square', prevState);
        return prevState;
      }

      if (newCoords.x > 18) {
        startPieceMove(true);
        return prevState;
      }

      const checkPieceMove = () => {
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
        if (prevState.x < newCoords.x) {
          startPieceMove(true);
        }
        return prevState;
      }
    });

  const startPieceMove = (ifContinue) => {
    setPieceXY({ x: 0, y: 0 });
    setPiece('square', pieceXY);
    const helper = (ifContinue) => {
      if (ifContinue) {
        stopPiece();
        return;
      }
      setTimeout(() => {
        movePiece({ x: +1, y: 0 });
        helper();
      }, 500);
    };
    helper(ifContinue);
  };

  function handleControls(e) {
    if (e.target.attributes.id.textContent === 'START' || e.keyCode === 76) {
      startPieceMove();
    } else if (
      e.target.attributes.id.textContent === 'left-button' ||
      e.keyCode === 37
    ) {
      movePiece({ x: 0, y: -1 });
    } else if (
      e.target.attributes.id.textContent === 'right-button' ||
      e.keyCode === 39
    ) {
      movePiece({ x: 0, y: +1 });
    } else if (
      e.target.attributes.id.textContent === 'rotate-button' ||
      e.keyCode === 32
    ) {
      alert('rotate');
    } else if (
      e.target.attributes.id.textContent === 'down-button' ||
      e.keyCode === 40
    ) {
      alert('down');
    }
  }

  return (
    <div className="controls">
      {/* left */}
      <button
        id="left-button"
        className="control-button"
        onClick={handleControls}
        onKeyDown={handleControls}
      >
        left
      </button>
      {/* right */}
      <button
        id="right-button"
        className="control-button"
        onClick={handleControls}
        onKeyDown={handleControls}
      >
        right
      </button>
      {/* rotate */}
      <button
        id="rotate-button"
        className="control-button"
        onClick={handleControls}
        onKeyDown={handleControls}
      >
        rotate
      </button>
      {/* down */}
      <button
        id="down-button"
        className="control-button"
        onClick={handleControls}
        onKeyDown={handleControls}
      >
        down
      </button>
      <button
        onClick={handleControls}
        onKeyDown={handleControls}
        id="START"
        style={{ margin: '10px' }}
      >
        START
      </button>
    </div>
  );
}
