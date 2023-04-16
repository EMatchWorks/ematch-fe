import React from 'react';
import { useParams } from 'react-router-dom';
import matches from '../../data/matches';
import NotFound from '../NotFound/NotFound';

const Match = () => {
  const params = useParams();
  const match = matches.find(
    (course) => course.id.toString() === params.match_id,
  );
  if (!match) {
    return <NotFound />;
  }
  return (
    <div>
      <div className="">{'' + match.id}</div>
    </div>
  );
};

export default Match;
