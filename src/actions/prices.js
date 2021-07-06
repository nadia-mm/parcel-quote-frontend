import { PriceService } from "../services";
import { RETRIEVE_PRICES } from "./types";

export const fetchPrices = () => async (dispatch) => {
  try {
    const res = await PriceService.getAll();

    dispatch({
      type: RETRIEVE_PRICES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
