import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveParcels } from "../actions/parcels";
import { Parcel } from "./index";

export const ParcelList = () => {
  const [currentParcel, setCurrentParcel] = useState(null);
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
            key={index}
            {...parcel}
            onClick={() => setActiveParcel(parcel, index)}
          />
        ))}
    </div>
  );
};
