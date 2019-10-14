import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './Login';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';

// Shallowly tests component using jest and enzyme, ignoring any child components
it('shallowly renders without crashing', () => {
  shallow(<Login />);
});

it('correctly sets big error message', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.instance().setBigErrorMessage('test@test.com', true, false)).toBe(`We were unable to log you in. It looks like an account associated with test@test.com does not exist.`);
})

it('renders without crashing', () => {
  mount(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
});
