import React from 'react';
import Counter from './Counter.js';
import renderer from 'react-test-renderer';


test('Counter renders properly', () => {
  const tree = renderer.create(
    <h1>We be countin' up in here</h1>
  ).toJSON();
    expect(tree).toMatchSnapshot();
});
