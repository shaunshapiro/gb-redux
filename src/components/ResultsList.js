import React, {PropTypes} from 'react';

const ResultsList =({games}) => {
  return (
    <ul className="list-group">
      {games.map(game =>
        <li className="list-group-item" key={game.id}>
          {game.name}
          <img src={game.image} alt={game.name} height="100" width="100" />
        </li>
      )}
    </ul>
  )
};

ResultsList.PropTypes ={
  games: PropTypes.array.isRequired
};

export default ResultsList;
