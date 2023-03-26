// import ReactDOM from 'react-dom/client';
import { GameProvider } from './context/gameContext';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/css/index.css';
import '../src/css/normalize.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <GameProvider>
//       <App />
//     </GameProvider>
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
