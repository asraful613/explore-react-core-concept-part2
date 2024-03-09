import { useState } from "react"

export default function Counter(){
    const [count,setcount]=useState(0)
    const handleAdd=()=>{
        const newCount=count+1;
        setcount(newCount)
    }
    const handleReduce = () =>{
        const newCount=count-1;
        setcount(newCount);
    }
    return (
        <div style={{border:'2px solid tomato'}}>
            <h2>Counter : {count} </h2>
            <button style={{backgroundColor:"aquamarine"}} onClick={handleAdd}>Add</button>
            <button style={{backgroundColor: "blueviolet"}} onClick={handleReduce}>Reduce</button>
        </div>
    )
}