/**
 * Created by Kronenberg on 7/20/17.
 */

import axios from 'axios';
import {
  GET_ALL_USERS_INITIAL,
  GET_ALL_USERS_PENDING,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_REJECTED
} from './secretReducers/getUsersReducer';

export function toInitial() {
  dispatch({ type: GET_ALL_USERS_INITIAL });
}
export function getAllUsersADMINSONLY(USER_TOKEN) {
  const AuthStr = 'Bearer '.concat(USER_TOKEN);
  return (dispatch) => {
    dispatch({ type: GET_ALL_USERS_PENDING });
    axios.get('https://hidden-bastion.herokuapp.com/api/users', { headers: { Authorization: AuthStr } })
      .then(response => {
      dispatch({ type: GET_ALL_USERS_SUCCESS,  payload: response });
    })
      .catch((error) => {
        dispatch({ type: GET_ALL_USERS_REJECTED,  payload: response });
      });
  }
}