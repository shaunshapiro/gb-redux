import gbApi from '../api/gbApi';
import * as types from './actionTypes';

let default_image = 'http://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg'

export function loadGames(search) {
  return function(dispatch) {
    return gbApi.runSearch(search).then(response => {
      let formattedResponse = response.results.map(function(x){
                                                    return {
                                                      name: x.name,
                                                      image: (x.image ? x.image.screen_url : default_image),
                                                      id: x.id
                                                    }
                                                  }
                                                )
      dispatch(loadGamesSuccess(formattedResponse));
    })
  };
}

export function loadGamesSuccess(games) {
  return {
    type: types.LOAD_GAMES_SUCCESS, games
  };
}
