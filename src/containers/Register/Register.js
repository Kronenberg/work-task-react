import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import * as authActions from 'redux/modules/auth';
import * as notifActions from 'redux/modules/notifs';

@connect(
  () => ({}),
  { ...notifActions, ...authActions })
export default class Register extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    notifSend: PropTypes.func.isRequired
  }

  register = data => console.log(data);

  render() {
    return (
      <div className="container">
        <Helmet title="Register" />
        <h1>Register</h1>
        <RegisterForm onSubmit={this.register} />
      </div>
    );
  }
}
