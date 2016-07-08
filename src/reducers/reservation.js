import * as constants from '../constants';
import createReducer from '../utils/create-reducer';

const initialState = {
  reservation: {},
};

const actionHandlers = {
  [constants.POST_RESERVATION]: (state, action) => ({ reservation: action.reservation }),
}

export default createReducer(initialState, actionHandlers)
