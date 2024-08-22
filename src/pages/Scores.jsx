import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Scores = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [selectedGame, setSelectedGame] = useState('all');

  const gameEndpoints = {
    'dota-2': 'https://api.pandascore.co/dota2/matches',
    'cs2': 'https://api.pandascore.co/csgo/matches',
    'league-of-legends': 'https://api.pandascore.co/lol/matches',
    'valorant': 'https://api.pandascore.co/valorant/matches',
    'rainbow6': 'https://api.pandascore.co/r6siege/matches',
    'rocketleague': 'https://api.pandascore.co/rl/matches',
    'cod': 'https://api.pandascore.co/codmw/matches'
  };

  const fetchMatches = async (tab) => {
    setLoading(true);
    setError(null);
    try {
      let url = '';
      if (selectedGame === 'all') {
        const allMatches = [];
        for (const key in gameEndpoints) {
          const response = await axios.get(`${gameEndpoints[key]}/${tab}`, {
            headers: {
              'Authorization': `Bearer ${import.meta.env.VITE_PANDASCORE_API_KEY}`,
            },
          });
          allMatches.push(...response.data);
        }
        setMatches(allMatches);
      } else {
        url = `${gameEndpoints[selectedGame]}/${tab}`;
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_PANDASCORE_API_KEY}`,
          },
        });
        setMatches(response.data);
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMatches(selectedTab);
  }, [selectedTab, selectedGame]);

  const filteredMatches = matches.filter((match) => {
    if (selectedGame === 'all') return true;
    const gameName = match.videogame?.name || match.videogame_title;
    const gameMap = {
      'Dota 2': 'dota-2',
      'Counter-Strike 2': 'cs2',
      'League of Legends': 'league-of-legends',
      'Valorant': 'valorant',
      'Rainbow Six': 'rainbow6',
      'Rocket League': 'rocketleague',
      'Call of Duty': 'cod'
    };
    return gameMap[gameName] === selectedGame;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-yellow-500">
        <p className="text-xl">Loading matches...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-yellow-500">
        <p className="text-xl">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-black text-yellow-500 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Matches</h2>

      <div className="mb-4 flex space-x-4">
        <button
          className={`px-4 py-2 rounded-lg ${selectedTab === 'upcoming' ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-yellow-500'}`}
          onClick={() => setSelectedTab('upcoming')}
        >
          Upcoming
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedTab === 'running' ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-yellow-500'}`}
          onClick={() => setSelectedTab('running')}
        >
          Live
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${selectedTab === 'past' ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-yellow-500'}`}
          onClick={() => setSelectedTab('past')}
        >
          Past
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="game-select" className="block font-medium mb-2">Filter by Game:</label>
        <select
          id="game-select"
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
          className="p-2 border border-gray-800 bg-black text-yellow-500 rounded-lg"
        >
          <option value="all">All Games</option>
          {Object.entries(gameEndpoints).map(([id, endpoint]) => (
            <option key={id} value={id}>
              {id.replace('-', ' ').toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {filteredMatches.length === 0 ? (
        <p className="text-lg">No matches available for the selected criteria.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatches.map((match) => (
            <div key={match.id} className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">
                {match.name}
              </h3>
              <p className="text-lg">
                League: {match.league?.name}
              </p>

              {/* Team Logos */}
              {match.opponents?.length > 0 && (
                <div className="flex justify-between items-center mb-4">
                  {match.opponents.map((opponent, index) => (
                    <div key={index} className="text-center">
                      <img src={opponent?.opponent?.image_url} alt={opponent?.opponent?.name} className="h-12 w-12 object-contain mb-1 rounded-full border border-gray-600" />
                      <p className="text-sm">{opponent?.opponent?.name}</p>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-lg">
                Status: {match.status}
              </p>
              <p className="text-lg">
                Scheduled At: {new Date(match.scheduled_at).toLocaleString()}
              </p>

              {/* Live Score */}
              {match.status === 'running' && match.results?.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-medium">Live Score:</h4>
                  <div className="flex justify-between">
                    {match.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <p className="text-xl font-bold">{result?.team?.name}</p>
                        <p className="text-lg">{result?.score}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {match.streams_list?.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-medium">Streams:</h4>
                  <ul>
                    {match.streams_list.map((stream, index) => (
                      <li key={index}>
                        <a href={stream.raw_url} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-white">
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
