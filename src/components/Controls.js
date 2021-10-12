import { GridContext } from './GameGrid/GridContextProvider';
import { useContext } from 'react';

export default function Controls(props) {
  const startGame = () => {
    if(pieceXY.x > 19 || pieceXY.y > 19){
      return;
    }

    setTimeout(() => {
      setPiece('square');
      setPieceXY({x: ++pieceXY.x, y: pieceXY.y});
      startGame();
    } ,1000)
  }

  function onKeyDown(e) {
    // eslint-disable-next-line default-case
    switch (e.keyCode) {
      case 37:
        alert('left');
        break;
      case 38:
        alert('up');
        break;
      case 39:
        alert('right');
        break;
      case 40:
        alert('down');
        break;
    }
  }
  const { setPiece, pieceXY, setPieceXY } = useContext(GridContext);
  return (
    <div className="controls">
      {/* left */}
      <button
        className="control-button"
        onClick={onKeyDown}
        onKeyDown={onKeyDown}
      >
        left
      </button>
      {/* right */}
      <button
        className="control-button"
        onClick={onKeyDown}
        onKeyDown={onKeyDown}
      >
        right
      </button>
      {/* up */}
      <button
        className="control-button"
        onClick={onKeyDown}
        onKeyDown={onKeyDown}
      >
        up
      </button>
      {/* down */}
      <button
        className="control-button"
        onClick={onKeyDown}
        onKeyDown={onKeyDown}
      >
        down
      </button>
      <h2
        onClick={startGame}
        style={{ margin: '10px' }}
      >
        {' '}
        START{' '}
      </h2>
    </div>
  );
}


