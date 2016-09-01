import 'whatwg-fetch';
import processResponse from '../utils/process-response';
import {
  POST_RESERVATION_PENDING,
  POST_RESERVATION_SUCCESS,
  POST_RESERVATION_FAILED,
  FETCH_RESERVATIONS,
  FETCH_RESERVATIONS_PENDING,
  REPLY_RESERVATION,
  REPLY_RESERVATION_PENDING,
  DELETE_RESERVATION,
  DELETE_RESERVATION_PENDING,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './constants';

const SAMFISH_API = 'https://samfish-webserver.herokuapp.com';

export function postReservationPending() {
  return dispatch => dispatch({
    type: POST_RESERVATION_PENDING,
  });
}

export function loginPending() {
  return dispatch => dispatch({
    type: LOGIN_PENDING,
  });
}

export function postReservation(reservation) {
  return dispatch => {
    fetch(`${SAMFISH_API}/reservations`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation),
    })
      .then(processResponse)
      .then(data => {
        dispatch({
          type: POST_RESERVATION_SUCCESS,
          response: data,
          errors: false,
        });
      })
      .catch(err => {
        dispatch({
          type: POST_RESERVATION_FAILED,
          response: err,
          errors: true,
        });
      });
  };
}

export function login(loginAttempt) {
  return dispatch => {
    fetch(`${SAMFISH_API}/login`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginAttempt),
    })
      .then(processResponse)
      .then(data => {
        dispatch({
          type: LOGIN_SUCCESS,
          user: data.body,
          errors: false,
        });
      })
      .catch(() => {
        dispatch({
          type: LOGIN_FAILED,
          errors: true,
          pending: false,
        });
      });
  };
}

export function fetchReservationsPending() {
  return dispatch => dispatch({
    type: FETCH_RESERVATIONS_PENDING,
  });
}

export function fetchReservations() {
  return dispatch => {
    fetch(`${SAMFISH_API}/reservations?include=kids&order=createdAt`)
      .then(processResponse)
      .then(data => {
        dispatch({
          type: FETCH_RESERVATIONS,
          response: data.body,
          errors: false,
        });
      })
      .catch(err => {
        dispatch({
          type: FETCH_RESERVATIONS,
          response: err,
          errors: true,
        });
      });
  };
}

export function replyReservationPending() {
  return dispatch => dispatch({
    type: REPLY_RESERVATION_PENDING,
  });
}

export function replyReservation(id, username, replied) {
  const body = {
    username,
    replied,
  };

  return dispatch => {
    fetch(`${SAMFISH_API}/reservations/${id}`, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(processResponse)
      .then(() => {
        dispatch({
          type: REPLY_RESERVATION,
          id,
          replied,
          errors: false,
        });
      })
      .catch(err => {
        dispatch({
          type: REPLY_RESERVATION,
          id,
          replied: err.statusCode === 200 ? replied : !replied,
          errors: err.statusCode !== 200,
        });
      });
  };
}

export function deleteReservationPending() {
  return dispatch => dispatch({
    type: DELETE_RESERVATION_PENDING,
  });
}

export function deleteReservation(id, username) {
  const body = {
    username,
    hidden: true,
  };

  return dispatch => {
    fetch(`${SAMFISH_API}/reservations/hide/${id}`, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(processResponse)
      .then(() => {
        dispatch({
          type: DELETE_RESERVATION,
          id,
          errors: false,
        });
      })
      .catch(err => {
        dispatch({
          type: DELETE_RESERVATION,
          id,
          errors: err.statusCode !== 200,
        });
      });
  };
}

