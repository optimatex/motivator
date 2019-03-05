import * as types from './actionTypes';
import * as api from './api';

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
    await dispatch({
      type: types.GET_MAPS_ERROR,
      payload: {
        error: error.message,
      },
    });
  }
};

export const getSingleMap = () => {};

export const addMap = str => async dispatch => {
  try {
    await dispatch({
      type: types.ADD_MAP_REQUEST,
    });

    const { data } = await api.addMapRequest(str);

    await dispatch({
      type: types.ADD_MAP_SUCCESS,
      payload: {
        newMap: data,
      },
    });

    await dispatch(getMaps());
  } catch (error) {
    await dispatch({
      type: types.ADD_MAP_ERROR,
      payload: {
        error: error.message,
      },
    });
  }
};

export const removeMap = id => async dispatch => {
  try {
    await dispatch({
      type: types.REMOVE_MAP_REQUEST,
    });

    await api.removeMapRequest(id);

    await dispatch({
      type: types.REMOVE_MAP_SUCCESS,
    });

    await dispatch(getMaps());
  } catch (error) {
    await dispatch({
      type: types.REMOVE_MAP_ERROR,
      payload: {
        error: error.message,
      },
    });
  }
};
