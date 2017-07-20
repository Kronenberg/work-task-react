/**
 * Created by Kronenberg on 7/20/17.
 */


import axios from 'axios';
import {
  REGISTER_USER_PENDING,
  REGISTER_USER_REJECTED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_INITIAL
} from './RegisterReducers/RegisterReducer';

export function registerToInitial() {
  dispatch({ type: REGISTER_USER_INITIAL });
}

export function localRegister(user) {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER_PENDING });
    axios.post('https://hidden-bastion.herokuapp.com/api/users', {
      username: user.username,
      email: user.email,
      password: user.password
    })
      .then((response) => {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: response });
      })
      .catch((error) => {
        dispatch({ type: REGISTER_USER_REJECTED, payload: error });
      });
  }
}