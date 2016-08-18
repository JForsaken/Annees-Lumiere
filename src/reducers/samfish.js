import * as constants from '../constants';
import createReducer from '../utils/create-reducer';

const initialState = {
  reservation: {
    errors: false,
    pending: false,
  },
};

const actionHandlers = {
  [constants.FETCH_LANGUAGES]: (state, action) => ({ languages: action.languages }),
  [constants.POST_RESERVATION]: (state, action) => ({
    reservation: {
      errors: action.errors,
      pending: action.pending,
    },
  }),
  [constants.CLEAR_RESERVATION]: () => ({
    reservation: {
      errors: false,
      pending: false,
    },
  }),
};

export default createReducer(initialState, actionHandlers);
