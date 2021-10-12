import { GridContext } from './GameGrid/GridContextProvider';
import { useContext } from 'react';

export default function Controls(props) {

  //TODO move this where apropriate and name

  const movePiece = (diff) => setPieceXY((prevState) => {
    removePiece('square', prevState);
    const newCoords = { x: prevState.x + diff.x, y: prevState.y + diff.y }
    setPiece('square', newCoords);
    return newCoords;
  });  


  const { setPiece, pieceXY, setPieceXY, removePiece } =
    useContext(GridContext);

  const startGame = () => {
    if (pieceXY.x > 17 || pieceXY.y > 17) {
      return;
    }

    setPiece('square', pieceXY);
    const helper = () => {
      setTimeout(() => {
        movePiece({x: +1, y: 0})
        helper();
      }, 1000);
    }
    helper();
  };

  function handleControls(e) {
    //TODO: Combine cases;
    // eslint-disable-next-line default-case
    switch (e.keyCode) {
      case 37:
        movePiece({x: 0, y: +1})
        break;
      case 32:
        alert('rotate');
        break;
      case 39:
       
        break;
      case 40:
        alert('down');
        break;
    }
    // eslint-disable-next-line default-case
    switch (e.target.attributes.id.textContent) {
      case 'left-button':
        removePiece('square');
        movePiece({x: 0, y: -1})

        setPiece('square');
        break;
      case 'rotate-button':
        alert('rotate');
        break;
      case 'right-button':
        console.log('hoping to go right')
        movePiece({x: 0, y: +1})
        break;
      case 'down-button':
        alert('down');
        break;
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
      <h2 onClick={startGame} style={{ margin: '10px' }}>
        {' '}
        START{' '}
      </h2>
    </div>
  );
}
