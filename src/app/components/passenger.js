const Passenger = ({ dataPassenger, i, className }) => {
  return (
    <div className={"passenger " + className} key={dataPassenger.PassengerId}>
      <div className="passengerNumber">{i + 1}</div>
      <div className="passengerName">{dataPassenger.Name}</div>
      <div className="passengerDeath">
        {dataPassenger.Survived == 0 ? "†" : ""}
      </div>
    </div>
  );
};

export default Passenger;
