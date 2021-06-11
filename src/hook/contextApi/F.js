import React from 'react';
import G from './G';

const F = React.memo(() => {
  // react memo를 하지 않으면 E 컴포넌트에서 타이핑 할 때마다 렌더링 한다.
  console.log('rendering check');
  return (
    <div>
      <G />
    </div>
  );
});

export default F;
