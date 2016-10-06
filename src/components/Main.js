require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

export const DashBoard = (props) => {
  return <p>DashBoard</p>;
}

export const Tree = (props) => {
  return <p>Tree</p>;
}

export const FacilityStatus = (props) => {
  return <p>FacilityStatus</p>;
}

export class App extends React.Component {
  render() {
    return (
      <div className="index">
          <div className="navigation-bar">
              <p>Fixed navigation bar</p>
          </div>
          <div className="page-contents">
              {this.props.children}
          </div>
      </div>
    );
  }
}

App.defaultProps = {
};

