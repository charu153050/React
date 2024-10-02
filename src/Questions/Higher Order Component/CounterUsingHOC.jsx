import React from 'react'
import WithCounter from './hoc'

const CounterUsingHOC=({count,increment,decrement,reset})=>{
    return(
        <div>
            <h2>HOC Example</h2>
            <p>Count:{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}
export default WithCounter(CounterUsingHOC)