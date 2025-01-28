import React from 'react';
import ReactDOM from 'react-dom/client';

const actualDOm = document.getElementById('main-root');
const reactroot = ReactDOM.createRoot(actualDOm);

const App = () => {
  return <h1>Hello from the react</h1>;
};

reactroot.render(App());
