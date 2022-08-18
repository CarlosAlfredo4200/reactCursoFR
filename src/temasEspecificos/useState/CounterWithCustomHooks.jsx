import { useCounter } from "./useCounter";

const CounterWithCustomHooks = () => {
  const { counter, increment, reset, decrement } = useCounter();

  return (
    <div>
      <h3>CounterWithCustomHooks</h3>
      <h4>counter with hook :{counter} </h4>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default CounterWithCustomHooks;
