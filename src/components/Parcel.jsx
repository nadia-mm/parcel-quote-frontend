import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ParcelService } from '../services';
import { deleteParcel, updateParcel } from '../actions/parcels';

// eslint-disable-next-line import/prefer-default-export
export const Parcel = ({ id, weight }) => {
  const initialParcelState = {
    id,
    weight,
  };
  const [currentParcel, setCurrentParcel] = useState(initialParcelState);
  const message = 'Please enter a number between 0 and 100';
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-shadow
  const getParcel = (id) => {
    ParcelService.get(id)
      .then((response) => {
        setCurrentParcel(response.data);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
      });
  };

  const updateWeight = () => {
    dispatch(updateParcel(currentParcel.id, currentParcel))
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
      });
  };

  useEffect(() => {
    getParcel(id);
  }, [id]);

  const handleWeightChange = (event) => {
    const { value } = event.target;
    if (value > 100 || value <= 0 || value.length === 0) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
    currentParcel.weight = value;
    setCurrentParcel(currentParcel);
    updateWeight();
  };

  const removeParcel = () => {
    dispatch(deleteParcel(currentParcel.id)).catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e);
    });
  };

  return (
    <div>
      <div>
        <input
          type="number"
          min="0"
          max="100"
          placeholder="Weight(kg)"
          value={currentParcel.weight}
          onChange={handleWeightChange}
        />
        Kg
        <input type="button" value="-" onClick={removeParcel} />
      </div>
      <div>{showMessage && message}</div>
    </div>
  );
};
