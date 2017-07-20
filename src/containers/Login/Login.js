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
    const { success, rejected, response, pending } = this.props.userLocalLogin;
    console.log(response);
    return (
      <div className="container">
        <Helmet title="Login" />
        <h1>Login Page</h1>
        <h4>user with admin permission's</h4>
        <p>email: 123123@123123.com</p>
        <p>password: 123123</p>
        { pending ? <img src="https://media.giphy.com/media/RHEqKwRZDwFKE/giphy.gif" alt=""/> : <LoginForm onSubmit={this.gogo} /> }
        <br />
        <br />
        <h4>{ success ? ` Hello it's your TOKEN FROM "JWT AUTH" its modern way to secure your data :) https://jwt.io/ - and it will be saved in your local storage, this way i found on heroku` : ''}</h4>
        <h4>{ success ? `There is your token - ${response.data.id_token}` : ''}</h4>
        <h4>{ success ? <a href="https://jwt.io/">https://jwt.io/ You can check how JWT is working! :P</a> : ''}</h4>
        <h4>{ success ? <a href="https://hidden-bastion.herokuapp.com/">https://hidden-bastion.herokuapp.com/api/users link to the server</a> : ''}</h4>
        <h4>{ success ? `And this token already knows that you have admin credential's` : ''}</h4>
        <h1>{ rejected ? <img width="200" height="200" src="https://media.giphy.com/media/haZOqHKz9tTfW/giphy.gif" alt="error"/> : ''}</h1>
        <div>{ success ? <img src="https://media.giphy.com/media/81xwEHX23zhvy/giphy.gif" alt="fun :D"/> : ''}</div>
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