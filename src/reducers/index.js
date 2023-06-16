import {changeTheNumber, nameReducer} from './updateDeleteName';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
  nameReducer: nameReducer,
});

export default rootReducer;
