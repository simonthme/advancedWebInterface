/**
 * Created by simonthome on 12/12/2016.
 */
import { combineReducers } from 'redux';
import users from './userReducer';


export default combineReducers({
  users: users,
});