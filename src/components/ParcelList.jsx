import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveParcels } from '../actions/parcels';
import { Parcel } from './index';

// eslint-disable-next-line import/prefer-default-export
export const ParcelList = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentParcel, setCurrentParcel] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(-1);

  const parcels = useSelector((state) => state.parcels);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveParcels());
  }, [dispatch]);

  const setActiveParcel = (parcel, index) => {
    setCurrentParcel(parcel);
    setCurrentIndex(index);
  };

  return (
    <div>
      {parcels !== undefined &&
        parcels !== null &&
        parcels.map((parcel, index) => (
          <Parcel
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            {...parcel}
            onClick={() => setActiveParcel(parcel, index)}
          />
        ))}
    </div>
  );
};
