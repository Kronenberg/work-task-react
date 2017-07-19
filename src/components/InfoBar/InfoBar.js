import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { load } from 'redux/modules/info';

@connect(
  state => ({ info: state.info.data }),
  { load })
export default class InfoBar extends Component {
  static propTypes = {
    info: PropTypes.object,
    load: PropTypes.func.isRequired
  }

  static defaultProps = {
    info: null
  };

  render() {
    const { info, load } = this.props; // eslint-disable-line no-shadow
    const styles = require('./InfoBar.scss');
    return (
      <div className={`${styles.infoBar} well`}>
        <div className="container">
         Login/Register Example
        </div>
      </div>
    );
  }
}
