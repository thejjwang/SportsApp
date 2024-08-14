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
    <div className="bg-gray-100 min-h-screen font-sans text-gray-900">
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Betting App</h1>
          <div>
            <button
              onClick={() => setCurrentPage('home')}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded"
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('scores')}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded mx-2"
            >
              Scores
            </button>
            <button
              onClick={() => setCurrentPage('analysis')}
              className="text-white hover:bg-blue-700 px-4 py-2 rounded"
            >
              Analysis
            </button>
          </div>
        </div>
      </nav>
      <main className="p-6">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
