import { useState, useMemo } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodo] = useState([]);
  const ans = useMemo(() => expcal(count), [count]);
  const increment = () => {
    setCount(count + 1);
  };
  const addTodo = () => {
    setTodo([...todos, "New Todo"]);
  };

  return (
    <>
      <h2>Use Memo Example</h2>
      <p> Count:{count}</p>
      <p>Expensive Calculation Result is : {ans}</p>
      <button onClick={increment}>+</button>
      <h3>Add Todos</h3>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

const expcal = (num) => {
  console.log("calculating....");
  for (let i = 0; i < 10000000; i++) {
    num += 1;
  }
  return num;
};

export default Memo;
