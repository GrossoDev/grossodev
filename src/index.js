import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './grosso-bootreact/components/Navbar';
import Footer from './grosso-bootreact/components/Footer';
import Analytics from './grosso-bootreact/utils/analytics'

Analytics.visited();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar themeSelect />
    <App />
    <Footer />
  </React.StrictMode>
);
