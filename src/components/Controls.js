import { GridContext } from "./GameGrid/GridContextProvider";
import { useContext } from "react";

export default function Controls(props) {
  //TODO move this where apropriate and name

  const movePiece = (diff) =>
    setPieceXY((prevState) => {
      if( prevState.y + diff.y > 10 || prevState.y + diff.y < 0){
        return prevState;
      }
      if( prevState.x + diff.x > 18){
        startGame(prevState.x + diff.x);
        return prevState;
      }
      removePiece("square", prevState);
      const newCoords = { x: prevState.x + diff.x, y: prevState.y + diff.y };
      setPiece("square", newCoords);
      return newCoords;
    });

  const { setPiece, pieceXY, setPieceXY, removePiece, stopPiece } =
    useContext(GridContext);

  const startGame = (position) => {
    setPieceXY({x: 0, y: 0})
    setPiece("square", pieceXY);
    const helper = (position) => {
      // console.log('piece is: ', );
      if( position > 17){
        console.log('made it here!');
        stopPiece();
        return;
      }
      setTimeout(() => {
        movePiece({ x: +1, y: 0 });
        helper();
      }, 500);
    };
    helper(position);
  };

  function handleControls(e) {
    if (e.target.attributes.id.textContent === "START" || e.keyCode === 76) {
      startGame();
    } else if (e.target.attributes.id.textContent === "left-button" || e.keyCode === 37) {
      movePiece({ x: 0, y: -1 });
    } else if (e.target.attributes.id.textContent === "right-button" || e.keyCode === 39) {
      movePiece({ x: 0, y: +1 });
    } else if (e.target.attributes.id.textContent === "rotate-button" || e.keyCode === 32) {
      alert("rotate");
    } else if (e.target.attributes.id.textContent === "down-button" || e.keyCode === 40) {
      alert("down");
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
      <button onClick={handleControls} onKeyDown={handleControls} id="START" style={{ margin: "10px" }}>
        START
      </button>
    </div>
  );
}
