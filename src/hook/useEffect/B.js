import React, { useEffect, useState } from 'react';

const B = ({ userId }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `update count: ${count}`;
  }, [count]);
  function onClick() {
    setCount((prevState) => prevState + 1);
  }

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  }, [userId]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <div>
      <button onClick={onClick}>increase</button>
      {!user && <p>사용자 정보 가져오는 중</p>}
      {user && (
        <>
          <p>{`username: ${user.username}`}</p>
          <p>{`phone: ${user.phone}`}</p>
        </>
      )}
      <div>{`window width: ${width}`}</div>
    </div>
  );
};

export default B;
