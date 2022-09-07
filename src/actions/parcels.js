import {
  CREATE_PARCEL,
  RETRIEVE_PARCELS,
  UPDATE_PARCEL,
  DELETE_PARCEL,
} from './types';

import { ParcelService } from '../services';

export const createParcel = (weight) => async (dispatch) => {
  try {
    const res = await ParcelService.create({ weight });

    dispatch({
      type: CREATE_PARCEL,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveParcels = () => async (dispatch) => {
  try {
    const res = await ParcelService.getAll();
    dispatch({
      type: RETRIEVE_PARCELS,
      payload: res.data,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};

export const updateParcel = (id, data) => async (dispatch) => {
  try {
    const res = await ParcelService.update(id, data);

    dispatch({
      type: UPDATE_PARCEL,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteParcel = (id) => async (dispatch) => {
  try {
    await ParcelService.remove(id);

    dispatch({
      type: DELETE_PARCEL,
      payload: { id },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
