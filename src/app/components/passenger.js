import { useState, useEffect } from "react";

const Passenger = ({ dataPassenger, i, className, handleSelect }) => {
  const [seleccionado, setSeleccionado] = useState(false);

  const handleOnClick = (e) => {
    handleSelect(!seleccionado);
    setSeleccionado(!seleccionado);
  };

  return (
    <div
      className={
        "passenger " + className + (seleccionado ? " seleccionado" : "")
      }
      key={dataPassenger.PassengerId}
      onClick={handleOnClick}
    >
      <div className="passengerNumber">{i + 1}</div>
      <div className="passengerName">{dataPassenger.Name}</div>
      <div className="passengerDeath">
        {dataPassenger.Survived == 0 ? "†" : ""}
      </div>
    </div>
  );
};

export default Passenger;
