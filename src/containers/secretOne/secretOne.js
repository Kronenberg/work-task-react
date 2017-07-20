/**
 * Created by Kronenberg on 7/19/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Chart } from 'react-google-charts';
// @ACTIONS
import { getAllUsersADMINSONLY, toInitial } from './secretActions';

function renderUsers(users) {
  if (users.length > 0) {
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user._id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.admin ? 'admin' : 'user'}</td>
      </tr>
    ));
  }
  else return [];
}



class secretOne extends Component {
  static propTypes = {
    response: PropTypes.object
  }

  static defaultProps = {
    data: []
  }

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      usersFromState: [],
      options: {
        title: 'Dummy Table with dummy information',
        hAxis: {title: 'Money', minValue: 0, maxValue: 15},
        vAxis: {title: 'Dollars', minValue: 0, maxValue: 15},
        legend: 'none',
      },
      data: [
        ['Dummy', 'Funny'],
        [8, 12],
        [4, 5.5],
        [11, 14],
        [4, 5],
        [3, 3.5],
        [6.5, 7],
      ],
    }
  }
  componentWillMount() {
    const token = localStorage.getItem('user_token');
    this.props.dispatch(getAllUsersADMINSONLY(token));
  }

  fetchUsers = () => {
    const token = localStorage.getItem('user_token');
    this.props.dispatch(getAllUsersADMINSONLY(token));
  }

  render() {
    const fetchedUsers = this.props.allUsers.success && !this.props.allUsers.rejected ? this.props.allUsers.response.data : [];
    const users = renderUsers(fetchedUsers);
    return (
      <div className="container">
        <Helmet title="Secret One" />
        <h1>Secret One</h1>
        <div className="container">
          <Helmet title="SecretTwo" />
          <h1>Secret Two</h1>
          <button className="btn btn-primary" onClick={this.fetchUsers}>GET ALL USERS</button>
          <h4>You can see this users because u have admin user token</h4>
          <table className="table table-bordered">
            <thead>
            <tr>
              <th>_id</th>
              <th>username</th>
              <th>email</th>
              <th>role</th>
            </tr>
            </thead>
            <tbody>
            { this.props.allUsers.pending ? <img src="https://media.giphy.com/media/RHEqKwRZDwFKE/giphy.gif" alt=""/> : users }
            </tbody>
          </table>
        </div>
        <Chart
          chartType="ScatterChart"
          data={this.state.data}
          options={this.state.options}
          graph_id="ScatterChart"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    allUsers: state.getAllUsers
  };
}

const secretOnePage = connect(mapStateToProps)(secretOne);

export default secretOnePage;