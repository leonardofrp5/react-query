import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './Screen/Home/home';
import Character from './Screen/Character/index';
import DetailsCharacter from './Screen/Character/components/DetailsCharacter/details';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/character" element={<Character />} />
            <Route path="/character/:id" element={<DetailsCharacter />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
