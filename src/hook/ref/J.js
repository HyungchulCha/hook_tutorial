import React, { useRef } from 'react';
import K from './K';

const J = () => {
  const inputRef = useRef();
  return (
    <div>
      <K ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>텍스트로 이동</button>
    </div>
  );
};

export default J;
