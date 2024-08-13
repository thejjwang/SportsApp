import React from 'react';

const ScoreCard = ({ team1, team2, score1, score2 }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-bold text-lg">{team1} vs {team2}</h3>
      <p className="text-xl">{score1} - {score2}</p>
    </div>
  );
};

export default ScoreCard;
