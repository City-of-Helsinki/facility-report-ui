require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

export const DashBoard = (props) => {
  return <p>DashBoard</p>;
}

export const Tree = (props) => {
  return (
      <div className="row">
        <div className="col-xs-12">
          <div className="list-group facility-return">
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-left"></span> <span className="pull-right">Takaisin</span></button>
          </div>
          <h5>Länsi</h5>
          <div className="list-group facility-drilldown">
            <button type="button" className="list-group-item">
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="condition condition-nosnow fa fa-tint"></span>
              Paloheinä 1,8 km
            </button>
            <button type="button" className="list-group-item">
              <span className="glyphicon glyphicon-chevron-right">
              </span><span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä 3 km
            </button>
            <button type="button" className="list-group-item">
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä 5 km
            </button>
            <button type="button" className="list-group-item">
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="condition condition-nosnow fa fa-tint"></span>
              Paloheinä 7,5 km
            </button>
            <button type="button" className="list-group-item">
              <span className="glyphicon glyphicon-chevron-right"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä peltolatu
            </button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Paloheinä metsälatu</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Paloheinä vetokoiralatu</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Hakuninmaa rullasuksirata</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Pitkäkoski – Niskala</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Tuomarinkylän peltolatu</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Lassila – Kannelmäki – Keskuspuisto</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Pirkkola</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Pirkkola - Laakso</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Pirkkola – Pitkäkoski</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Tali</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Tali – Haaga – Pirkkola</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Maunulan kuntorata</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Taivaskallio – Tuomarinkartano - Paloheinä</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Pukinmäki peltolatu</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Pitäjänmäki kuntorata</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Kannelmäki peltolatu</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Oulunkylä kuntorata</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Malminkartano</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Kaikki Keskuspuiston ladut</button>
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-right"></span>Kaikki Paloheinän ladut (1.8, 3, 5, 7.5 km)</button>
          </div>
        </div>
      </div>
  );
}

export const FacilityStatus = (props) => {
  return (
    <div className="facility-status">
      <div className="row">
        <div className="col-xs-12">
          <div className="list-group facility-return">
            <button type="button" className="list-group-item"><span className="glyphicon glyphicon-chevron-left"></span> <span className="pull-right">Takaisin</span></button>
          </div>
          <h5>Lassila - Kannelmäki - Keskuspuisto<br/><small>Päivitetty 7.10.2016 11:23</small></h5>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <button type="button" className="btn btn-success btn-block active"><span className="fa fa-smile-o fa-lg"></span><br/>Hyvä</button>
          <button type="button" className="btn btn-success btn-block"><span className="fa fa-meh-o fa-lg"></span><br/>Tyydyttävä</button>
          <button type="button" className="btn btn-success btn-block"><span className="fa fa-frown-o fa-lg"></span><br/>Heikko</button>
          <button type="button" className="btn btn-success btn-block"><span className="fa fa-road fa-lg"></span><br/>Pohjattu</button>
          <button type="button" className="btn btn-success btn-block"><span className="fa fa-pagelines fa-lg"></span><br/>Roskainen</button>
        </div>

        <div className="col-xs-6">
          <button type="button" className="btn btn-warning btn-block"><span className="fa fa-times-circle fa-lg"></span><br/>Suljettu</button>
          <button type="button" className="btn btn-warning btn-block"><span className="fa fa-tint fa-lg"></span><br/>Lumenpuute</button>
          <button type="button" className="btn btn-warning btn-block"><span className="fa fa-trophy fa-lg"></span><br/>Kilpailut</button>
          <button type="button" className="btn btn-warning btn-block"><span className="fa fa-spinner fa-lg"></span><br/>Lumetus</button>
        </div>
      </div>
    </div>
  );
}

export class App extends React.Component {
  render() {
    return (
      <div className="index">

        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li><a href="/dashboard/"><span className="glyphicon glyphicon-home"></span> <span className="sr-only">(current)</span></a></li>
                <li className="active"><a href="/browse/"><span className="glyphicon glyphicon-pencil"></span></a></li>
                <li><a href="/status/"><span className="glyphicon glyphicon-transfer"></span></a></li>
              </ul>
          </div>
        </nav>
          <div className="view-content container-fluid">
              {this.props.children}
          </div>
      </div>
    );
  }
}

App.defaultProps = {
};

