import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeProvidier from './components/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvidier>
      <App />
    </ThemeProvidier>
  </React.StrictMode>,
  document.getElementById('root')
)