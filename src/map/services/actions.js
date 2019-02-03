import * as types from './actionTypes';
import * as api from './api';

/**
 * Get Notifications List
 */

export const getMaps = () => async dispatch => {
  try {
    await dispatch({
      type: types.GET_MAPS_REQUEST,
    });

    const { data } = await api.getMapsRequest();

    await dispatch({
      type: types.GET_MAPS_SUCCESS,
      payload: {
        maps: data,
      },
    });
  } catch (error) {
    console.log('%c error', 'color: #0087d4', error);
    await dispatch({
      type: types.GET_MAPS_ERROR,
      payload: {
        error: error.message,
      },
    });
  }
};

export const getSingleMap = () => {};
