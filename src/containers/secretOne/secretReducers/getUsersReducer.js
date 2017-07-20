/**
 * Created by Kronenberg on 7/20/17.
 */
export const GET_ALL_USERS_PENDING = 'LOGIN_PENDING';
export const GET_ALL_USERS_SUCCESS = 'LOGIN_SUCCESS';
export const GET_ALL_USERS_REJECTED = 'LOGIN_REJECTED';
export const GET_ALL_USERS_INITIAL = 'LOGIN_INITIAL';

const initialState = {
  pending: false,
  success: false,
  rejected: false,
  response: null,
  error: null
};

export default function getAllUsers(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_USERS_PENDING:
      return {
        ...state,
        pending: true,
        success: false,
        rejected: false
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        success: true,
        pending: false,
        response: action.payload
      };
    case GET_ALL_USERS_REJECTED:
      return {
        ...state,
        pending: false,
        success: false,
        rejected: true,
        error: action.payload
      };
    case GET_ALL_USERS_INITIAL:
      return {
        ...state,
        pending: false,
        success: false,
        rejected: false,
        response: null,
        accessToken: null,
        error: null
      };
    default:
      return state;
  }
}