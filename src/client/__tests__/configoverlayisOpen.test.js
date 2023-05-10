import ConfigOverlay from "../components/ConfigOverlay"
import renderer from 'react-test-renderer';

test('checking the initial state of isOpen is false', () => {

    const renderedComponent = renderer.create(<ConfigOverlay />);
    const checkableComponent = renderedComponent.toJSON();
    const componentClass = checkableComponent.props.className;
    
    console.log(componentClass);
    
    expect(componentClass).toBe('overlay ')
})