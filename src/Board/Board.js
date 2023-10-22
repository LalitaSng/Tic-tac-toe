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
            {
                board.map((row,rowIndex) => {
                    return (
                        <div className="row">
                            {
                                row.map((colValue, colIndex) => (
                                    <Cell label={colValue} handleClick = {handleClick} row={rowIndex} col={colIndex}/>
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
