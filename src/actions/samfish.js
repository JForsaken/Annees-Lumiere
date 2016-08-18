import 'whatwg-fetch';
import handleActionError from '../utils/handle-action-error';
import processResponse from '../utils/process-response';
import {
  POST_RESERVATION,
  FETCH_LANGUAGES,
} from '../constants';

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
          type: POST_RESERVATION,
          info: data.body,
          errors: false,
          pending: true,
        });
      })
      .catch(err => {
        dispatch({
          type: POST_RESERVATION,
          info: err.body,
          errors: true,
          pending: false,
        });
      });
  };
}
