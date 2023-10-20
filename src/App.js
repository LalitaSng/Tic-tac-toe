import { useState } from "react";
import "./styles.css";
import { getWinner } from "./util";
import Cell from "./Cell/Cell";

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
      <div className="row">
        <Cell label={board[0][0]} handleClick = {handleClick}/>
        <Cell label={board[0][1]}/>
        <Cell label={board[0][2]}/>
      </div>
      <div className="row">
        <Cell label={board[1][0]}/>
        <Cell label={board[1][1]}/>
        <Cell label={board[1][2]}/>
      </div>
      <div className="row">
        <Cell label={board[2][0]}/>
        <Cell label={board[2][1]}/>
        <div
          className="column"
          onClick={() => {
            handleClick(2, 2);
          }}
        >
          {board[2][2]}
        </div>
      </div>
      <button className="button" onClick={handleButtonClick}>
        Reset
      </button>
    </div>
  );
}
