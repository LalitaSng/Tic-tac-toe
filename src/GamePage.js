import { useState ,useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import { getWinner, getInitialBoard } from "./util";
import Board from "./Board/Board";
import { useNavigate } from 'react-router-dom';

function GamePage(){
    const [winner, setWinner] = useState();
    const [showWinner, setShowWinner] = useState();
    const [player, setPlayer] = useState('x');
    const gridSize = useSelector((state) => state.gridSize);
    const initialBoard = getInitialBoard(gridSize);
    const [board, setBoard] = useState(initialBoard);
    const player1 = useSelector((state) => state.player1);
    const player2 = useSelector((state) => state.player2);
    
    const navigate = useNavigate();
   
    const handleClick = (row, col) => {
        if (board[row][col] != "") return;
        setBoard((prev) => {
            const newBoard = [...prev];
            newBoard[row][col] = player;
            const winner = getWinner(board, row, col, player);
            if (winner) setWinner(winner);
            setShowWinner(()=>{
                return winner === 'x' ? player1 : player2;
            });
            return newBoard;
        });

        setPlayer(() => {
            return player === 'x' ? 'o' : 'x';
        });
    };

    function handleResetButton() {
        setBoard(initialBoard);
        setWinner();
        setPlayer('');
    }

  
    return(
        <div>
            {!winner && <div> Current Player : {player}</div>}
            {winner && (
                <div>
                    Game Over <div> Winner : {showWinner}</div>
                </div>
            )}
            <Board board = {board} handleClick={handleClick} />
            <button className="button" onClick={handleResetButton}>
               Reset
            </button> 
            <button className="button" onClick={()=>navigate(-1)}>
               Back
            </button> 
        </div>
    )
}
export default GamePage