import { combineReducers } from 'redux';
import {modifiedData, modifiedStyle, buttonName, buttonClicked, currentSelection, tableStructure} from './tableReducer';

export default combineReducers({
tableStructure,
  modifiedData,
  modifiedStyle,
  buttonName,
  buttonClicked,
  currentSelection
  
})