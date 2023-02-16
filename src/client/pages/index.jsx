import Canvas from '../components/Canvas'
import ConfigOverlay from '../components/ConfigOverlay'
import React, { useState } from 'react';

function HomePage() {

    const [racers, setRacers] = useState([]);

    return (
    <div className="mainContainer">
        <div className="canvasContainer">
            <Canvas racers={racers}/>    
        </div>
        <ConfigOverlay setRacerArr={setRacers}/>
    </div>
    )
}

export default HomePage
