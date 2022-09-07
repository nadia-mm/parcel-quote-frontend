import {
  CREATE_PARCEL,
  RETRIEVE_PARCELS,
  UPDATE_PARCEL,
  DELETE_PARCEL,
} from '../actions/types';

const initialState = [];
// eslint-disable-next-line default-param-last
const parcelReducer = (parcels = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_PARCEL:
      return [...parcels, payload];

    case RETRIEVE_PARCELS:
      return payload;

    case UPDATE_PARCEL:
      return parcels.map((parcel) => {
        if (parcel.id === payload.id) {
          return {
            ...parcel,
            ...payload,
          };
        }
        return parcel;
      });

    case DELETE_PARCEL:
      return parcels.filter(({ id }) => id !== payload.id);

    default:
      return parcels;
  }
};

export default parcelReducer;
