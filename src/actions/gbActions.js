import gbApi from '../api/gbApi';
import * as types from './actionTypes';

export function loadGames(search) {
  debugger;
  return function(dispatch) {
    debugger;
    return gbApi.runSearch(search).then(response => {
      dispatch(loadGamesSuccess(response.results));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadGamesSuccess(games) {
  return {
    type: types.LOAD_GAMES_SUCCESS, games
  };
}
