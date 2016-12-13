/**
 * Created by simonthome on 12/12/2016.
 */
import {createStore} from 'redux';
import rootReducer from '../reducers';


export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}