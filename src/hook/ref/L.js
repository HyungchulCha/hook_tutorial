import React, { useCallback, useRef, useState } from 'react';

const INITIAL_TEXT = 'hi';

const L = () => {
  const [text, setText] = useState(INITIAL_TEXT);
  const [showText, setShowText] = useState(true);
  // ref 속성에 함수를 입력하면 자식요소가 생성되거나 제거되는 시점에 호출된다.
  // 1. 화면이 렌더링될 때마다 새로운 함수를 ref 속성값으로 넣기 때문에 의도한대로 동작하지 않는다.
  // 2. 고정된 함수를 입력하면 해결된다.
  const setInitialText = useCallback((ref) => ref && setText(INITIAL_TEXT), []);

  // 3. 컴포넌트가 생성된 이후라도 ref 객체의 current 속성이 없을 수 있기 때문에 주의해야 한다.
  const inputRef = useRef();
  return (
    <div>
      {showText && (
        <input
          type='text'
          // 1. ref={(ref) => ref && setText(INITIAL_TEXT)}
          // 2. ref={setInitialText}
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <button onClick={() => setShowText(!showText)}>show/hide</button>
      {/* 4. 조건부 렌더링이 사용된 요소의 ref 객체는 current 속성을 검사하는 코드가 필요하다. */}
      <button onClick={() => inputRef.current && inputRef.current.focus()}>
        텍스트로 이동
      </button>
    </div>
  );
};

export default L;
