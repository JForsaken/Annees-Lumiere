import * as constants from '../actions/constants';
import createReducer from '../utils/create-reducer';

const initialState = {
  reservation: {
    response: {},
    lastAction: null,
    errors: false,
    pending: false,
  },
  login: {
    user: {},
    lastAction: null,
    errors: false,
    pending: false,
  },
};

const actionHandlers = {

  /* RESERVATION */
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
      response: {},
      lastAction: null,
      errors: false,
      pending: false,
    },
  }),

  /* LOGIN */
  [constants.LOGIN_PENDING]: (state, action) => ({
    login: {
      user: {},
      lastAction: action.type,
      errors: false,
      pending: false,
    },
  }),
  [constants.LOGIN_SUCCESS]: (state, action) => ({
    login: {
      user: action.user,
      lastAction: action.type,
      errors: false,
      pending: false,
    },
  }),
  [constants.LOGIN_FAILED]: (state, action) => ({
    login: {
      user: {},
      lastAction: action.type,
      errors: true,
      pending: false,
    },
  }),
  [constants.LOGOUT]: (state, action) => ({
    login: {
      user: {},
      lastAction: action.type,
      errors: false,
      pending: false,
    },
  }),

};

export default createReducer(initialState, actionHandlers);
