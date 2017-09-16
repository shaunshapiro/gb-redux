import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ResultsPage from './components/ResultsPage';
import ResultPage from './components/ResultPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ResultsPage} />
    <Route path="/games" component={ResultsPage}>
      <Route path="/games/:id" component={ResultPage} />
    </Route>
  </Route>
);
