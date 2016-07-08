import 'whatwg-fetch';
import handleActionError from '../utils/handle-action-error';
import processResponse from '../utils/process-response';
import {
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
  }
};

