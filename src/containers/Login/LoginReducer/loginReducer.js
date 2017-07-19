export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';
export const LOGIN_INITIAL = 'LOGIN_INITIAL';

const initialState = {
  pending: false,
  success: false,
  rejected: false,
  response: null,
  accessToken: null,
  error: null
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        pending: true,
        success: false,
        rejected: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        success: true,
        pending: false,
        response: action.payload
      };
    case LOGIN_REJECTED:
      return {
        ...state,
        pending: false,
        success: false,
        rejected: true,
        error: action.payload
      };
    case LOGIN_INITIAL:
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