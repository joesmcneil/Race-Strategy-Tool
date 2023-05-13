import ConfigOverlay from "../components/ConfigOverlay"
import renderer from 'react-test-renderer';

// Testing whether the initial state of the overlay component is true

test('The initial isOpen state of the component should be true', () => {

    const renderedComponent = renderer.create(<ConfigOverlay />);
    const checkableComponent = renderedComponent.toJSON();
    const componentClass = checkableComponent.props.className;
    
    expect(componentClass).toBe('overlay ')
})