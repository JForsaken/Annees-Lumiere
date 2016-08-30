import * as constants from '../actions/constants';
import createReducer from '../utils/create-reducer';
import { cloneDeep } from 'lodash';

const initialState = {
  reservation: {
    response: {},
    lastAction: null,
    errors: false,
    pending: false,
  },
  reservations: {
    response: {},
    lastAction: null,
    errors: false,
    pending: false,
  },
  repliedReservation: {
    id: null,
    replied: null,
    lastAction: null,
    errors: false,
    pending: false,
  },
  deletedReservation: {
    id: null,
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
  [constants.FETCH_RESERVATIONS_PENDING]: (state, action) => ({
    reservations: {
      response: {},
      lastAction: action.type,
      errors: action.errors,
      pending: action.pending,
    },
  }),
  [constants.FETCH_RESERVATIONS]: (state, action) => ({
    reservations: {
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
  [constants.DELETE_RESERVATION]: (state, action) => {
    const clone = cloneDeep(state.reservations.response);
    clone.forEach((o, i) => {
      if (o.id === action.id) {
        clone[i].hidden = true;
        return false;
      }
      return true;
    });

    return {
      repliedReservation: {
        id: action.id,
        lastAction: action.type,
        errors: action.errors,
        pending: action.pending,
      },
      reservations: {
        response: clone,
      },
    };
  },
  [constants.DELETE_RESERVATION_PENDING]: (state, action) => ({
    deletedReservation: {
      id: null,
      lastAction: action.type,
      errors: action.errors,
      pending: action.pending,
    },
  }),
  [constants.REPLY_RESERVATION_PENDING]: (state, action) => ({
    repliedReservation: {
      id: null,
      replied: null,
      lastAction: action.type,
      errors: action.errors,
      pending: action.pending,
    },
  }),
  [constants.REPLY_RESERVATION]: (state, action) => {
    const clone = cloneDeep(state.reservations.response);
    clone.forEach((o, i) => {
      if (o.id === action.id) {
        clone[i].replied = action.replied;
        return false;
      }
      return true;
    });

    return {
      repliedReservation: {
        id: action.id,
        replied: action.replied,
        lastAction: action.type,
        errors: action.errors,
        pending: action.pending,
      },
      reservations: {
        response: clone,
      },
    };
  },


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
