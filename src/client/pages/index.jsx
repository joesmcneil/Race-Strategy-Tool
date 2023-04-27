
import Canvas from '../components/Canvas'
import ConfigOverlay from '../components/ConfigOverlay'
import AnimationControls from '../components/AnimationControls'
import Leaderboard from '../components/Leaderboard'
import { useState } from 'react';

function HomePage() {
  const [racers, setRacers] = useState([]);
  const [status, setStatus] = useState(false);
  const [liveRacerInfo, setLiveRacerInfo] = useState([]);

  return (
    <div className="mainContainer">
        <div className="canvasContainer">
            <Canvas racers={racers} status={status} setRacerInfo={setLiveRacerInfo}/>{/** liveRacerInfo={liveRacerInfo} */}
        </div>
    <div className="leaderboardContainer">
        <Leaderboard dataArr={liveRacerInfo} status={status}/>
    </div>
        <ConfigOverlay setRacerArr={setRacers} racerArr={racers} setStatus={setStatus}/>
    </div>
  );
}

export default HomePage;
