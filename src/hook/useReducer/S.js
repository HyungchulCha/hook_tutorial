import React, { useContext } from 'react';
import { ProfileContext } from './R';

const S = () => {
  const ctxProfile = useContext(ProfileContext);
  console.log(ctxProfile);
  return (
    <div>
      <input
        type='text'
        value={ctxProfile.state.name}
        onChange={(e) =>
          ctxProfile.dispatch({ type: 'setName', name: e.target.value })
        }
      />
      <input
        type='number'
        value={ctxProfile.state.age}
        onChange={(e) =>
          ctxProfile.dispatch({ type: 'setAge', age: e.target.value })
        }
      />
    </div>
  );
};

export default S;
