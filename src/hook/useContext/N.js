import React, { useContext } from 'react';
import { UserContext } from './M';

const N = () => {
  const ctxUser = useContext(UserContext);
  return <div>{`username: ${ctxUser.name}, age: ${ctxUser.age}`}</div>;
};

export default N;
