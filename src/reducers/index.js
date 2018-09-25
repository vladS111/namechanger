import { combineReducers } from 'redux';

import names from './names'
import user from './user'

export default combineReducers({
	names,
	user,
});
