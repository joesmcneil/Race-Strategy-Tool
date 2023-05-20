
import { useState, useRef } from 'react';
import { Racer } from './Canvas.jsx';

const ConfigOverlay = (props) => {
  // isOpen determines the state of the overlay, the state is updated once the 'submit' button is clicked and the class of the containing is then updated.

  const [isOpen, setIsOpen] = useState(false);

  // The variables below are used to store the values that have been inputted into the race config input fields using the useRef hook.

  const aliasRef = useRef();
  const numberRef = useRef();
  const colourRef = useRef();
  const trackLengthRef = useRef();
  const numberOfLapsRef = useRef();

  const clearRacerInputs = () => {
    aliasRef.current.value = '';
    numberRef.current.value = '';
    colourRef.current.value = '';
  };

  const addRacer = () => {
    const racer = new Racer(0, 0, 0, 0.0000001, aliasRef.current.value, colourRef.current.value, numberRef.current.value, 0, 0);
    props.setRacerArr([...props.racerArr, racer]);
    clearRacerInputs();

    console.log(props.racerArr);
  };

  const submitConfig = () => {
    console.log(trackLengthRef.current.value);
    console.log(numberOfLapsRef.current.value);

    const scale = (parseInt(trackLengthRef.current.value) * 1000) / 3000;

    for (const racer of props.racerArr) {
      racer.velocity = racer.velocity * (2 * scale);
      console.log(racer.velocity);
    }

    props.setTrackLength(parseInt(trackLengthRef.current.value) * 1000);
    props.setNoLaps(parseInt(numberOfLapsRef.current.value));
    props.setStatus(true);
    setIsOpen(!isOpen);
    console.log(isOpen);
    console.log(trackLengthRef.current.value);
    console.log(numberOfLapsRef.current.value);
    console.log(props.racerArr);
  };

  return (
    <div className={`overlay ${isOpen ? 'hide' : ''}`}>
      {
    <form className="raceForm">
    <p className="configTitles" id="preRaceConfig">Pre-race Configuration</p>
    <p className="configTitles" id="trackConfig">Track Config</p>
    <div className="trackDetails">
    <input type="text" placeholder="Track Length (KM)" id="trackLength" className="inputFormElem" ref={trackLengthRef}></input>
    <input type="text" placeholder="Number of Laps" id="numberOfLaps" className="inputFormElem" ref={numberOfLapsRef}></input>
    </div>
    <div className="racerDetails">
    <p className="configTitles">Racer Config</p>
    <input type="text" placeholder="Racer Alias" id="alias" className="inputFormElem" ref={aliasRef}></input>
    <input type="text" placeholder="Racer Number" id="racerNumber" className="inputFormElem" ref={numberRef}></input>
    <input type="text" placeholder="Racer Colour" id="racerColour" className="inputFormElem" ref={colourRef}></input>
    </div>

    <div className="configButtons">
    <input type ="button" value="Add Racer" className="addConfigButton" onClick={() => addRacer()}></input>
    <input type="button" value="Submit" className="addConfigButton" onClick={submitConfig}></input>
    </div>
    </form>
        }
    </div>
  );
};

export default ConfigOverlay;
