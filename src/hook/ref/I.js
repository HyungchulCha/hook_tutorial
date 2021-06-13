import React, { useEffect, useRef } from 'react';

const I = ({ inputRef }) => {
  // 1. ref 객체의 current 속성을 이용하면 부모 컴포넌트에서 자식요소에 접근할 수 있다. 이 방법은 자식 컴포넌트 내부구조를 외부에서 알아야 하므로 좋은 방법은 아니다.
  // const inputRef = useRef();
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  // 2. 상위 컴포넌트에서 받은 inputRef 속성값을 input 요소의 ref 속성값으로 넣고 있다. 부모 입장에서는 손자 요소에 ref 속성값을 넣는 형태가 된다.
  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  );
};

export default I;
