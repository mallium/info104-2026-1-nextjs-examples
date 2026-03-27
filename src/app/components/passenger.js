const Passenger = ({ dataPassenger, i, className }) => {
  const handleOnClick = (e) => {
    console.log("handle click! (" + e.clientX + "," + e.clientY + ")");
  };

  return (
    <div
      className={"passenger " + className}
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
