import React from 'react';

const Home = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-black text-yellow-500 flex flex-col items-center justify-center relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center text-sm">
        <div className="text-yellow-500 font-bold">
          <button
            onClick={() => onNavigate('analysis')}
            className="hover:text-white uppercase"
          >
            Analysis
          </button>
        </div>
        <div className="text-yellow-500">
          <button
            onClick={() => onNavigate('scores')}
            className="hover:text-white uppercase"
          >
            Scores
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-wide text-center">
          E.S.P.O.R.T.S.
        </h1>
      </div>

      {/* Footer-like Section */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-between px-6 text-sm">
        <div className="text-yellow-500 uppercase">some i want</div>
      </div>
    </div>
  );
};

export default Home;
