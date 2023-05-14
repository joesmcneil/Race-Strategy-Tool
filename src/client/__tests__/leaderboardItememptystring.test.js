import LeaderboardItem from "../components/LeaderboardItem";
import renderer from 'react-test-renderer';

it('should match the object supplied when passed empty strings', () => {

    const props = {
      position: '',
      alias: '',
      timeDelta: ''
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