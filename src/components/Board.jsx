import React from "react";

const Board = ({ tiles, handleTileClick, strick, winner }) => {
  const getStrickClass = winner === "X" ? "x-strick" : "o-strick";
  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <div
          key={index}
          className={`tile ${tile.className} ${
            tile.value && tile.value === "X" ? "x-color" : "o-color"
          }`}
          onClick={() => handleTileClick(index)}
        >
          {tile.value}
        </div>
      ))}
      <div className={`${getStrickClass} ${strick} `}></div>
    </div>
  );
};

export default Board;
