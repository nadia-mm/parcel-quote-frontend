import { useEffect, useState } from "react";
import { CountryService, PriceService } from "./services";
import { ParcelList } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { createParcel } from "./actions/parcels";

const App = () => {
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

        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const calculateQuote = async () => {
    const totalWeight = parcels.reduce((acc, { weight }) => {
      acc += Number(weight);
      return acc;
    }, 0);
    setTotalPrice(prices[0][`${departure}`][`${destination}`] * totalWeight);
  };

  return (
    <div className="form">
      <div className="countries">
        <label htmlFor="departures">From:
          <select
            id="departures"
            onChange={(event) => setDeparture(event.target.value)}
          >
            {countries !== null &&
              countries !== undefined &&
              countries.map((country, index) => (
                <option key={`country-${index}`} value={country}>
                  {country}
                </option>
              ))}
          </select>
        </label>
        <label htmlFor="destinations">To:
          <select
            id="destinations"
            onChange={(event) => setDestination(event.target.value)}
          >
            {countries !== null &&
              countries !== undefined &&
              countries.map((country, index) => (
                <option key={`country-${index}`} value={country}>
                  {country}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div></div>
      <div className="items">
        <input type="button" value="Add Parcel" onClick={addParcel} />
        <ParcelList />
        <input type="submit" value="Calculate quote" onClick={calculateQuote} />
      </div>
      {totalPrice>0 && <div>{`Total Cost: €${totalPrice}`}</div>}
    </div>
  );
};
export default App;
