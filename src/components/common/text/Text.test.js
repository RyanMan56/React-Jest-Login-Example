import React from 'react';
import { shallow } from 'enzyme';
import { Title, Subtitle } from './Text';

// Shallowly tests component using jest and enzyme, ignoring any child components
it('shallowly renders without crashing', () => {
  shallow(<Title />);
  shallow(<Subtitle />);
});