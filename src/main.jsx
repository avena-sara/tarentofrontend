import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Your custom styles
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap styles
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

