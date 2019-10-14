import React from 'react';
import { shallow } from 'enzyme';
import LoggingIn from './LoggingIn';

// Shallowly tests component using jest and enzyme, ignoring any child components
it('shallowly renders without crashing', () => {
  shallow(<LoggingIn />);
});

it(`correctly sets user's email, name and role from API call`, async () => {
  expect.assertions(3);
  const wrapper = shallow(<LoggingIn />);
  const user = await wrapper.instance().getUser('test@test.com');
  expect(user.hasOwnProperty('email')).toBeTruthy();
  expect(user.hasOwnProperty('name')).toBeTruthy();
  expect(user.hasOwnProperty('role')).toBeTruthy();
});