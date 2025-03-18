import React,{useState} from "react";
console.log('render');
function UseState(){
    console.log('c render');
    const [state,setFunction]=useState(0)
    let increment = () => setFunction(state+10)
    return(
        <div>
            count:{state}
            <button onClick={increment}>increment</button>
        </div>
    )
}
export default UseState