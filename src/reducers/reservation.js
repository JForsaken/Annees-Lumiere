import * as constants from '../constants';
import createReducer from '../utils/create-reducer';

const initialState = {
  info: {},
  errors: false,
};

const actionHandlers = {
  [constants.POST_RESERVATION]: (state, action) => ({
    info: action.reservation,
    errors: action.errors,
  }),
  [constants.CLEAR_RESERVATION]: () => ({
    info: {},
    errors: false,
  }),
};

export default createReducer(initialState, actionHandlers);
