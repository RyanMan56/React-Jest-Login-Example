import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Avatar, { hashEmail } from './Avatar';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  // cleanup on exit
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

it('renders without crashing', () => {
  act(() => {
    render(<Avatar email="test@test.com" />, container);
  });
});

it('successfully hashes email address', () => {
  expect(hashEmail("test@test.com")).toBe('b642b4217b34b1e8d3bd915fc65c4452');
});
