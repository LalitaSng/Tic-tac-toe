import './ Cell.css';

const Cell = (
    {
        label,
        handleClick,
        row,
        col
    }
) =>{
    return (
        <div 
            className={"column"}
            onClick={() => handleClick(row, col)}
        >
          {label}
        </div>
    )
}
export default Cell