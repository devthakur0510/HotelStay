import {createStore} from 'redux';
//import {createStore} from '@reduxjs/toolkit';

import rootReducer from './reducers/index';

export const store = createStore(rootReducer);
