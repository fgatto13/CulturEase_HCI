import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/styles.css';
import Rts from './Routes';
import { PopUpProvider } from './Components/UserPopups/PopUpContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PopUpProvider>
      <Rts />
    </PopUpProvider>
  </React.StrictMode>
);
