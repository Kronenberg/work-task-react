/**
 * Created by Kronenberg on 7/20/17.
 */

/**
 * Created by Kronenberg on 7/19/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Chart } from 'react-google-charts';


class secretTwo extends Component {
  static propTypes = {

  }

  static defaultProps = {
  }

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      options: {
        title: 'Dummy Table with dummy information',
        hAxis: {title: 'Money', minValue: 0, maxValue: 15},
        vAxis: {title: 'Dollars', minValue: 0, maxValue: 15},
        legend: 'none',
      },
      data:[
        ["Year","Sales","Expenses"],
        ["2013",1000,400],
        ["2014",1170,460],
        ["2015",660,1120],
        ["2016",1030,540]]
    }
  }

  render() {

    return (
      <div className="container">
        <Helmet title="SecretTwo" />
        <h1>Secret Two</h1>
        <h4>Very dummy table have no time to this :P</h4>
        <table className="table table-bordered">
          <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
          </tbody>
        </table>
        <Chart
          chartType="AreaChart"
          data={this.state.data}
          options={this.state.options}
          graph_id="AreaChart"
          width="100%"
          height="400px"
          legend_toggle
        />
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

export default secretTwo;