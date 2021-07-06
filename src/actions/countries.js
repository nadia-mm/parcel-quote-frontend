import { CountryService } from "../services";
import { RETRIEVE_COUNTRIES } from "./types";

export const fetchCountries = () => async (dispatch) => {
  try {
    const res = await CountryService.getAll();

    dispatch({
      type: RETRIEVE_COUNTRIES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
