import React from 'react';
import ripple from '../../assets/ripple.svg';

const Spinner = (props) => (
  <img {...props} src={ripple} alt="loading-spinner" />
);

export default Spinner;