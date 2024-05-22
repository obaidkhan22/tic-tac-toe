import React, { useState } from "react";
import Board from "./Board";

const TicTacToeGame = () => {
  const [tiles, setTiles] = useState([
    { value: null, className: "bottom-border right-border" },
    { value: null, className: "bottom-border right-border" },
    { value: null, className: "bottom-border" },
    { value: null, className: "bottom-border right-border" },
    { value: null, className: "bottom-border right-border" },
    { value: null, className: "bottom-border" },
    { value: null, className: "right-border" },
    { value: null, className: " right-border" },
    { value: null },
  ]);
  const [xIsNext, setXisNext] = useState(true);

  const handleTileClick = (index) => {
    const newTiles = [...tiles];
    tiles[index].value = xIsNext ? "X" : "O";
    setXisNext(!xIsNext);
    setTiles(newTiles);
  };
  return (
    <>
      <h1>Tic-Tac-Toe Game</h1>
      <div className="game">
        <Board tiles={tiles} handleTileClick={handleTileClick} />
      </div>
    </>
  );
};

export default TicTacToeGame;
