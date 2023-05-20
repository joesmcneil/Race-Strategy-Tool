
const LapCounter = (props) => {
  if (props.status === true) {
    return (
    <div className="lapCounter">
        Lap {props.racers[0].lapNo} / {props.noLaps}
    </div>
    );
  }
};

export default LapCounter;
