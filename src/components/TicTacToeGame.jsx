import React, { useState, useEffect } from "react";
import Board from "./Board";
import winningPatterns from "../entities/winningPatterns";
const TicTacToeGame = () => {
  const [strick, setStrick] = useState("");
  const [winner, setWinner] = useState("");
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
        console.log(strick);
        return;
      }
    }
  };

  useEffect(() => {
    calculateWinner(tiles);
  }, [tiles]);

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
        <Board
          tiles={tiles}
          handleTileClick={handleTileClick}
          strick={strick}
          winner={winner}
        />
      </div>
    </>
  );
};

export default TicTacToeGame;
