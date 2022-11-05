import React from 'react';
import ReactDOM from 'react-dom/client';
import FlowerContext from './context/Flowers.jsx';
import './index.css';
import Root from './root/index'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FlowerContext>
 <Root/>
    </FlowerContext>
  </React.StrictMode>
)