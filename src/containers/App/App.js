import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Alert from 'react-bootstrap/lib/Alert';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { Notifs, InfoBar } from 'components';
import { push } from 'react-router-redux';
import config from 'config';
import { asyncConnect } from 'redux-connect';
import { logOut } from '../Login/LoginActions';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => {
    const promises = [];

    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }
    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    notifs: state.notifs,
    user: state.auth.user,
    userLocalLogin: state.localLogin.response
  }),
  { logout, pushState: push })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
    user: PropTypes.object,
    notifs: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static defaultProps = {
    user: null
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.userLocalLogin && nextProps.userLocalLogin) {
      // login
      const redirect = this.props.router.location.query && this.props.router.location.query.redirect;
      this.props.pushState(redirect || '/loginSuccess');
    } else if (this.props.userLocalLogin && !nextProps.userLocalLogin) {
      // logout
      this.props.pushState('/');
    }
  }

  handleLogout = event => this.props.dispatch(logOut());

  render() {
    const { user, notifs, children } = this.props;
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head} />
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{ color: '#2ca0f2' }}>
                <div className={styles.brand} />
                <span>{this.props.userLocalLogin ? 'You have access to special data! :P' : 'You have no access to special data! :P' }</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar>
              {!this.props.userLocalLogin && <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>}
              {!this.props.userLocalLogin && <LinkContainer to="/register">
                <NavItem>Register</NavItem>
              </LinkContainer>}
              {this.props.userLocalLogin && <LinkContainer to="/">
                <NavItem className="logout-link" onClick={this.handleLogout}>
                  Logout
                </NavItem>
              </LinkContainer>}
              {this.props.userLocalLogin && <LinkContainer to="/secretOne">
                <NavItem className="logout-link">
                  SecretOne
                </NavItem>
              </LinkContainer>}
              {this.props.userLocalLogin && <LinkContainer to="/secretTwo">
                <NavItem className="logout-link">
                  SecretTwo
                </NavItem>
              </LinkContainer>}
            </Nav>
            {user && <p className="navbar-text">
              Logged in as <strong>{user.email}</strong>.
            </p>}
            <Nav navbar pullRight>
              <NavItem
                target="_blank"
                title="View on Github"
                href="https://github.com/erikras/react-redux-universal-hot-example"
              >
                <i className="fa fa-github" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className={styles.appContent}>
          {notifs.global && <div className="container">
            <Notifs
              className={styles.notifs}
              namespace="global"
              NotifComponent={props => <Alert bsStyle={props.kind}>{props.message}</Alert>}
            />
          </div>}

          {children}
        </div>
        <InfoBar />

        <div className="well text-center">
          There is awesome footer
        </div>
      </div>
    );
  }
}
