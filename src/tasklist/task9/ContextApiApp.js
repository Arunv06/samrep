// src/App.js
import React, { useState } from 'react';
import CountApp from './CountApp';
import { MyContext } from './MyContext';

const App = () => {
  const [state, setState] = useState({ count: 0 });

  const increment = () => {
    setState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  };

  return (
    <MyContext.Provider value={{ state, increment }}>
      <div>
        <h1>Context API Example</h1>
        <CountApp />
      </div>
    </MyContext.Provider>
  );
};

export default App;
