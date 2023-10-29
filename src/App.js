import { useState ,useEffect, useRef} from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import { getWinner, getInitialBoard } from "./util";
import Board from "./Board/Board";
import WelcomePage from "./Page/WelcomePage";



export default function App() {
  const [winner, setWinner] = useState();
  const [players, setPlayers] = useState({firstPlayer : '', secondPlayer: ''});
  const [player, setPlayer] = useState(players.firstPlayer);
  const gridSize = useSelector((state) => state.gridSize);
  const initialBoard = getInitialBoard(gridSize);
  console.log('gridsize - ', gridSize);
  const [board, setBoard] = useState(initialBoard);

  const inputRef = useRef(null)

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
      return player === players.firstPlayer ? players.secondPlayer : players.firstPlayer;
    });
  };

  function handleResetButton() {
    setBoard(initialBoard);
    setPlayers({firstPlayer:'',secondPlayer:''})
    setWinner()
    setPlayer('')
  }

  // useEffect(()=>{
  //   inputRef.current.focus();
  // },[])

  
  

  return (
    <div className="App">
      {/* <label className="players">Please enter First Player's name : <input type='text' value={players.firstPlayer} onChange={e => setPlayers({...players,firstPlayer: e.target.value})} ref={inputRef}/></label>
      <label className="players">Please enter Second player's name : <input type='text' value={players.secondPlayer} onChange={e => setPlayers({...players,secondPlayer: e.target.value})}/></label>
      {!winner && <div> Current Player : {player}</div>}
      {winner && (
        <div>
          Game Over <div> Winner : {winner}</div>
        </div>
      )}
      <Board board = {board} handleClick={handleClick} />
      <button className="button" onClick={handleResetButton}>
        Reset
      </button>  */}
      <WelcomePage player1 = '' player2 =''/>
    </div>
  );
}
