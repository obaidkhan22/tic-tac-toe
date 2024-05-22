import React from "react";
import GameState from "./GameState";

const Board = ({
  tiles,
  handleTileClick,
  strick,
  winner,
  xIsNext,
  gameState,
  onReset,
}) => {
  const getStrickClass = winner === "X" ? "x-strick" : "o-strick";
  const getTileHoverClass = xIsNext ? "x-hover" : "o-hover";
  return (
    <>
      <div className="board">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${tile.className}  ${
              tile.value === null && getTileHoverClass
            } ${tile.value && tile.value === "X" ? "x-color" : "o-color"}`}
            onClick={() => handleTileClick(index)}
          >
            {tile.value}
          </div>
        ))}
        <div className={`${getStrickClass} ${strick} `}></div>
      </div>
      {(winner || gameState) && (
        <GameState gameState={gameState} winner={winner} onReset={onReset} />
      )}
    </>
  );
};

export default Board;
