import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import GbSearchBar from './components/GbSearchBar';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={GbSearchBar} />
  </Route>
);
