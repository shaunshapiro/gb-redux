import request from 'then-jsonp';

class gbApi {

  static runSearch(search) {
    let url='https://www.giantbomb.com/api/games/?format=jsonp&json_callback=responseObject&api_key=c7d47b04d71a7446a8aced4f540c6711cc859ebc';
    let options = {
              qs: {
                filter: 'name:' + search
              },
              callbackName: 'responseObject'
            };
    return (
      request('GET', url, options).done(response => {
        console.log(response);
        return response;
      }).catch(error => {
        return error;
      })
    )
  }
}

export default gbApi;
