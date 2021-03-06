import { GridContext } from "./GameGrid/GridContextProvider";
import { useContext } from "react";

export default function Controls(props) {
  const { start, setStart } = useContext(GridContext);
  //TODO move this where appropriate and name
  const { startPieceMove, movePiece, pieceName } = useContext(GridContext);

  function handleControls(e) {
    if (e.target.attributes.id.textContent === "START" || e.keyCode === 76) {
      if (start === false) {
        setStart(true);
        startPieceMove();
      }
    }
    if (
      e.target.attributes.id.textContent === "left-button" ||
      e.keyCode === 37
    ) {
      if (start === false) {
        alert(
          "You need to press the START button to begin the game and move the pieces!"
        );
      } else if (start === true) {
        movePiece({ x: -1, y: 0 }, pieceName);
      }
    }
    if (
      e.target.attributes.id.textContent === "right-button" ||
      e.keyCode === 39
    ) {
      if (start === false) {
        alert(
          "You need to press the START button to begin the game and move the pieces!"
        );
      } else if (start === true) {
        movePiece({ x: +1, y: 0 }, pieceName);
      }
    }
    if (
      e.target.attributes.id.textContent === "rotate-button" ||
      e.keyCode === 32
    ) {
      alert("rotate");
    }
    if (
      e.target.attributes.id.textContent === "down-button" ||
      e.keyCode === 40
    ) {
      if (start === false) {
        alert(
          "You need to press the START button to begin the game and move the pieces!"
        );
      } else if (start === true) {
        movePiece({ x: 0, y: +1 }, pieceName, true);
      }
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
        Left
      </button>
      <br/>
      {/* right */}
      <button
        id="right-button"
        className="control-button"
        onClick={handleControls}
        onKeyDown={handleControls}
      >
        Right
      </button>
      <br/>
      {/* down */}
      <button
        id="down-button"
        className="control-button"
        onClick={handleControls}
        onKeyDown={handleControls}
      >
        Down
      </button>
      <br/>
      <button
        onClick={handleControls}
        onKeyDown={handleControls}
        id="START"
      >
        START
      </button>
      

    </div>
  );
}
