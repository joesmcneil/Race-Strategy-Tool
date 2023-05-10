import ConfigOverlay from "../components/ConfigOverlay";
import renderer from 'react-test-renderer';
import { useState, useRef } from 'react';

test('testing the overlay component render', () => {

  const expectedComponent = renderer.create(
    <configOverlay
      racerArr={[]}
      setRacerArr={() => {}}
      setStatus={() => {}}
      />
    );
    const JSON = expectedComponent.toJSON();
    expect(JSON).toMatchSnapshot();
  })