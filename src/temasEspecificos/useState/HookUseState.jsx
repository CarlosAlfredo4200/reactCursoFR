import React, { useState } from "react";

const HookUseState = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;
  //   cambiar el state solo del que necesito sin alterar los demas
  const handleCounter = () => {
    setCounter({
      ...counter,
      counter1: counter1 + 1,
    });
  };

  return (
    <div>
      <h3>Contador</h3>
      
      <div className="hooksState">
        <h3>counter : {counter1}</h3>
        <h3>counter : {counter2}</h3>
        <h3>counter : {counter3}</h3>
        <button onClick={handleCounter}>Add + 1</button>
      </div>
    </div>
  );
};

export default HookUseState;
