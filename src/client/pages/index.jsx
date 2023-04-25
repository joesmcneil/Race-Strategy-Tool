
import Canvas from '../components/Canvas'
import ConfigOverlay from '../components/ConfigOverlay'
import AnimationControls from '../components/AnimationControls'
import Leaderboard from '../components/Leaderboard'
import { useState } from 'react';

function HomePage() {
  const [racers, setRacers] = useState([]);
  const [showTrack, setShowTrack] = useState(false);
  const [status, setStatus] = useState(false);
  const [liveRacerInfo, setLiveRacerInfo] = useState([]);

  return (
    <div className="mainContainer">
        <div className="canvasContainer">
            <Canvas racers={racers} status={status} setRacerInfo={setLiveRacerInfo} liveRacerInfo={liveRacerInfo}/>
        </div>
    <div className="leaderboardContainer">
        <Leaderboard dataArr = {liveRacerInfo}/>
    </div>
        <ConfigOverlay setRacerArr={setRacers} racerArr={racers} setStatus={setStatus} showTrack={setShowTrack}/>
    </div>
  );
}

export default HomePage;
