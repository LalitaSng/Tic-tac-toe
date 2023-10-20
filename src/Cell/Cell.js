import './ Cell.module.css';

const Cell = (
    {
        label
    }
) =>{
    return (
        <div 
            className={"column"}
            // onClick={() => handleClick(0, 0)}
        >
          {label}
        </div>
    )
}
export default Cell