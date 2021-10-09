import React from "react";

export default function Controls(props) {
  function onKeyDown(e) {
    // eslint-disable-next-line default-case
    switch (e.keyCode) {
      case 37:
        alert("left");
        break;
      case 38:
        alert("up");
        break;
      case 39:
        alert("right");
        break;
      case 40:
        alert("down");
        break;
    }
  }
  return (
    <div className="controls">
      {/* left */}
      <button className="control-button" onClick={onKeyDown} onKeyDown={onKeyDown}>
        left
      </button>
      {/* right */}
      <button className="control-button" onClick={onKeyDown} onKeyDown={onKeyDown}>
        right
      </button>
      {/* up */}
      <button className="control-button" onClick={onKeyDown} onKeyDown={onKeyDown}>
        up
      </button>
      {/* down */}
      <button className="control-button" onClick={onKeyDown} onKeyDown={onKeyDown}>
        down
      </button>
    </div>
  );
}
