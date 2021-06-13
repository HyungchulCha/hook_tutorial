import React, { forwardRef, useImperativeHandle, useState } from 'react';

const U = (props, ref) => {
  const [name, setName] = useState('Hong Gil Dong');
  const [age, setAge] = useState(0);

  useImperativeHandle(ref, () => ({
    addAge: (value) => setAge(age + value),
    getNameLength: () => name.length,
  }));

  return (
    <div>
      <p>{`name: ${name}`}</p>
      <p>{`age: ${age}`}</p>
    </div>
  );
};

export default forwardRef(U);
