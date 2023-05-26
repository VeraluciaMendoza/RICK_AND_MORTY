import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

const rooElement = document.getElementById('root');

// Create a root.
const root = createRoot(rooElement);

// Initial render
root.render(
<BrowserRouter>
  <App />
</BrowserRouter>
);

