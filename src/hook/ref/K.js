import React from 'react';

// forwardRef 함수를 사용하면 ref 속성값을 직접 처리할 수 있다.
const K = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  );
});

export default K;
