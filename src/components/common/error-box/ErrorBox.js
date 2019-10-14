import React from 'react';
import styled from 'styled-components';
import { errorBackgroundColor, subtextColor } from '../../../utils/colors';

const Styles = {
  Wrapper: styled.div`
    padding: ${({ error }) => !error ? '0 20px' : '12px 20px'};
    background-color: ${errorBackgroundColor};
    border-radius: 3px;
    margin-bottom: 20px;
    transition: 0.3s;
    height: ${({ error }) => !error ? 0 : 'fit-content'};
  `,
  Text: styled.span`
    color: ${subtextColor};
    font-size: 12px;
  `,
};

const ErrorBox = ({ error }) => (
  <Styles.Wrapper error={error}>
    <Styles.Text>{error}</Styles.Text>
  </Styles.Wrapper>
);

export default ErrorBox;