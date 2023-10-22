import Cell from "../Cell/Cell";
import './Board.module.css';

const Board = (
    {
        board,
        handleClick
    }
) => {
    return(
        <div>
            <div className="row">
                <Cell label={board[0][0]} handleClick={handleClick} row={0} col={0}/>
                <Cell label={board[0][1]} handleClick={handleClick} row={0} col={1}/>
                <Cell label={board[0][2]} handleClick={handleClick} row={0} col={2}/>
            </div>
            <div className="row">
                <Cell label={board[1][0]} handleClick = {handleClick} row={1} col={0}/>
                <Cell label={board[1][1]} handleClick = {handleClick} row={1} col={1}/>
                <Cell label={board[1][2]} handleClick = {handleClick} row={1} col={2}/>
            </div>
            <div className="row">
                <Cell label={board[2][0]} handleClick = {handleClick} row={2} col={0}/>
                <Cell label={board[2][1]} handleClick = {handleClick} row={2} col={1}/>
                <Cell label={board[2][1]} handleClick = {handleClick} row={2} col={2}/>
            </div>
        </div>
    )
}
export default Board