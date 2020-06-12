// import action types from ../actions

import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  POST_START,
  POST_SUCCESS,
  POST_FAILURE,
} from '../actions';

// 1. create initial state
const initialState = {
  players: [],
  isFetching: false,
  error: '',
};

// 2. pass state
// state = initialState gives it a default parameter
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        players: action.payload,
        isFetching: true,
        error: '',
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case POST_START:
      return {
        ...state,
        players: [
          ...state.players
        ],
        isFetching: true,
        error: '',
      };
    case POST_SUCCESS:
      return {
        ...state,
        players: action.payload,
        isFetching: false,
        error: '',
      };
    case POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
