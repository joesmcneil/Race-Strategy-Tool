
import Canvas from '../components/Canvas'
import ConfigOverlay from '../components/ConfigOverlay'
import AnimationControls from '../components/AnimationControls'
import React, { useState } from 'react';

function HomePage() {

    const [racers, setRacers] = useState([]);
    const [showTrack, setShowTrack] = useState(false);

    return (
    <div className="mainContainer">
        <div className="canvasContainer">
            <Canvas racers={racers}/>    
        </div>
        <ConfigOverlay setRacerArr={setRacers} showTrack={setShowTrack}/>
    </div>
    )
}

export default HomePage
