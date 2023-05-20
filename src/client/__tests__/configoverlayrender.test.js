import ConfigOverlay from "../components/ConfigOverlay";
import renderer from 'react-test-renderer';

// Testing that the config overlay component renders when passed all of it's inherited props

it('should render when passed an empty array and the functions it inherits', () => {

  const expectedComponent = renderer.create(
    <ConfigOverlay
      racerArr={[]}
      setRacerArr={() => {}}
      setStatus={() => {}}
      />
    ).toJSON();

    expect(expectedComponent).toMatchSnapshot();
  })