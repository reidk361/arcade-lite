import { GridContext } from './GameGrid/GridContextProvider';
import { useContext } from 'react';

export default function Controls(props) {
  //TODO move this where apropriate and name
  const { startPieceMove, movePiece, pieceName } =
    useContext(GridContext);

  function handleControls(e) {
    if (e.target.attributes.id.textContent === 'START' || e.keyCode === 76) {
      startPieceMove();
    } else if (
      e.target.attributes.id.textContent === 'left-button' ||
      e.keyCode === 37
    ) {
      movePiece({ x: -1, y: 0 }, pieceName);
    } else if (
      e.target.attributes.id.textContent === 'right-button' ||
      e.keyCode === 39
    ) {
      movePiece({ x: +1, y: 0 }, pieceName);
    } else if (
      e.target.attributes.id.textContent === 'rotate-button' ||
      e.keyCode === 32
    ) {
      alert('rotate');
    } else if (
      e.target.attributes.id.textContent === 'down-button' ||
      e.keyCode === 40
    ) {
      movePiece({ x: 0, y: +1 }, pieceName, true);
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
