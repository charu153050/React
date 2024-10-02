import React,{useState} from 'react'

const BuggyComponent =()=>{
   
const[count,setCount]=useState(0)
const Increment =()=>setCount(count+1)

if(count === 2){
    throw new Error("Crashed")
}


    return(
        <div>
        <h4>Count:{count}</h4>
        <button onClick={Increment}>+</button>
        </div>
    )
}

export default BuggyComponent