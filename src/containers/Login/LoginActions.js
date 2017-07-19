import axios from 'axios';
import {
  LOGIN_INITIAL,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_REJECTED
} from './LoginReducer/loginReducer';

export function logOut() {
  dispatch({ type: LOGIN_INITIAL });
  localStorage.removeItem('user_token');
}

export function localLogin(user) {
  return (dispatch) => {
    dispatch({ type: LOGIN_PENDING });
    axios.post('https://hidden-bastion.herokuapp.com/api/users/authenticate', {
      email: user.email,
      password: user.password
    })
      .then((response) => {
        dispatch({ type: LOGIN_SUCCESS, payload: response });
        localStorage.setItem('user_token', response.data.id_token);
      })
      .catch((error) => {
        dispatch({ type: LOGIN_REJECTED, payload: error });
      });
  }
}