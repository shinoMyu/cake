import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { MusicProvider } from './context/MusicPlayerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <MusicProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MusicProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>
);