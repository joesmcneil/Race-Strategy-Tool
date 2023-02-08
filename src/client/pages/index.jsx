import Canvas from '../components/Canvas'
import Overlay from '../components/Overlay'

function HomePage() {

    let racers = [];

    return (
    <div className="mainContainer">
        <div className="canvasContainer">
            <Canvas/>    
        </div>
        <Overlay/>
    </div>
    )
}

export default HomePage
