import renderer from 'react-test-renderer';
import Leaderboard from "../components/Leaderboard";

// Testing the leaderboard component by passing it an array of data and a status of true

it('should render when passed an array containing data', () => {
    
    const status = true;
    const racers = [
        {
            position: 1,
            alias: 'HAM',
            timeDelta: 0
          }
        ]

    const expectedComponent = renderer.create(
    <Leaderboard 
      status={status} 
      racers={racers} 
    />).toJSON();

    expect(expectedComponent).toMatchSnapshot();
})