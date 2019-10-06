import React from 'react';
import styled from 'styled-components';
import { whiteColor } from '../../utils/colors';
import arrow from '../../assets/arrow.svg';

const Styles = {
  Button: styled.button`
    background-color: #0473f4;
    padding: 12px 25px;
    border-radius: 30px;

    border-style: none;
    box-shadow: 0px 1px 2px rgba(0,0,0,0.13);
    transition: 0.3s;

    :hover {
      box-shadow: 0px 2px 3px 2px rgba(0,0,0,0.13);
    }

    :active {
      border-style: none;
    }
  `,
  Text: styled.span`
    font-size: 14px;
    font-weight: bold;
    color: ${whiteColor};
    line-height: 17px;
    padding-right: 10px;
    font-family: lato;
  `,
};

const FilledButton = ({ text }) => (
  <Styles.Button>
    <Styles.Text>{text}</Styles.Text>
    <img src={arrow} alt="arrow-icon" width={16} />
  </Styles.Button>
);

export default FilledButton;