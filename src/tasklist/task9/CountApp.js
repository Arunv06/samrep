import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const CountApp = () => {
  const { state, increment } = useContext(MyContext);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default CountApp;
