import React from 'react';
import { shallow } from 'enzyme';
import ForgotPassword from './ForgotPassword';

// Shallowly tests component using jest and enzyme, ignoring any child components
it('shallowly renders without crashing', () => {
  shallow(<ForgotPassword />);
});

it('correctly sets default email value', () => {
  const wrapper = shallow(<ForgotPassword location={{
    state: { email: 'test@test.com' }
  }} />);
  expect(wrapper.state().email).toEqual('test@test.com');
});