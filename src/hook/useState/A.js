import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const A = () => {
  const [count1, setCount1] = useState({ value: 0 });
  const [count2, setCount2] = useState({ value: 0 });
  const [inputText, setInputText] = useState({ name: '', age: 0 });
  function onClick() {
    // 1. 상태값 변경 함수는 비동기로 동작하기 때문에 의도와 달리 어떨땐 1, 어떨땐 2를 더한다.
    // setCount1({ value: count1.value + 1 });
    // setCount1({ value: count1.value + 1 });
    // 2. 1번 오류 수정
    // setCount1((prevState) => ({ ...prevState, value: prevState.value + 1 }));
    // setCount1((prevState) => ({ ...prevState, value: prevState.value + 1 }));
    // 3. 호출 순서 보장
    setCount1((prevState) => ({ ...prevState, value: prevState.value + 1 }));
    setCount2((prevState) => ({ ...prevState, value: prevState.value + 1 }));
  }
  function onChangeText(e) {
    setInputText((prevState) => ({ ...prevState, name: e.target.value }));
  }
  function onChangeNumber(e) {
    setInputText((prevState) => ({ ...prevState, age: e.target.value }));
  }

  const result1 = count1 >= count2;
  const result2 = count1 < count2;
  console.log(result1, result2);

  useEffect(() => {
    // 4. 리액트 외부에서 관리되는 이벤트 처리함수의 경우에는 상태값 변경이 배치로 처리되지 않는다.
    // document.querySelector('#domClick').addEventListener('click', onClick);
    // return document.querySelector('#domClick').removeEventListener('click', onClick);
    // 5. 4번 수정
    document.getElementById('domClick').addEventListener('click', onClickBatch);
    return () => document.getElementById('domClick').removeEventListener('click', onClickBatch);
  }, []);

  // 5. 리액트 외부에서 관리되는 이벤트 처리함수에서도 원한다면 상태값 변경을 배치로 처리할 수 있다.
  function onClickBatch() {
    ReactDOM.unstable_batchedUpdates(() => {
      setCount1((prevState) => ({ ...prevState, value: prevState.value + 1 }));
      setCount2((prevState) => ({ ...prevState, value: prevState.value + 1 }));
    });
  }

  return (
    <div>
      {count1.value}
      <br />
      {count2.value}
      <br />
      <button onClick={onClick}>Inner Add</button>
      <br />
      {inputText.name}
      <br />
      {inputText.age}
      <br />
      <input type='text' value={inputText.name} onChange={onChangeText} />
      <br />
      <input type='number' value={inputText.age} onChange={onChangeNumber} />
      <button id='domClick'>Outer Add</button>
    </div>
  );
};

export default A;
