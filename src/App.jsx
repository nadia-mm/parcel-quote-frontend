import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryService, PriceService } from './services';
import { ParcelList } from './components';
import { createParcel } from './actions/parcels';
import './App.css';

// eslint-disable-next-line react/function-component-definition
const App = () => {
  const title = 'Parcel quotation';
  const description =
    ' Please choose the route and insert the weights of all parcels';

  const [departure, setDeparture] = useState(null);
  const [destination, setDestination] = useState(null);
  const [prices, setPrices] = useState(null);
  const [countries, setCountries] = useState(null);

  const [totalPrice, setTotalPrice] = useState(null);

  const parcels = useSelector((state) => state.parcels);
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeData = async () => {
      await CountryService.getAll().then(({ data }) => {
        setCountries(data[0].countries);
        setDeparture(data[0].countries[0]);
        setDestination(data[0].countries[0]);
      });
      await PriceService.getAll().then(({ data }) => {
        setPrices(data[0].prices);
      });
    };
    initializeData();
  }, []);

  const initialParcelState = {
    id: null,
    weight: 1,
  };

  const [parcel, setParcel] = useState(initialParcelState);
  const addParcel = () => {
    const { weight } = parcel;
    dispatch(createParcel(weight))
      .then((data) => {
        setParcel({
          id: data.id,
          weight: data.weight,
        });

        // eslint-disable-next-line no-console
        console.log(data);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
      });
  };

  const calculateQuote = async () => {
    const totalWeight = parcels.reduce((acc, { weight }) => {
      // eslint-disable-next-line no-param-reassign
      acc += Number(weight);
      return acc;
    }, 0);
    setTotalPrice(prices[0][`${departure}`][`${destination}`] * totalWeight);
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="form">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="wrapper">
        <div>
          <label htmlFor="departures">
            From:
            <select
              id="departures"
              aria-label="departures"
              onChange={(event) => setDeparture(event.target.value)}>
              {countries !== null &&
                countries !== undefined &&
                countries.map((country, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={`country-${index}`} value={country}>
                    {country}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="destinations">
            To:
            <select
              id="destinations"
              onChange={(event) => setDestination(event.target.value)}>
              {countries !== null &&
                countries !== undefined &&
                countries.map((country, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <option key={`country-${index}`} value={country}>
                    {country}
                  </option>
                ))}
            </select>
          </label>
        </div>
        <input
          className="button"
          type="button"
          value="Add Parcel"
          onClick={addParcel}
        />
        <input
          aria-label="calculate-quotation"
          className="button"
          type="submit"
          value="Calculate Quote"
          onClick={calculateQuote}
        />

        <ParcelList />
        {totalPrice > 0 && <div>{`Total Cost: €${totalPrice}`}</div>}
      </div>
    </div>
  );
};
export default App;
