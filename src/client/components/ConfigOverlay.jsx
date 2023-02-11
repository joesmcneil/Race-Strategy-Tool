
import React, { useState, useEffect } from 'react';

const ConfigOverlay = () => {

  // isOpen determines the state of the overlay, the state is updated once the 'submit' button is clicked and the class of the containing is then updated.

  const [isOpen, setIsOpen] = useState(false);

  // The variables below are used to store the values that have been inputted into the race config input fields using the useState hook.

  const [aliasInputValue, setAliasInputValue] = useState("");
  const [numberInputValue, setNumberInputValue] = useState("");
  const [colourInputValue, setColourInputValue] = useState("");

  // Global array to contain the values inputted by the user before they start their race.

  const [racersArr, setRacersArr] = useState([]);
  console.log(racersArr)

  // The below 3 functions are in place to handle the user inputs to each config field and update the value of the variables

  const handleAliasConfigChange = (event) => {
    setAliasInputValue(event.target.value);
    console.log(aliasInputValue);
  }

  const handleNumberInputChange = (event) => {
    setNumberInputValue(event.target.value);
    console.log(numberInputValue);
  }

  const handleColourInputChange = (event) => {
    setColourInputValue(event.target.value);
    console.log(colourInputValue);
  }

  const addRacer = (alias, number, colour) => 
  {
    const racer = {
      racerAlias: alias,
      racerNumber: number,
      racerColour: colour
    }
    setRacersArr([...racersArr, racer]);
  }

  const submitConfig = (event) => {
    setIsOpen(!isOpen);
    event.preventDefault();
    console.log(isOpen)
  }

  return (
    <div className={`overlay ${isOpen ? 'hide' : ''}`}>
      {
    <form className="raceForm">
    <label htmlFor="alias" className="labelFormElem">Racer alias</label>
    <input type="text" id="alias" className="inputFormElem" value={aliasInputValue} onChange={handleAliasConfigChange}></input>
    <label htmlFor="number"className="labelFormElem">Racer number</label>
    <input type="text" id="racerNumber" className="inputFormElem" value={numberInputValue} onChange={handleNumberInputChange}></input>
    <label htmlFor="colour"className="labelFormElem">Racer Colour</label>
    <input type="text" id="racerColour" className="inputFormElem" value={colourInputValue} onChange={handleColourInputChange}></input>

    <input type ="submit" value="Add racer" onClick={() => addRacer(aliasInputValue, numberInputValue, colourInputValue)}></input>

    <input type="submit" onClick={submitConfig}></input>

    </form>
        }
    </div>
    
  );
  
};

export default ConfigOverlay;
