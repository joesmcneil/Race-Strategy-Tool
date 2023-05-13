import renderer from 'react-test-renderer';
import Leaderboard from "../components/Leaderboard";

// Testing the leaderboard component loads properly when an empty array is passed into it

it('should render properly with an empty array', () => {

    const status = true;
    const racers = []

    const expectedComponent = renderer.create(
    <Leaderboard 
      status={status} 
      racers={racers} 
    />).toJSON();

    expect(expectedComponent).toMatchSnapshot();
})