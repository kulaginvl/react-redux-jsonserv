import axios from 'axios';
import { GET_LATEST, GET_OTHER, GET_SUB_DATA, HANDLE_LIKES_SUB, CLEAR_SUB_DATA } from '../types';

const URL = 'http://localhost:3001/articles';

export function latestNews() {
  const request = axios.get(`${URL}?_order=desc&_end=2`).then((response) => response.data);
  return {
    type: GET_LATEST,
    payload: request,
  };
}
export function otherNews() {
  const request = axios.get(`${URL}?_start=3&_end=15`).then((response) => response.data);
  return {
    type: GET_OTHER,
    payload: request,
  };
}
export function getSubData(id) {
  const request = axios.get(`${URL}?id=${id}`).then((response) => response.data);
  return {
    type: GET_SUB_DATA,
    payload: request,
  };
}

export function handleSubLikes(newLikes, id) {
  const request = axios(`${URL}/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'aplication/json',
      'Content-type': 'application/json',
    },
    data: JSON.stringify({ likes: newLikes }),
  }).then((response) => response.data);
  return {
    type: HANDLE_LIKES_SUB,
    payload: request,
  };
}
export function clearSubData() {
  return {
    type: CLEAR_SUB_DATA,
    payload: null,
  };
}
