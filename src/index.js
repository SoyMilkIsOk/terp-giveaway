import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Giveaway from './Giveaway';
import MaikohBoulder from './pages/MaikohBoulder';
import MaikohDenver from './pages/MaikohDenver';
import TheFitter from './pages/TheFitter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Giveaway />} />
        <Route path="/maikoh-boulder" element={<MaikohBoulder />} />
        <Route path="/maikoh-denver" element={<MaikohDenver />} />
        <Route path="/the-fitter" element={<TheFitter />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
