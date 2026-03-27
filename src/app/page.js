"use client";
import { useState } from "react";
import titanic from "./data/titanic.json";
import Passenger from "./components/passenger";
export default function Home() {
  const [seleccionados, setSeleccionados] = useState(0);
  const handlePassengerSelectChange = (select, pid) => {
    if (select) {
      setSeleccionados(seleccionados + 1);
      console.log(pid);
    } else setSeleccionados(Math.max(seleccionados - 1, 0));
  };

  let nSurvived = 0;
  let n = titanic.length;
  titanic.map((passenger, index) => {
    if (passenger.Survived == 0) {
      nSurvived++;
    }
  });
  return (
    <div className="principal">
      <h1>Pasajeros del Titanic</h1>
      <div>
        De&nbsp;{n}&nbsp;pasajeros, sobrevivieron&nbsp;{nSurvived}&nbsp;y
        murieron&nbsp;{n - nSurvived}
      </div>
      <div>Seleccionados : {seleccionados}</div>
      <h2>Lista de pasajeros</h2>
      <div>
        {titanic.map((passenger, index) => (
          <Passenger
            dataPassenger={passenger}
            i={index}
            key={index}
            className={index % 2 == 1 ? "passengerOdd" : "passengerEven"}
            handleSelect={handlePassengerSelectChange}
          />
        ))}
      </div>
    </div>
  );
}
