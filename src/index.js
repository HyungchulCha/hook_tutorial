import React from 'react';
import ReactDOM from 'react-dom';
import '../static/css/app-base.css';
import E from './hook/contextApi/E';
import B from './hook/useEffect/B';
import A from './hook/useState/A';

ReactDOM.render(
  <div>
    <A />
    <B userId={1} />
    <E />
  </div>,
  document.getElementById('root')
);
