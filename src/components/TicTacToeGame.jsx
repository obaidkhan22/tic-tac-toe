import React, { useState, useEffect } from "react";
import Board from "./Board";
import winningPatterns from "../entities/winningPatterns";
const TicTacToeGame = () => {
  const [strick, setStrick] = useState("");
  const [winner, setWinner] = useState("");
  const [gameState, setGameState] = useState("");
  const defaultTiles = [
    { value: null, className: "bottom-border right-border" },
    { value: null, className: "bottom-border right-border" },
    { value: null, className: "bottom-border" },
    { value: null, className: "bottom-border right-border" },
    { value: null, className: "bottom-border right-border" },
    { value: null, className: "bottom-border" },
    { value: null, className: "right-border" },
    { value: null, className: " right-border" },
    { value: null },
  ];
  const [tiles, setTiles] = useState(defaultTiles);
  const calculateWinner = (tiles) => {
    for (const { combo, strick } of winningPatterns) {
      let tileValue1 = tiles[combo[0]].value;
      let tileValue2 = tiles[combo[1]].value;
      let tileValue3 = tiles[combo[2]].value;
      if (
        tileValue1 &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
      ) {
        setWinner(tileValue1 === "X" ? "X" : "O");
        setStrick(strick);
        setGameState(tileValue1 === "X" ? "X wins." : "O wins.");
        console.log(strick);
        return;
      }
    }
    const allFieldFilled = tiles.every((tile) => tile.value !== null);
    if (allFieldFilled) {
      setGameState("Game Draw.");
    }
  };

  useEffect(() => {
    calculateWinner(tiles);
  }, [tiles]);

  const [xIsNext, setXisNext] = useState(true);

  const handleTileClick = (index) => {
    if (winner || tiles[index].value !== null) return;
    const newTiles = [...tiles];
    tiles[index].value = xIsNext ? "X" : "O";
    setXisNext(!xIsNext);
    setTiles(newTiles);
  };

  const onReset = () => {
    setTiles(defaultTiles);
    setStrick("");
    setWinner("");
  };
  return (
    <>
      <div className="game">
        <h1>Tic-Tac-Toe Game</h1>
        <Board
          tiles={tiles}
          handleTileClick={handleTileClick}
          strick={strick}
          winner={winner}
          xIsNext={xIsNext}
          gameState={gameState}
          onReset={onReset}
        />
      </div>
    </>
  );
};

export default TicTacToeGame;
