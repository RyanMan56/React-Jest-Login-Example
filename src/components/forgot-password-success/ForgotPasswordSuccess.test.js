import React from 'react';
import { shallow } from 'enzyme';
import ForgotPasswordSuccess from './ForgotPasswordSuccess';

// Shallowly tests component using jest and enzyme, ignoring any child components
it('shallowly renders without crashing', () => {
  shallow(<ForgotPasswordSuccess />);
});