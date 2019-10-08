import React from 'react';

import styled from 'styled-components';
import { titleColor, subtitleColor } from '../../utils/colors';

const Styles = {
  Title: styled.span`
    font-size: 18px;
    color: ${titleColor};
  `,
  Subtitle: styled.span`
    font-size: 14px;
    color: ${subtitleColor};
  `,
};

export const Title = (props) => (<Styles.Title {...props}>{props.children}</Styles.Title>)

export const Subtitle = (props) => (<Styles.Subtitle {...props}>{props.children}</Styles.Subtitle>)