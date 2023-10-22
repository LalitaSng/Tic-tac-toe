import { useState } from "react";
import "./styles.css";
import { getWinner } from "./util";
import Cell from "./Cell/Cell";
import Board from "./Board/Board";

export default function App() {
  const [winner, setWinner] = useState();
  const [player, setPlayer] = useState("x");
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);

  const handleClick = (row, col) => {
    if (board[row][col] != "") return;
    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[row][col] = player;
      const winner = getWinner(board, row, col, player);
      if (winner) setWinner(winner);
      return newBoard;
    });

    setPlayer(() => {
      return player === "x" ? "o" : "x";
    });
  };

  function handleButtonClick() {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]);
  }

  return (
    <div className="App">
      {!winner && <div> Current Player : {player}</div>}
      {winner && (
        <div>
          Game Over <div> Winner : {winner}</div>
        </div>
      )}
      <Board board = {board} handleClick={handleClick} />
      <button className="button" onClick={handleButtonClick}>
        Reset
      </button>
    </div>
  );
}
