import React, { useState } from 'react';
import Home from './pages/Home';
import Scores from './pages/Scores';
import Analysis from './pages/Analysis';

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
    <div className="bg-gray-100 min-h-screen font-sans text-gray-900">
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
