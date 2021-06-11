import React, { useEffect, useState } from 'react';
import { useUser, useWindow } from '../customHook/D';

const B = ({ userId }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `update count: ${count}`;
  }, [count]);
  function onClick() {
    setCount((prevState) => prevState + 1);
  }

  const user = useUser(userId);
  const width = useWindowWidth();

  return (
    <div>
      <button onClick={onClick}>increase</button>
      {!user && <p>사용자 정보 가져오는 중</p>}
      {user && (
        <div>
          <p>{`username: ${user.username}`}</p>
          <p>{`phone: ${user.phone}`}</p>
        </div>
      )}
      <div>{`window width: ${width}`}</div>
    </div>
  );
};

export default B;
