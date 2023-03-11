import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/css/index.css';
import '../src/css/normalize.css';
import App from './App';
import { GameProvider } from './context/gameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>
);

