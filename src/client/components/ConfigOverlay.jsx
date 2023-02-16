
import React, { useState, useRef } from 'react';

const ConfigOverlay = ({ setRacerArr }) => {

  // isOpen determines the state of the overlay, the state is updated once the 'submit' button is clicked and the class of the containing is then updated.

  const [isOpen, setIsOpen] = useState(false);

  // The variables below are used to store the values that have been inputted into the race config input fields using the useRef hook.

  const aliasRef = useRef();
  const numberRef = useRef();
  const colourRef = useRef();


  const [racersArr, setRacersArr] = useState([]);
  console.log(racersArr);

  const addRacer = () => 
  {
    const racer = {
      racerAlias: aliasRef.current.value,
      racerNumber: numberRef.current.value,
      racerColour: colourRef.current.value
    }
    setRacersArr([...racersArr, racer]);

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
    <label htmlFor="alias" className="labelFormElem">Racer alias</label>
    <input type="text" id="alias" className="inputFormElem" ref={aliasRef}></input>
    <label htmlFor="number"className="labelFormElem">Racer number</label>
    <input type="text" id="racerNumber" className="inputFormElem" ref={numberRef}></input>
    <label htmlFor="colour"className="labelFormElem">Racer Colour</label>
    <input type="text" id="racerColour" className="inputFormElem" ref={colourRef}></input>

    <input type ="button" value="Add racer" onClick={() => addRacer()}></input>

    <input type="button" value="Submit" onClick={submitConfig}></input>

    </form>
        }
    </div>
    
  );
  
};

export default ConfigOverlay;
