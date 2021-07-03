import { CLEAR_SUB_DATA, GET_LATEST, GET_OTHER, GET_SUB_DATA, HANDLE_LIKES_SUB } from '../types';

export default function articles(state = {}, action) {
  switch (action.type) {
    case GET_LATEST:
      return { ...state, latest: action.payload };
    case GET_OTHER:
      return { ...state, otherNews: action.payload };
    case GET_SUB_DATA:
      return { ...state, subData: action.payload };
    case HANDLE_LIKES_SUB:
      return { ...state, subData: [action.payload] };
    case CLEAR_SUB_DATA:
      return { ...state, subData: action.payload };
    default:
      return state;
  }
}
