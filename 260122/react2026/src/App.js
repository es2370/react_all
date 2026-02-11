import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './view/HomeView';
import Sub from './view/Sub';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/Sub' element={<Sub />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

