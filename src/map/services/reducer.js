import * as types from './actionTypes';
import initialState from './initialState';

export default (state = initialState, action = {}) => {
  console.log('%c action', 'color: #0087d4', action);
  switch (action.type) {
    case types.GET_MAPS_REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: true,
        },
      };
    case types.GET_MAPS_SUCCESS:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          data: action.payload.maps,
        },
      };
    case types.GET_MAPS_ERROR:
      return {
        ...state,
        list: {
          ...state.list,
          isLoading: false,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
};
