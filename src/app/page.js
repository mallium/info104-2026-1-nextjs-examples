"use client";
import { useState, useEffect } from "react";
import titanic from "./data/titanic.json";
import Passenger from "./components/passenger";
export default function Home() {
  const [contSel, setContSel] = useState(0);

  const handleSeleccionado = (sel) => {
    if (sel) setContSel(contSel + 1);
    else setContSel(Math.max(contSel - 1, 0));
  };

  useEffect(() => {
    console.log("página rendereada!");
  }, []);

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
      <div>Cuántos seleccionados: {contSel}</div>
      <h2>Lista de pasajeros</h2>
      <div>
        {titanic.map((passenger, index) => (
          <Passenger
            dataPassenger={passenger}
            i={index}
            key={index}
            className={index % 2 == 1 ? "passengerOdd" : "passengerEven"}
            handleSeleccionado={handleSeleccionado}
          />
        ))}
      </div>
    </div>
  );
}
