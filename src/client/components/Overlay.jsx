
import React, { useState, useEffect } from 'react';

const Overlay = ({ hide }) => {

  const [isOpen, setIsOpen] = useState(false);

  const submitConfig = (event) => {
    console.log('hi');
    event.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <div className={`overlay ${hide ? 'show' : ''}`}>
      {
    <form className="raceForm">
    <label htmlFor="alias" className="labelFormElem">Racer alias</label>
    <input type="text" id="alias" className="inputFormElem"></input>
    <label htmlFor="number"className="labelFormElem">Racer number</label>
    <input type="text" id="racerNumber" className="inputFormElem"></input>
    <label htmlFor="colour"className="labelFormElem">Racer Colour</label>
    <input type="text" id="racerColour" className="inputFormElem"></input>

    <input type="submit" onClick={submitConfig}></input>

    </form>
        }
    </div>
    
  );
  
};

export default Overlay;
