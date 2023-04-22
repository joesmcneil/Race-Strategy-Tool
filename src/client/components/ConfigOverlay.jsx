
import React, { useState, useRef } from 'react';

const ConfigOverlay = ({ setRacerArr }) => {

  // isOpen determines the state of the overlay, the state is updated once the 'submit' button is clicked and the class of the containing is then updated.

  const [isOpen, setIsOpen] = useState(false);

  // The variables below are used to store the values that have been inputted into the race config input fields using the useRef hook.

  const aliasRef = useRef();
  const numberRef = useRef();
  const colourRef = useRef();
  const trackLengthRef = useRef();
  const numberOfLaps = useRef();


  const [racersArr, setRacersArr] = useState([]);
  console.log(racersArr);

  const showTrack = (props) => {

  }

  const clearDefaultInputs = (input) => {
    if (input.value === input.defaultValue) {
      input.value = '';
    }
  }

  const clearInputs = () => {
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
    clearInputs();

    console.log(racersArr);
  }

  const submitConfig = () => {
    setRacerArr(racersArr);
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <div className={`overlay ${isOpen ? 'hide' : ''}`}>
      {
    <form className="raceForm">
    <p id="configTitle">Configuration</p>
    <p id="trackConfig">Track Config</p>
    <div className="trackDetails">
    <input type="text" defaultValue="Track Length" id="trackLength" className="inputFormElem" ref={trackLengthRef} onClick="clearDefaultInputs"></input>
    <input type="text" defaultValue="Number of Laps" id="numberOfLaps" className="inputFormElem" ref={numberOfLaps}></input>
    </div>
    <div className="racerDetails">
    <input type="text" defaultValue="Racer Alias" id="alias" className="inputFormElem" ref={aliasRef}></input>
    <input type="text" defaultValue="Racer Number" id="racerNumber" className="inputFormElem" ref={numberRef}></input>
    <input type="text" defaultValue="Racer Colour" id="racerColour" className="inputFormElem" ref={colourRef}></input>
    </div>

    <div className="configButtons">
    <input type ="button" className="addConfigButton" defaultValue="Add racer" onClick={() => addRacer()}></input>
    <input type="button" className="addConfigButton" defaultValue="Submit" onClick={submitConfig}></input>
    </div>
    </form>
        }
    </div>
    
  );
  
};

export default ConfigOverlay;
