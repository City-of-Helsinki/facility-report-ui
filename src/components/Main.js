require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

export const DashBoard = (props) => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <h5>Lähimmät</h5>
        <div className="list-group facility-drilldown">
            <a href="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-nosnow fa fa-tint"></span>
              Paloheinä 1,8 km
            </a>
            <a href="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil">
              </span><span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä 3 km
            </a>
            <a href="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä 5 km
            </a>
        </div>
        <h5>Viimeisimmät</h5>
        <div className="list-group facility-drilldown">
            <a href="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-smile-o"></span>
              Paloheinä 1,8 km
            </a>
            <a href="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil">
              </span><span className="condition condition-ok fa fa-smile-o"></span>
              Paloheinä 3 km
            </a>
            <a href="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-smile-o"></span>
              Paloheinä 5 km
            </a>
        </div>
      </div>
    </div>
  );
}

export const Tree = (props) => {
  return (
      <div className="row">
        <div className="col-xs-12">
          <h5>Alueet</h5>
          <div className="list-group facility-drilldown">
            <a href ="/browse/lvl2" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-right"></span>
              Itä
            </a>
            <a href ="/browse/lvl2" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-right"></span>
              Länsi
            </a>
            <a href ="/browse/lvl2" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-right"></span>
              Salmi
            </a>
            <a href ="/browse/lvl2" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-right"></span>
              Luukki
            </a>
            <a href ="/browse/lvl2" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-right"></span>
              Pirttimäki
            </a>
          </div>
        </div>
      </div>
  );
}

export const TreeBranch = (props) => {
  return (
      <div className="row">
        <div className="col-xs-12">
          <div className="list-group facility-return">
            <a href="/browse/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-left"></span>
              Takaisin
            </a>
          </div>
          <h5>Länsi</h5>
          <div className="list-group facility-drilldown">
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-nosnow fa fa-tint"></span>
              Paloheinä 1,8 km
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil">
              </span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä 3 km
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä 5 km
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-nosnow fa fa-tint"></span>
              Paloheinä 7,5 km
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä peltolatu
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä metsälatu
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä vetokoiralatu
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Hakuninmaa rullasuksirata
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pitkäkoski – Niskala
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Tuomarinkylän peltolatu
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Lassila – Kannelmäki – Keskuspuisto
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pirkkola
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pirkkola - Laakso
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pirkkola – Pitkäkoski
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Tali
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Tali – Haaga – Pirkkola
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Maunulan kuntorata
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Taivaskallio – Tuomarinkartano - Paloheinä</a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pukinmäki peltolatu
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pitäjänmäki kuntorata
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Kannelmäki peltolatu
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Oulunkylä kuntorata
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Malminkartano
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Kaikki Keskuspuiston ladut
            </a>
            <a href ="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Kaikki Paloheinän ladut (1.8, 3, 5, 7.5 km)
            </a>
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
          <div className="list-group facility-return clearfix">
            <a href="/browse/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-left"></span>
              Takaisin
            </a>
          </div>
          <hr/>
            <h5>Lassila - Kannelmäki - Keskuspuisto<br/><small>Päivitetty 7.10.2016 11:23</small></h5>
          <hr/>
          <h6>Ladun kunto</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <a href ="/status/change" className="btn btn-success btn-block active"><span className="fa fa-smile-o fa-lg"></span><br/>Hyvä</a>
          <a href ="/status/change" className="btn btn-success btn-block"><span className="fa fa-meh-o fa-lg"></span><br/>Tyydyttävä</a>
          <a href ="/status/change" className="btn btn-warning btn-block"><span className="fa fa-frown-o fa-lg"></span><br/>Heikko</a>
          <a href ="/status/change" className="btn btn-warning btn-block"><span className="fa fa-road fa-lg"></span><br/>Pohjattu</a>
          <a href ="/status/change" className="btn btn-warning btn-block"><span className="fa fa-pagelines fa-lg"></span><br/>Roskainen</a>
        </div>

        <div className="col-xs-6">
          <a href ="/status/change" className="btn btn-danger btn-block"><span className="fa fa-times-circle fa-lg"></span><br/>Suljettu</a>
          <a href ="/status/change" className="btn btn-danger btn-block"><span className="fa fa-tint fa-lg"></span><br/>Lumenpuute</a>
          <a href ="/status/change" className="btn btn-danger btn-block"><span className="fa fa-trophy fa-lg"></span><br/>Kilpailut</a>
          <a href ="/status/change" className="btn btn-danger btn-block"><span className="fa fa-spinner fa-lg"></span><br/>Lumetus</a>
        </div>
      </div>
    </div>
  );
}

export const FacilityStatusChange = (props) => {
  return (
    <div className="facility-status">
      <div className="row">
        <div className="col-xs-12">
          <div className="list-group facility-return clearfix">
            <a href="/browse/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-left"></span>
              Takaisin
            </a>
          </div>
          <hr/>
            <h5>Lassila - Kannelmäki - Keskuspuisto<br/><small>Päivitetty 7.10.2016 11:23</small></h5>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h6>Oletko varma että haluat muuttaa ladun statuksen?</h6>
        </div>
        <div className="col-xs-6">
          <a href ="/status/" className="btn btn-success btn-block active"><span className="fa fa-smile-o fa-lg"></span><br/>Hyvä</a>
        </div>

        <div className="col-xs-6">
          <a href ="/status/" className="btn btn-warning btn-block"><span className="fa fa-frown-o fa-lg"></span><br/>Heikko</a>
        </div>
      </div>
    </div>
  );
}

export const Outbox = (props) => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <h5>Verkkoyhteyttä odottavat päivitykset<br/><small>Näitä päivityksiä ei ole vielä julkaistu.</small></h5>
        <div className="list-group facility-drilldown">
            <a href="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-nosnow fa fa-tint"></span>
              Paloheinä 1,8 km
            </a>
        </div>
        <a href ="#" className="btn btn-default btn-block"><span className="glyphicon glyphicon-refresh"></span> Yritä uudelleen</a>
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
              <li><a href="/dashboard/" className="btn-lg"><span className="glyphicon glyphicon-home"></span></a></li>
              <li><a href="/browse/" className="btn-lg"><span className="glyphicon glyphicon-pencil"></span></a></li>
              <li><a href="/outbox/" className="btn-lg"><span className="glyphicon glyphicon-transfer"></span></a></li>
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

