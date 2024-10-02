// import react from "react"
import useCounter from "./useCounter";

const CounterUsingCustomHook = () => {
  const [count, increment, decrement, reset] = useCounter(0);
  return (
    <div>
      <h2>Custom Hook Example</h2>
      <p>Count:{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default CounterUsingCustomHook;
