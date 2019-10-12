import React from 'react';
import styled from 'styled-components';
import { whiteColor } from '../../utils/colors';

const Styles = {
  // Here we're using the box-shadow css property instead of filter (which was suggested by the designs)
  // as it has better browser compatibility.
  // box-shadow: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow#Browser_compatibility
  // filter: https://developer.mozilla.org/en-US/docs/Web/CSS/filter#Browser_compatibility
  Container: styled.div`
    display: flex;
    width: 382px;
    background-color: ${whiteColor};
    box-shadow: 0 12px 35px 0 rgba(30, 6, 107, 0.12), 0 2px 4px 0 rgba(1, 4, 32, 0.15);
    align-items: center;
    justify-content: center;
  `,
}

const Container = (props) => (
  <Styles.Container {...props}>
    {props.children}
  </Styles.Container>
);

export default Container;