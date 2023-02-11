import Canvas from '../components/Canvas'
import ConfigOverlay from '../components/ConfigOverlay'

function HomePage() {

    let racers = [];

    return (
    <div className="mainContainer">
        <div className="canvasContainer">
            <Canvas/>    
        </div>
        <ConfigOverlay/>
    </div>
    )
}

export default HomePage
