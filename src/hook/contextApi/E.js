import React, { useState } from 'react';
import F from './F';

export const ExContext = React.createContext();
export const ThemeContext = React.createContext();
export const SetUserContext = React.createContext();
export const UserContext = React.createContext({ name: '', count: 0 });

const E = () => {
  const [username, setUsername] = useState('');
  // 렌더링 할때마다 콘텍스트 데이터로 새로운 객체를 전달해서 불필요한 렌더링이 일어나지 않게 한다.
  // 콘텍스트 전체를 상태값으로 관리한다.
  const [user, setUser] = useState({ name: 'hong gil dong', count: 0 });
  function onChange(e) {
    setUsername(e.target.value);
  }
  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <ThemeContext.Provider value='light'>
            <ExContext.Provider value={username}>
              <F />
            </ExContext.Provider>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </SetUserContext.Provider>
      <input type='text' value={username} onChange={onChange} />
    </div>
  );
};

export default E;
