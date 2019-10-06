import React from 'react';
import styled from 'styled-components';
import { linkColor } from '../../utils/colors';

const Styles = {
  Link: styled.a`
    font-size: 12px;
    line-height: 15px;

    :link {
      color: ${linkColor};
    }
  `,
};

const CustomLink = (props) => (
  <Styles.Link {...props}>{props.children}</Styles.Link>
);

export default CustomLink;
