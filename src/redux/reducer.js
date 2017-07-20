import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';
import { reducer as form } from 'redux-form';
import auth from './modules/auth';
import notifs from './modules/notifs';
import counter from './modules/counter';
import info from './modules/info';
import loginReducer from '../containers/Login/LoginReducer/loginReducer';
import RegisterReducer from '../containers/Register/RegisterReducers/RegisterReducer';
import getAllUsers from '../containers/secretOne/secretReducers/getUsersReducer';

export default function createReducers(asyncReducers) {
  return {
    routing: routerReducer,
    reduxAsyncConnect,
    online: (v = true) => v,
    form,
    notifs,
    auth,
    localLogin: loginReducer,
    localRegister: RegisterReducer,
    getAllUsers: getAllUsers,
    counter: multireducer({
      counter1: counter,
      counter2: counter,
      counter3: counter
    }),
    info,
    // widgets,
    // survey,
    // chat,
    ...asyncReducers
  };
}
