
import React, { useState, useRef } from 'react';

const ConfigOverlay = ({ setRacerArr }) => {

  // isOpen determines the state of the overlay, the state is updated once the 'submit' button is clicked and the class of the containing is then updated.

  const [isOpen, setIsOpen] = useState(false);

  // The variables below are used to store the values that have been inputted into the race config input fields using the useRef hook.

  const aliasRef = useRef();
  const numberRef = useRef();
  const colourRef = useRef();
  const trackLengthRef = useRef();
  const numberOfLapsRef = useRef();

  const [racersArr, setRacersArr] = useState([]);


  console.log(racersArr);

  const showTrack = (props) => {

  }

  const clearRacerInputs = () => {
    aliasRef.current.value = '';
    numberRef.current.value = '';
    colourRef.current.value = '';
  }

  const addRacer = () => 
  {
    const racer = {
      racerAlias: aliasRef.current.value,
      racerNumber: numberRef.current.value,
      racerColour: colourRef.current.value
    }
    setRacersArr([...racersArr, racer]);
    clearRacerInputs();

    console.log(racersArr);
  }

  const submitConfig = () => {
    setRacerArr(racersArr);
    setIsOpen(!isOpen);
    console.log(isOpen);
    console.log(trackLengthRef.current.value);
    console.log(numberOfLapsRef.current.value);
  }

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
