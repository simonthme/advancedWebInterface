/**
 * Created by simonthome on 23/11/2016.
 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Root from './routes';
import {browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const store = configureStore();


render(<Provider store={store}><Root history={browserHistory}/></Provider>, document.querySelector('#app'));

