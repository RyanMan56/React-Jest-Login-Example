import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { linkColor } from '../../../utils/colors';

const Styles = {
  Link: styled(Link)`
    font-size: 12px;
    line-height: 15px;

    :link {
      color: ${linkColor};
    }
  `,
};

const CustomLink = (props) => (
  <Styles.Link to='#' {...props}>{props.children}</Styles.Link>
);

export default CustomLink;
