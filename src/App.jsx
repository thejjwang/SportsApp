import React, { useState } from 'react';
import Home from './pages/Home';
import Scores from './pages/Scores';
import Analysis from './pages/Analysis';
import './index.css'; // Make sure this file imports your custom CSS

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'scores':
        return <Scores />;
      case 'analysis':
        return <Analysis />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-grainy-dark text-yellow-500 min-h-screen bg-cover bg-center">
      <main>{renderPage()}</main>
    </div>
  );  
}

export default App;
