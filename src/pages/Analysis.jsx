import React from 'react';

const Analysis = () => {
  return (
    <div className="bg-black text-yellow-500 p-8 min-h-screen">
      <h2 className="text-4xl font-extrabold mb-6">In-Depth Analysis</h2>
      <p className="text-lg mb-8">
        Explore our comprehensive insights and predictions to stay ahead in the game.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Key Insights</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Performance metrics and trends</li>
            <li>Historical match data</li>
            <li>Player statistics and projections</li>
          </ul>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h3 className="text-2xl font-semibold mb-4">Upcoming Matches</h3>
          <p>
            Stay tuned for detailed updates on upcoming matches and our predictions.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
        <h3 className="text-2xl font-semibold mb-4">Recent Trends</h3>
        <p>
          Analyze recent trends and shifts in performance to refine your strategies.
        </p>
      </div>
    </div>
  );
};

export default Analysis;
