require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import {Link} from 'react-router';

export const DashBoard = (props) => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <h5>Lähimmät</h5>
        <div className="list-group facility-drilldown">
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-nosnow fa fa-tint"></span>
              Paloheinä 1,8 km
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil">
              </span><span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä 3 km
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä 5 km
            </Link>
        </div>
        <h5>Viimeisimmät</h5>
        <div className="list-group facility-drilldown">
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-smile-o"></span>
              Paloheinä 1,8 km
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil">
              </span><span className="condition condition-ok fa fa-smile-o"></span>
              Paloheinä 3 km
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-smile-o"></span>
              Paloheinä 5 km
            </Link>
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
            <Link to="/browse/lvl2" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-right"></span>
              Itä
            </Link>
            <Link to="/browse/lvl2" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-right"></span>
              Länsi
            </Link>
            <Link to="/browse/lvl2" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-right"></span>
              Salmi
            </Link>
            <Link to="/browse/lvl2" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-right"></span>
              Luukki
            </Link>
            <Link to="/browse/lvl2" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-right"></span>
              Pirttimäki
            </Link>
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
            <Link to="/browse/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-left"></span>
              Takaisin
            </Link>
          </div>
          <h5>Länsi</h5>
          <div className="list-group facility-drilldown">
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-nosnow fa fa-tint"></span>
              Paloheinä 1,8 km
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil">
              </span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä 3 km
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä 5 km
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-nosnow fa fa-tint"></span>
              Paloheinä 7,5 km
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä peltolatu
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä metsälatu
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Paloheinä vetokoiralatu
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Hakuninmaa rullasuksirata
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pitkäkoski – Niskala
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Tuomarinkylän peltolatu
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Lassila – Kannelmäki – Keskuspuisto
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pirkkola
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pirkkola - Laakso
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pirkkola – Pitkäkoski
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Tali
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Tali – Haaga – Pirkkola
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Maunulan kuntorata
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Taivaskallio – Tuomarinkartano - Paloheinä</Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pukinmäki peltolatu
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Pitäjänmäki kuntorata
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Kannelmäki peltolatu
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Oulunkylä kuntorata
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Malminkartano
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Kaikki Keskuspuiston ladut
            </Link>
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-ok fa fa-meh-o"></span>
              Kaikki Paloheinän ladut (1.8, 3, 5, 7.5 km)
            </Link>
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
            <Link to="/browse/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-left"></span>
              Takaisin
            </Link>
          </div>
          <hr/>
            <h5>Lassila - Kannelmäki - Keskuspuisto<br/><small>Päivitetty 7.10.2016 11:23</small></h5>
          <hr/>
          <h6>Ladun kunto</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <Link to="/status/change" className="btn btn-success btn-block active"><span className="fa fa-smile-o fa-lg"></span><br/>Hyvä</Link>
          <Link to="/status/change" className="btn btn-success btn-block"><span className="fa fa-meh-o fa-lg"></span><br/>Tyydyttävä</Link>
          <Link to="/status/change" className="btn btn-warning btn-block"><span className="fa fa-frown-o fa-lg"></span><br/>Heikko</Link>
          <Link to="/status/change" className="btn btn-warning btn-block"><span className="fa fa-road fa-lg"></span><br/>Pohjattu</Link>
          <Link to="/status/change" className="btn btn-warning btn-block"><span className="fa fa-pagelines fa-lg"></span><br/>Roskainen</Link>
        </div>

        <div className="col-xs-6">
          <Link to="/status/change" className="btn btn-danger btn-block"><span className="fa fa-times-circle fa-lg"></span><br/>Suljettu</Link>
          <Link to="/status/change" className="btn btn-danger btn-block"><span className="fa fa-tint fa-lg"></span><br/>Lumenpuute</Link>
          <Link to="/status/change" className="btn btn-danger btn-block"><span className="fa fa-trophy fa-lg"></span><br/>Kilpailut</Link>
          <Link to="/status/change" className="btn btn-danger btn-block"><span className="fa fa-spinner fa-lg"></span><br/>Lumetus</Link>
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
            <Link to="/browse/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-chevron-left"></span>
              Takaisin
            </Link>
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
          <Link to="/status/" className="btn btn-success btn-block active"><span className="fa fa-smile-o fa-lg"></span><br/>Hyvä</Link>
        </div>

        <div className="col-xs-6">
          <Link to="/status/" className="btn btn-warning btn-block"><span className="fa fa-frown-o fa-lg"></span><br/>Heikko</Link>
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
            <Link to="/status/" className="list-group-item">
              <span className="action-icon glyphicon glyphicon-pencil"></span>
              <span className="condition condition-nosnow fa fa-tint"></span>
              Paloheinä 1,8 km
            </Link>
        </div>
        <a href="#" className="btn btn-default btn-block"><span className="glyphicon glyphicon-refresh"></span> Yritä uudelleen</a>
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
              <li><Link to="/" className="btn-lg"><span className="glyphicon glyphicon-home"></span></Link></li>
              <li><Link to="/browse/" className="btn-lg"><span className="glyphicon glyphicon-pencil"></span></Link></li>
              <li><Link to="/outbox/" className="btn-lg"><span className="glyphicon glyphicon-transfer"></span></Link></li>
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

