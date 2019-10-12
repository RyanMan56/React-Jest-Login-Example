import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Login from './Login';

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
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
      , container
    );
  });
});
