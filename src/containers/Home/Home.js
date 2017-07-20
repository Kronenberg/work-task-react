import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { CounterButton, GithubButton } from 'components';
import config from 'config';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

@connect(
  state => ({
    online: state.online
  })
)
export default class Home extends Component {

  static propTypes = {
    online: PropTypes.bool.isRequired
  };

  render() {
    const { online } = this.props;
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home" />
        <div className="container">
          <h1>Welcome!</h1>
          <h2> <a href="">Client: https://github.com/Kronenberg/work-task-react.git</a></h2>
          <h2> <a href="">Server: https://github.com/Kronenberg/hapi-server.git</a></h2>
          <h4>You can create your own user with admin credentialns on register page</h4>
          <h4>Or you can go login page and take mine user (he is already created!)</h4>
          <h4>After login u will see two secret routes above!</h4>
          <h4>Good luck have fun</h4>

        </div>
      </div>
    );
  }
}
