import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ParcelService } from "../services";
import { deleteParcel, updateParcel } from "../actions/parcels";

export const Parcel = ({ id, weight }) => {
  const initialParcelState = {
    id: id,
    weight: weight,
  };
  const [currentParcel, setCurrentParcel] = useState(initialParcelState);
  const message = "Please enter a number between 0 and 100";
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();

  const getParcel = (id) => {
    ParcelService.get(id)
      .then((response) => {
        setCurrentParcel(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateWeight = () => {
    dispatch(updateParcel(currentParcel.id, currentParcel))
      .then(response => {
        console.log(response);
      })
      .catch(e => {
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
    currentParcel.weight=value;
    setCurrentParcel(currentParcel);
    updateWeight();
  };

  const removeParcel = () => {
    dispatch(deleteParcel(currentParcel.id)).catch((e) => {
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
