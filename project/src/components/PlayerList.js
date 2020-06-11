import React, { useEffect } from 'react';
import PlayerCard from './PlayerCard';

import { connect } from 'react-redux';
import { fetchPlayers } from '../actions';

const PlayerList = (props) => {
  console.log(props);

  useEffect(() => {
    props.fetchPlayers();
  }, [props]);

  return (
    <div>
      <p>Player List</p>
      <div className='card-container'>
        {props.player.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // left props: right state in store
    players: state.players,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchPlayers })(PlayerList);
