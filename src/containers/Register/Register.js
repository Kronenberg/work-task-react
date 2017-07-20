import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { localRegister } from './RegisterActions';

class Register extends Component {
  static propTypes = {
    localRegiser: PropTypes.object
  }

  register = data => this.props.dispatch(localRegister(data));

  render() {
    const { success, pending, rejected } = this.props.localRegiser;
    return (
      <div className="container">
        <Helmet title="Register" />
        <h1>Register Page</h1>
        <h4>When you create user on this page, dat user has admin credential's automaticly</h4>
        { pending ? <img src="https://media.giphy.com/media/RHEqKwRZDwFKE/giphy.gif" alt=":D"/> : <RegisterForm onSubmit={this.register} /> }
        <br />
        <br />
        <h4>{ success ? 'You are create user succesfully!!' : '' }</h4>
        <h4>{ success ? <img src="https://media.giphy.com/media/GoIa0qRbvtYha/giphy.gif" alt="jude-aproove"/> : '' }</h4>
        <h4>{ rejected ? 'server error' : '' }</h4>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    localRegiser: state.localRegister
  };
}

const RegisterPage = connect(mapStateToProps)(Register);

export default RegisterPage;