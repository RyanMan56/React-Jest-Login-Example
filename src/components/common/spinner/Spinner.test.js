import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

// Shallowly tests component using jest and enzyme, ignoring any child components
it('shallowly renders without crashing', () => {
  shallow(<Spinner />);
});

it('matches snapshot', () => {
  const spinner = renderer
    .create(
      <Spinner />
    ).toJSON();
  expect(spinner).toMatchSnapshot();
})