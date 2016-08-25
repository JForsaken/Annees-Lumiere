import 'whatwg-fetch';
import handleActionError from '../utils/handle-action-error';
import processResponse from '../utils/process-response';
import {
  POST_RESERVATION_PENDING,
  POST_RESERVATION_SUCCESS,
  POST_RESERVATION_FAILED,
  FETCH_LANGUAGES,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from './constants';

const SAMFISH_API = 'http://localhost:5000';

export function fetchLanguages() {
  return dispatch => {
    fetch(`${SAMFISH_API}/languages`)
      .then(processResponse)
      .then(res => dispatch({
        type: FETCH_LANGUAGES,
        languages: res,
      }))
      .catch(error => handleActionError(dispatch, error, FETCH_LANGUAGES));
  };
}

export function postReservationPending() {
  return dispatch => dispatch({
    type: POST_RESERVATION_PENDING,
    pending: true,
    errors: false,
  });
}

export function loginPending() {
  return dispatch => dispatch({
    type: LOGIN_PENDING,
    pending: true,
    errors: false,
    user: {},
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
          pending: false,
        });
      })
      .catch(err => {
        dispatch({
          type: POST_RESERVATION_FAILED,
          response: err,
          errors: true,
          pending: false,
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
          pending: false,
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

