/**
 * Created by Kronenberg on 7/20/17.
 */
export const REGISTER_USER_PENDING = 'REGISTER_USER_PENDING';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_REJECTED = 'REGISTER_USER_REJECTED';
export const REGISTER_USER_INITIAL = 'REGISTER_USER_INITIAL';

const initialState = {
  pending: false,
  success: false,
  rejected: false,
  response: null,
  accessToken: null,
  error: null
};

export default function registerUserReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REGISTER_USER_PENDING:
      return {
        ...state,
        pending: true,
        success: false,
        rejected: false
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        success: true,
        pending: false,
        response: action.payload
      };
    case REGISTER_USER_REJECTED:
      return {
        ...state,
        pending: false,
        success: false,
        rejected: true,
        error: action.payload
      };
    case REGISTER_USER_INITIAL:
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