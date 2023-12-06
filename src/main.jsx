import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { render } from "react-dom";
import ContextApi from './ContextApi/index.jsx'

render(
  <React.StrictMode>
      <ContextApi>
    <BrowserRouter>
        <App />
    </BrowserRouter>  
      </ContextApi>

  </React.StrictMode>,
  document.getElementById("root")
);
