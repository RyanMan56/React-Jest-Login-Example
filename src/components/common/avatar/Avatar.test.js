import React from 'react';
import { shallow } from 'enzyme';
import Avatar, { hashEmail } from './Avatar';

it('renders without crashing', () => {  
  shallow(<Avatar email="test@test.com" />);
});

it('successfully hashes email address', () => {
  expect(hashEmail("test@test.com")).toBe('b642b4217b34b1e8d3bd915fc65c4452');
});
