import { GridContext } from "./GameGrid/GridContextProvider";
import { useContext } from "react";

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

  function handleControls(e) {
    // eslint-disable-next-line default-case
    switch (e.keyCode) {
      case 37:
        alert("left");
        break;
      case 32:
        alert("rotate");
        break;
      case 39:
        alert("right");
        break;
      case 40:
        alert("down");
        break;
    }
    // eslint-disable-next-line default-case
    switch (e.target.attributes.id.textContent) {
      case "left-button":
        alert("left");
        break;
      case "rotate-button":
        alert("rotate");
        break;
      case "right-button":
        alert("right");
        break;
      case "down-button":
        alert("down");
        break;
    }
  }
  const { setPiece, pieceXY, setPieceXY } = useContext(GridContext);
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
      <h2
        onClick={startGame}
        style={{ margin: '10px' }}
      >
        {" "}
        START{" "}
      </h2>
    </div>
  );
}


