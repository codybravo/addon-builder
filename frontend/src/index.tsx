import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the root element from the DOM
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!); // The `!` is to tell TypeScript that this element exists

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
