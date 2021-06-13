import React from 'react';

// useMemo, useCallback은 이전 값을 기억해서 성능 최적화하는 용도로 사용된다.
const P = () => {
  const value = useMemo(() => runExpensiveJob(a, b), [a, b]);
  return <div>P</div>;
};

export default P;
