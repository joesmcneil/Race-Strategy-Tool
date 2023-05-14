
import Canvas from '../components/Canvas'
import ConfigOverlay from '../components/ConfigOverlay'
import Leaderboard from '../components/Leaderboard'
import { useState } from 'react';

function HomePage() {
  const [racers, setRacers] = useState([]);
  const [status, setStatus] = useState(false);
  const [trackLength, setTrackLength] = useState(0);
  const [noLaps, setNoLaps] = useState(1);
  const [time, setTime] = useState(0);

  return (
    <div className="mainContainer">
        <div className="canvasContainer">
            <Canvas racers={racers} status={status} setRacers={setRacers} setStatus={setStatus} trackLength={trackLength} noLaps={noLaps} time={time} setTime={setTime}/>{/** liveRacerInfo={liveRacerInfo} */}
        </div>
    <div className="leaderboardContainer">
        <Leaderboard racers={racers} status={status} time={time}/>
    </div>
        <ConfigOverlay setRacerArr={setRacers} racerArr={racers} setStatus={setStatus} tracklength={trackLength} setTrackLength={setTrackLength} noLaps={noLaps} setNoLaps={setNoLaps}/>
    </div>
  );
}

export default HomePage;
