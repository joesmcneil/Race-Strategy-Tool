
const LapCounter = (props) => {
  // Checking if the status is true before feeding in the lap counter, otherwise props.racers[0] will not exist
  if (props.status === true) {
    return (
    <div className="lapCounter">
        Lap {props.racers[0].lapNo} / {props.noLaps}
    </div>
    );
  }
};

export default LapCounter;
