import renderer from 'react-test-renderer';
import Leaderboard from "../components/Leaderboard"

// Testing the rendering of the Leaderboard component when the status passed to it is false

it('should render the Leaderboard component when the status is false', () => {

  const status = false;
  const racers = [];

  const expectedComponent = renderer.create(
  <Leaderboard 
    status={status} 
    racers={racers} />
    ).toJSON();

  expect(expectedComponent).toMatchSnapshot();
});