import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postPlayers } from '../actions';

const PlayerForm = (props) => {
  const [player, setPlayer] = useState({
    name: '',
    rank: '',
    nickname: '',
  });

  const submitHandler = (event) => {
    event.preventDefault();
    props.postPlayer(player);
    document.getElementById('playerForm').reset();
  };

  const inputHandler = (event) => {
    event.preventDefault();
    setPlayer({ ...player, [event.target.name]: event.target.value });
  };
  return (
    <div className='form'>
      <form id='playerForm'>
        <input
          type='text'
          name='name'
          label='name'
          placeholder='Player Name'
          value={props.name}
          onChange={inputHandler}
          className='input'
        />
        <input
          type='text'
          name='rank'
          label='rank'
          placeholder='Player Rank'
          value={props.rank}
          onChange={inputHandler}
          className='input'
        />
        <input
          type='text'
          name='nickname'
          label='nickname'
          placeholder='Player Nickname'
          value={props.nickname}
          onChange={inputHandler}
          className='input'
        />
        <button className='btn' onClick={submitHandler}>
          Add new player
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    players: state.players,
    error: state.error,
  };
};

export default connect(mapStateToProps, {postPlayers})(PlayerForm);
