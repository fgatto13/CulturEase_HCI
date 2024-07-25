import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Styles/styles.css';
import Rts from './Routes';
import { PopUpProvider } from './context/PopUpContext';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PopUpProvider>
      <AuthProvider>
        <Rts />
      </AuthProvider>
    </PopUpProvider>
  </React.StrictMode>
);
