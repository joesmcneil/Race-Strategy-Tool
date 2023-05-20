import LeaderboardItem from "../components/LeaderboardItem";
import renderer from 'react-test-renderer';

// Testing the LeaderboardItem component renders without being passed props

it('should render without being passed any props', () => {
  const expectedComponent = renderer.create(
  <LeaderboardItem />
  ).toJSON();

  expect(expectedComponent).toMatchSnapshot()
})
