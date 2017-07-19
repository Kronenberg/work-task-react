/**
 * Created by Kronenberg on 7/19/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// @ACTIONS
import { localLogin } from './LoginActions'

class secretOne extends Component {
  static propTypes = {

  }

  static defaultProps = {
  }

  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    return (
      <div className="container">
        <Helmet title="Login" />
        <h1>Secret One</h1>
      </div>
    );
  }
}


// function mapStateToProps(state) {
//   return {
//     userLocalLogin: state.localLogin
//   };
// }
//
// const LoginPage = connect(mapStateToProps)(Login);

export default secretOne;