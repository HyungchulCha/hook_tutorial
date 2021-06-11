import React from 'react';
import { ExContext } from './E';

const G = () => {
  return (
    <div>
      <ExContext.Consumer>{(ctx) => <p>{`username: ${ctx}`}</p>}</ExContext.Consumer>
    </div>
  );
};

export default G;
