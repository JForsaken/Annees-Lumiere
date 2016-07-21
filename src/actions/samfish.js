import 'whatwg-fetch';
import handleActionError from '../utils/handle-action-error';
import processResponse from '../utils/process-response';
import {
  POST_RESERVATION,
  FETCH_LANGUAGES,
} from '../constants';

const SAMFISH_API = 'http://localhost:5000';

const MOCK_REQUEST = {
  firstname: 'Jésus',
  lastname: 'Christ',
  address: '123 Jerusalem',
  emailAddress: 'justin.derrico1991@gmail.com',
  primaryPhoneNumber: '514-000-1234',
  profession: 'Messie',
  language: 'EN',
  kids: [
    {
      firstname: 'Bebe Jesus',
      lastname: 'Christ',
      birthday: '24-12-2000',
      language: 'EN',
    },
    {
      firstname: 'Aîné Jesus',
      lastname: 'Christ',
      birthday: '24-12-1995',
      language: 'EN',
    },
  ],
};

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

export function postReservation() {
  return dispatch => {
    fetch(`${SAMFISH_API}/reservations`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(MOCK_REQUEST),
    })
      .then(processResponse)
      .then(() => dispatch({
        type: POST_RESERVATION,
        reservation: MOCK_REQUEST,
        errors: false,
      }))
      .catch(() => dispatch({
        type: POST_RESERVATION,
        reservation: MOCK_REQUEST,
        errors: true,
      }));
  };
}
