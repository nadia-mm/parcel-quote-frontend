import { PriceService } from '../services';
import { RETRIEVE_PRICES } from './types';

// eslint-disable-next-line import/prefer-default-export
export const fetchPrices = () => async (dispatch) => {
  try {
    const res = await PriceService.getAll();

    dispatch({
      type: RETRIEVE_PRICES,
      payload: res.data,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
