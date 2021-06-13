import React, { useEffect, useRef } from 'react';
import I from './I';

const H = () => {
  const inputRef = useRef();
  return (
    <div>
      <I inputRef={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
};

export default H;
