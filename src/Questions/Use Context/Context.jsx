import React, { createContext, useContext } from "react";

const userContext = createContext();

const Context = () => {
  const user = "Harsh";
  return (
    <userContext.Provider value={user}>
      <h2>Use Context Example</h2>
      <p>Hello {user}</p>
      <Component1 />
    </userContext.Provider>
  );
};

export default Context;

const Component1 = () => {
  return (
    <div>
      <h4>Component 1</h4>
      <Component2 />
    </div>
  );
};

const Component2 = () => {
  return (
    <div>
      <h4>Component 2</h4>
      <Component3 />
    </div>
  );
};
const Component3 = () => {
  const user = useContext(userContext);
  return (
    <div>
      <h4>Component 3</h4>
      <p>Hello {user} again</p>
    </div>
  );
};
