import { useState } from "react";


function Counter(){
let a=0;
let increase=()=>{
    a=a+1;
    console.log(a);
}

let [Counter, setCounter]=useState(0);

let increase1=()=>{
    setCounter(Counter+1);

}


    return(
        <div>
            <h1>{a}</h1>
            <button onClick={increase}>Increment</button>

            <h1>{Counter}</h1>
            <button onClick={increase1}>Increment</button>
        </div>
    )
}


export default Counter;