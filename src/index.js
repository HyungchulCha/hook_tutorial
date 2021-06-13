import React from 'react';
import ReactDOM from 'react-dom';
import '../static/css/app-base.css';
import A from './hook/useState/A';
import B from './hook/useEffect/B';
import C from './hook/useEffect/C';
import E from './hook/contextApi/E';
import H from './hook/ref/H';
import J from './hook/ref/J';
import L from './hook/ref/L';
import M from './hook/useContext/M';
import O from './hook/ref/O';
import R from './hook/useReducer/R';
import T from './hook/useImperativeHandle/T';

ReactDOM.render(
  <div>
    <A />
    <B userId={1} />
    <C userId={2} />
    <E />
    <H />
    <J />
    <L />
    <M />
    <O />
    <R />
    <T />
  </div>,
  document.getElementById('root')
);
