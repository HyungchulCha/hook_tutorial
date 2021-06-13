import React from 'react';
import N from './N';

export const UserContext = React.createContext();
const user = { name: 'hong gil dong', age: 30 };

const M = () => {
  return (
    <div>
      <UserContext.Provider value={user}>
        <N />
      </UserContext.Provider>
    </div>
  );
};

export default M;
