// src/pages/Scores.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Scores = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get('https://api.pandascore.co/matches/', {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_PANDASCORE_API_KEY}`, // Access environment variable for Vite
          },
        });
        setMatches(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-700">Loading matches...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Upcoming Matches</h2>
      {matches.length === 0 ? (
        <p className="text-lg text-gray-700">No matches available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.map((match) => (
            <div key={match.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {match.name}
              </h3>
              <p className="text-lg text-gray-600">
                Status: {match.status}
              </p>
              <p className="text-lg text-gray-600">
                Scheduled At: {new Date(match.scheduled_at).toLocaleString()}
              </p>
              <p className="text-lg text-gray-600">
                League: {match.league.name}
              </p>
              {match.streams_list.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-medium text-gray-800">Streams:</h4>
                  <ul>
                    {match.streams_list.map((stream, index) => (
                      <li key={index}>
                        <a href={stream.raw_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                          Watch ({stream.language.toUpperCase()})
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Scores;
