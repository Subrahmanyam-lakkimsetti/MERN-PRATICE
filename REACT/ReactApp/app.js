import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './src/pages/homepage';
import { BrowserRouter, Route, Routes } from 'react-router';
import Dummyrecipies from './src/pages/Dummyrecipies';
import Todoapp from './src/pages/TodoApp';

const actualDOm = document.getElementById('main-root');
const reactroot = ReactDOM.createRoot(actualDOm);

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Dummyrecipies" element={<Dummyrecipies />}></Route>
          <Route path="/TodoApp" element={<Todoapp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

reactroot.render(<App />);
