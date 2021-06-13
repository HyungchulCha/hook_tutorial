import React from 'react';
import { ExContext, ThemeContext, SetUserContext, UserContext } from './E';

const G = () => {
  return (
    <div>
      <SetUserContext.Consumer>
        {/* 하위 컴포넌트에서 사용자 데이터를 수정할 수 있도록 콘텍스트 데이터로 전달한다. */}
        {(ctxSetUser) => (
          <UserContext.Consumer>
            {(ctxUser) => (
              <ThemeContext.Consumer>
                {(ctxTheme) => (
                  <ExContext.Consumer>
                    {(ctxEx) => (
                      <div>
                        <p
                          style={{
                            color: ctxTheme === 'light' ? 'black' : 'white',
                          }}
                        >{`username: ${ctxEx}`}</p>
                        <p>{`name: ${ctxUser.name}`}</p>
                        <p>{`count: ${ctxUser.count}`}</p>
                        <button
                          onClick={() =>
                            ctxSetUser({
                              name: ctxUser.name,
                              count: ctxUser.count + 1,
                            })
                          }
                        >
                          Change
                        </button>
                      </div>
                    )}
                  </ExContext.Consumer>
                )}
              </ThemeContext.Consumer>
            )}
          </UserContext.Consumer>
        )}
      </SetUserContext.Consumer>
    </div>
  );
};

export default G;
