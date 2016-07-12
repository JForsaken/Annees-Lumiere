import * as constants from '../constants';
import createReducer from '../utils/create-reducer';

const initialState = {
  languages: [],
};

const actionHandlers = {
  [constants.FETCH_LANGUAGES]: (state, action) => ({ languages: action.languages }),
};

export default createReducer(initialState, actionHandlers);
