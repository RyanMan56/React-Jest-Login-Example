import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Avatar, { hashEmail } from './Avatar';

it('renders without crashing', () => {  
  shallow(<Avatar email="test@test.com" />);
});

it('matches snapshot', () => {
  const avatar = renderer
    .create(
      <Avatar email="test@test.com" />
    ).toJSON();

  expect(avatar).toMatchSnapshot();
});

it('successfully hashes email address', () => {
  expect(hashEmail("test@test.com")).toBe('b642b4217b34b1e8d3bd915fc65c4452');
});
