import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ResultItem from './components/ResultItem';
import ResultPage from './components/ResultPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ResultPage}>
      <Route path="/games/:id" component={ResultItem} />
    </IndexRoute>
  </Route>
);
