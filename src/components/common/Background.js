import React from 'react';
import styled from 'styled-components';
import { canvasBackgroundColor } from '../../utils/colors';

const Styles = {
  Background: styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${canvasBackgroundColor};
  `,
};

const Background = ({ children }) => (
  <Styles.Background>
    {children}
  </Styles.Background>
);

export default Background;