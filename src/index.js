import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import * as components from './components/Main';
import 'bootstrap-sass';

// Render the main component into the dom
ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={components.App} >
          <Route path="/dashboard" component={components.DashBoard} />
          <Route path="/browse" component={components.Tree} />
          <Route path="/status" component={components.FacilityStatus} />
      </Route>
  </Router>, document.getElementById('app')
);
