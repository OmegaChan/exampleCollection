import React from 'react'
import ReactDOM from 'react-dom/client'
import _ from 'lodash';
import App from './App'
import { BrowserRouter } from "react-router-dom"
import './index.css';
window._ = _;


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
