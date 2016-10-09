import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import * as components from './components/Main';
import 'bootstrap-sass';

// Render the main component into the dom
ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={components.App} >
          <IndexRoute component={components.DashBoard} />
          <Route path="/browse" component={components.Tree} />
          <Route path="/browse/lvl2" component={components.TreeBranch} />
          <Route path="/status" component={components.FacilityStatus} />
          <Route path="/status/change" component={components.FacilityStatusChange} />
          <Route path="/outbox/" component={components.Outbox} />
      </Route>
  </Router>, document.getElementById('app')
);
