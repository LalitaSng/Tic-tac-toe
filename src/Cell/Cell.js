import './ Cell.module.css';

const Cell = (
    {
        label,
        handleClick
    }
) =>{
    return (
        <div 
            className={"column"}
            onClick={() => handleClick(0, 0)}
        >
          {label}
        </div>
    )
}
export default Cell