import React from 'react';
A.propTypes = {
  // 1. 리액트 요소
  // <div>a</div> - true
  // <SomeComponent /> - true
  // 123 - false
  a: PropTypes.element,

  // 2. 컴포넌트 함수가 반활할 수 있는 모든 것
  // number, string, array, element ...
  // <SomeComponent /> - true
  // 123 - true
  b: PropTypes.node,

  // 3. Message 클래스로 생성된 모든 객체
  // new Message - true
  // new Car() - false
  c: PropTypes.instanceOf(Message),

  // 4. 배열에 포함된 값중 하나를 만족
  // 123 - true
  // 'a' - true
  d: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  // 5. 특정 타입만 포함하는 배열
  // [1, 2] - true
  // ['a', 'b'] - false
  e: PropTypes.arrayOf(PropTypes.number),

  // 6. 객체의 속성값 타입을 정의
  // {a: 'a', b: 1} - true
  // {a: 'a', b: '1'} = false
  f: PropTypes.shape({
    a: PropTypes.string,
    b: PropTypes.number,
  }),

  // 7. 객체의 모둔 속성 값이 같은 경우
  // {a: 123, b: 456} - true
  // {a: 'a', b: 123} - false
  g: PropTypes.objectOf(PropTypes.number),

  // 8. 커스텀
  h: function (props, propName, componentName) {
    const value = props[propName];
    if (value < 10 || value > 20) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. It must be 10 <= value <= 20`
      );
    }
  },
};
const A = () => {
  return <div></div>;
};

export default A;
