import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './grosso-bootreact/components/Navbar';
import Footer from './grosso-bootreact/components/Footer';
import ThemeContext from './grosso-bootreact/utils/ThemeContext';
import useThemeContext from './grosso-bootreact/utils/useThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  const themeContext = useThemeContext();

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={ themeContext }>
        <Navbar showThemeSelector />
        <App />
        <Footer />
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

root.render(<Index />);
