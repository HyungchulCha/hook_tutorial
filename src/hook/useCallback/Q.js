import React, { useCallback, useState } from 'react';

const Q = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const onSave = useCallback(() => saveToServer(name, age), [name, age]);
  return (
    <div>
      <p>{`name: ${name}`}</p>
      <p>{`age: ${age}`}</p>
      {/* onSave 함수가 실행할 때마다 새로운 함수가 생성되는데, 속성값이 항상 변경된다는 뜻이다. 그 때문에 불필요한 렌더링이 발생한다. */}
      <UserEdit
        // onSave={() => saveToServer(name, age)}
        onSave={onSave}
        setName={setName}
        setAge={setAge}
      />
    </div>
  );
};

export default Q;
