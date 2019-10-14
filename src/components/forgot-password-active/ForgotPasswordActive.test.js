import React from 'react';
import { shallow } from 'enzyme';
import ForgotPasswordActive from './ForgotPasswordActive';

// Shallowly tests component using jest and enzyme, ignoring any child components
it('shallowly renders without crashing', () => {
  shallow(<ForgotPasswordActive />);
});