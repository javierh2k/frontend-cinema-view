import { http, httpFormData } from './http'

const url = '/movies';

export const fetchMovies = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_MOVIES',
      payload: http.get(url)
    })
  }
}

