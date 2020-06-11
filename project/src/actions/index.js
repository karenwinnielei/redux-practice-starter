import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchPlayers = () => {
  dispatch({ type: FETCH_START });

  axios
    .get(`http://localhost:8888/players`)
    .then((response) => {
      console.log(response.data);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: FETCH_FAILURE, payload: error.response }),
    );
};

export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

// post needs props because the prop will end up being the payload and the thing being added
export const postPlayers = (player) => {
  dispatch({ type: POST_START });
  axios
    .post(`http://localhost:8888/players`, player)
    .then((response) => {
      console.log(response.data);
      dispatch({ type: POST_SUCCESS, payload: response.data });
    })
    .catch((error) =>
      dispatch({ type: POST_FAILURE, payload: error.response }),
    );
};
