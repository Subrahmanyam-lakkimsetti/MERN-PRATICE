import React from 'react';
import ReactDOM from 'react-dom/client';
import Todoapp from './src/pages/Todoapp';

const actualDOM = document.getElementById('main-root');
const root = ReactDOM.createRoot(actualDOM);

const App = () => {
  return (
    <>
      <Todoapp />
    </>
  );
};

root.render(App());
