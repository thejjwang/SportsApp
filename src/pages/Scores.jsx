import React from 'react';
import ScoreCard from '../components/ScoreCard';

const Scores = () => {
  const sampleScores = [
    { team1: 'Team A', team2: 'Team B', score1: 2, score2: 3 },
    { team1: 'Team C', team2: 'Team D', score1: 1, score2: 1 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Scores</h2>
      <div className="grid grid-cols-1 gap-4">
        {sampleScores.map((score, index) => (
          <ScoreCard
            key={index}
            team1={score.team1}
            team2={score.team2}
            score1={score.score1}
            score2={score.score2}
          />
        ))}
      </div>
    </div>
  );
};

export default Scores;
