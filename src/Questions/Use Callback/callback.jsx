import React from "react"
import { useCallback,useState } from "react";


const Callback =()=>{

    const [count , setCount]= useState(0)
    const[todos,setTodos]=useState([])
    const increment =()=>setCount(count+1)
    const addTodos = useCallback(()=>setTodos([...todos,"new todo"]),[todos])

    return(
        <div>
        <h2>Use Callback Example</h2>
        <p>Count:{count}</p>
        <button onClick={increment}>+</button>
         <Todos addTodos={addTodos} todos={todos}/>
        </div>
    )
}

const Todos =React.memo(({todos,addTodos})=>{
    console.log("inside our todo")
return(
    <div>
        <h3>Todos</h3>
         {todos.map((todo,index)=>{
    return <p key={index}>{todo}</p>
   })}
   <button onClick={addTodos}>Add Todo</button>
    </div>
)
  

    

})

export default Callback