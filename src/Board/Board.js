import Cell from "../Cell/Cell";
import './Board.css';

const Board = (
    {
        board,
        handleClick
    }
) => {
    return(
        <div>
            {
                board.map((row,rowIndex) => {
                    return (
                        <div className="row" key={`row-${rowIndex}`}>
                            {
                                row.map((colValue, colIndex) => (
                                    <Cell key={`col-${rowIndex}-${colIndex}`} label={colValue} handleClick = {handleClick} row={rowIndex} col={colIndex}/>
                                )
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Board
