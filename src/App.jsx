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
    <div className="min-h-screen bg-gray-100">
      <nav className="flex justify-around bg-blue-500 p-4 text-white">
        <button onClick={() => setCurrentPage('home')} className="px-4 py-2 rounded hover:bg-blue-700">Home</button>
        <button onClick={() => setCurrentPage('scores')} className="px-4 py-2 rounded hover:bg-blue-700">Scores</button>
        <button onClick={() => setCurrentPage('analysis')} className="px-4 py-2 rounded hover:bg-blue-700">Analysis</button>
      </nav>
      <main className="p-6">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
