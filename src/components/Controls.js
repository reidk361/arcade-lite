import { GridContext } from "./GameGrid/GridContextProvider";
import { useContext } from "react";

export default function Controls(props) {
  //TODO move this where apropriate and name

  const movePiece = (diff) =>
    setPieceXY((prevState) => {
      removePiece("square", prevState);
      const newCoords = { x: prevState.x + diff.x, y: prevState.y + diff.y };
      setPiece("square", newCoords);
      return newCoords;
    });

  const { setPiece, pieceXY, setPieceXY, removePiece } =
    useContext(GridContext);

  const startGame = () => {
    if (pieceXY.x > 17 || pieceXY.y > 17) {
      return;
    }

    setPiece("square", pieceXY);
    const helper = () => {
      setTimeout(() => {
        movePiece({ x: +1, y: 0 });
        helper();
      }, 1000);
    };
    helper();
  };

  function handleControls(e) {
    const clickButtons = e.target.attributes.id.textContent;
    const clickKey = e.keyCode;
    if (clickButtons === "left-button" || clickKey === 37) {
      movePiece({ x: 0, y: -1 });
    } else if (clickButtons === "right-button" || clickKey === 39) {
      movePiece({ x: 0, y: +1 });
    } else if (clickButtons === "rotate-button" || clickKey === 32) {
      alert("rotate");
    } else if (clickButtons === "down-button" || clickKey === 40) {
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
      <h2 onClick={startGame} style={{ margin: "10px" }}>
        {" "}
        START{" "}
      </h2>
    </div>
  );
}
