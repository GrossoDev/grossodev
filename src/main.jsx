import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './grosso-bootreact/components/Navbar';
import Footer from './grosso-bootreact/components/Footer';
import Analytics from './grosso-bootreact/utils/analytics'
import useTheme from './grosso-bootreact/utils/useTheme';

Analytics.visited();

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  const [theme, setTheme] = useTheme();

  return (
    <React.StrictMode>
      <Navbar themeSelect theme={theme} setTheme={setTheme} />
      <App theme={theme} />
      <Footer />
    </React.StrictMode>
  );
};

root.render(<Index />);
