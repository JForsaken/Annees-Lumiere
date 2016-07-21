import * as constants from '../constants';
import createReducer from '../utils/create-reducer';

const initialState = {
  languages: [],
  reservation: {
    info: {},
    errors: false,
  },
};

const actionHandlers = {
  [constants.FETCH_LANGUAGES]: (state, action) => ({ languages: action.languages }),
  [constants.POST_RESERVATION]: (state, action) => ({
    reservation: {
      info: action.reservation,
      errors: action.errors,
    },
  }),
  [constants.CLEAR_RESERVATION]: () => ({
    reservation: {
      info: {},
      errors: false,
    },
  }),
};

export default createReducer(initialState, actionHandlers);
