import React, { useState } from 'react';
import Home from './pages/Home';
import Scores from './pages/Scores';
import Analysis from './pages/Analysis';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'scores':
        return <Scores />;
      case 'analysis':
        return <Analysis />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('scores')}>Scores</button>
        <button onClick={() => setCurrentPage('analysis')}>Analysis</button>
      </nav>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
