import React, { useRef } from 'react';
import U from './U';

const T = () => {
  const URef = useRef();
  const onClick = () => {
    if (URef.current) {
      console.log(`current name length ${URef.current.getNameLength()}`);
      URef.current.addAge(5);
    }
  };
  return (
    <div>
      <U ref={URef} />
      <button onClick={onClick}>Parent Button - add age 5</button>
    </div>
  );
};

export default T;
