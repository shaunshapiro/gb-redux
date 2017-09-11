import fetchJsonp from 'fetch-jsonp';

class gbApi {

  static runSearch(search) {
    let url='https://www.giantbomb.com/api/games/?format=jsonp&json_callback=responseObject&api_key=c7d47b04d71a7446a8aced4f540c6711cc859ebc&filter=name:' + search;
    let options = {
              jsonpCallbackFunction: 'responseObject'
            };
    return (
      fetchJsonp(url, options).then(function(response) {
        console.log(response.json());
        return response.json();
      })
    )
  }
}

export default gbApi;
