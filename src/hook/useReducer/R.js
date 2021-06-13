import React, { useReducer } from 'react';
import S from './S';

const INITIAL_STATE = { name: '', age: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
      return { ...state, age: action.age };
    default:
      return state;
  }
}
export const ProfileContext = React.createContext(null);

const R = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <div>
      <p>{`name: ${state.name}`}</p>
      <p>{`age: ${state.age}`}</p>
      <input
        type='text'
        value={state.name}
        onChange={(e) => dispatch({ type: 'setName', name: e.target.value })}
      />
      <input
        type='number'
        value={state.age}
        onChange={(e) => dispatch({ type: 'setAge', age: e.target.value })}
      />
      <ProfileContext.Provider value={{ state, dispatch }}>
        <S />
      </ProfileContext.Provider>
    </div>
  );
};

export default R;
