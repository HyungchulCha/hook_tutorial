import React, { useState } from 'react';
import F from './F';

export const ExContext = React.createContext();

const E = () => {
  const [username, setUsername] = useState('');
  function onChange(e) {
    setUsername(e.target.value);
  }
  return (
    <div>
      <ExContext.Provider value={username}>
        <F />
      </ExContext.Provider>
      <input type='text' value={username} onChange={onChange} />
    </div>
  );
};

export default E;
