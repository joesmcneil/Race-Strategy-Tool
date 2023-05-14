import LeaderboardItem from "../components/LeaderboardItem";
import renderer from 'react-test-renderer';

// Testing the LeaderboardItem component DOM tree is correct after passing it a single object prop

it('should match the object supplied', () => {

  const props = {
    position: 1,
    alias: 'HAM',
    timeDelta: 0
  }

  const renderedComponent = renderer.create(
    <LeaderboardItem
      position={props.position}
      alias={props.alias}
      timeDelta={props.timeDelta}
    />)

  const expectedComponent = renderer.create(
    <div className="child">
      <div className="parent">
        <div className="child">
          {props.position}
        </div>
        <div className="child">
          {props.alias}
        </div>
        <div className="child">
          {props.timeDelta}
        </div>
      </div>
    </div>
)
  expect(renderedComponent.toJSON()).toMatchObject(expectedComponent.toJSON());
})