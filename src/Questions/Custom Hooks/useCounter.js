import {useState} from 'react'

const useCounter =(countInitialValue)=>{
    const[count,setCount]=useState(countInitialValue)
    const increment = ()=>setCount(count+1)
    const decrement = ()=>setCount(count-1)
    const reset = ()=>setCount(countInitialValue)
    return[count,increment,decrement,reset]
}
export default useCounter
