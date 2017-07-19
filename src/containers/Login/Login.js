import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import LoginForm from 'components/LoginForm/LoginForm';

// @ACTIONS
import { localLogin } from './LoginActions'

class Login extends Component {
  static propTypes = {
    userLocalLogin: PropTypes.object
  }

  static defaultProps = {
    user: null
  }

  static contextTypes = {
    router: PropTypes.object
  }

  gogo = data => this.props.dispatch(localLogin(data));

  render() {
    const { success, rejected, response } = this.props.userLocalLogin;
    console.log(response);
    return (
      <div className="container">
        <Helmet title="Login" />
        <h1>Login Page</h1>
      <LoginForm onSubmit={this.gogo} />
        <br />
        <br />
        <h4>{ success ? ` Hello it's your TOKEN FROM "JWT AUTH" its modern way to secure your data :) https://jwt.io/ - ${response.data.id_token} and it will be now in your local storage this way i found on heroku :P` : ''}</h4>
        <h1>{ rejected ? 'Username or password incorrect!' : ''}</h1>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    userLocalLogin: state.localLogin
  };
}

const LoginPage = connect(mapStateToProps)(Login);

export default LoginPage;