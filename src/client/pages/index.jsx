
import Canvas from '../components/Canvas'
import ConfigOverlay from '../components/ConfigOverlay'
import AnimationControls from '../components/AnimationControls'
import Leaderboard from '../components/Leaderboard'
import { useState } from 'react';

function HomePage() {
  const [racers, setRacers] = useState([]);
  const [status, setStatus] = useState(false);

  return (
    <div className="mainContainer">
        <div className="canvasContainer">
            <Canvas racers={racers} status={status}/>{/** liveRacerInfo={liveRacerInfo} */}
        </div>
    <div className="leaderboardContainer">
        <Leaderboard racers={racers} status={status}/>
    </div>
        <ConfigOverlay setRacerArr={setRacers} racerArr={racers} setStatus={setStatus}/>
    </div>
  );
}

export default HomePage;
