import React from "react";

const Board = ({ tiles }) => {
  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <div key={index} className={`tile ${tile.className}`}>
          X
        </div>
      ))}
    </div>
  );
};

export default Board;
