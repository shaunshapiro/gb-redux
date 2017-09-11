import gbApi from '../api/gbApi';
import * as types from './actionTypes';

export function loadGames(search) {
  return function(dispatch) {
    return gbApi.runSearch(search).then(response => {
      let formattedResponse = response.results.map(function(x){return {name: x.name, image: x.image.screen_large_url}})
      dispatch(loadGamesSuccess(formattedResponse));
    })
  };
}

export function loadGamesSuccess(games) {
  return {
    type: types.LOAD_GAMES_SUCCESS, games
  };
}
