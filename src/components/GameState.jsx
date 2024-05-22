import React from "react";

const GameState = ({ gameState, winner, onReset }) => {
  return (
    <div className="state">
      <button className="play-btn" onClick={onReset}>
        Play Again
      </button>
      <div className={`${winner === "X" ? "x-win" : "o-win"}`}>{gameState}</div>
    </div>
  );
};

export default GameState;
