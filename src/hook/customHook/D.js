import { useEffect, useState } from 'react';

export function useUser(userId) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data[0]));
  }, [userId]);
  return user;
}

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  function onResize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return width;
}
