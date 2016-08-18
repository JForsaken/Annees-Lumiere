import * as constants from '../constants';
import createReducer from '../utils/create-reducer';

const initialState = {
  reservation: {
    response: {},
    lastAction: null,
    errors: false,
    pending: false,
  },
};

const actionHandlers = {
  [constants.FETCH_LANGUAGES]: (state, action) => ({ languages: action.languages }),
  [constants.POST_RESERVATION_PENDING]: (state, action) => ({
    reservation: {
      response: {},
      lastAction: action.type,
      errors: action.errors,
      pending: action.pending,
    },
  }),
  [constants.POST_RESERVATION_SUCCESS]: (state, action) => ({
    reservation: {
      response: action.response,
      lastAction: action.type,
      errors: action.errors,
      pending: action.pending,
    },
  }),
  [constants.POST_RESERVATION_FAILED]: (state, action) => ({
    reservation: {
      response: action.response,
      lastAction: action.type,
      errors: action.errors,
      pending: action.pending,
    },
  }),
  [constants.CLEAR_RESERVATION]: () => ({
    reservation: {
      response: action.response,
      lastAction: action.type,
      errors: false,
      pending: false,
    },
  }),
};

export default createReducer(initialState, actionHandlers);
