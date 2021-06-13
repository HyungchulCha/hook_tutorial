import React, { useEffect, useRef, useState } from 'react';

const O = () => {
  const [age, setAge] = useState(20);
  const prevAgeRef = useRef(20);

  // useEffect는 컴포넌트가 렌더링 된 이후에 실행한다. a -> b
  useEffect(() => {
    prevAgeRef.current = age;
    console.log('b', prevAgeRef.current);
  }, [age]);

  const prevAge = prevAgeRef.current;
  console.log('a', prevAge);
  const text = age === prevAge ? 'same' : age > prevAge ? 'older' : 'younger';

  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}
      >
        나이변경
      </button>
    </div>
  );
};

export default O;
