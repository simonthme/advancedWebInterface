/**
 * Created by simonthome on 23/11/2016.
 */
import React from 'react';
import {render} from 'react-dom';
import Root from './routes';
import {browserHistory} from 'react-router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';



render(<Root history={browserHistory}/>, document.querySelector('#app'));

