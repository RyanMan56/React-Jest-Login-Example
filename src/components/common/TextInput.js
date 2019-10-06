import React from 'react';
import styled from 'styled-components';
import { errorColor, inputBackgroundColor, subtextColor } from '../../utils/colors';

const Styles = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  `,
  Subtext: styled.span`
    font-size: 12px;
    color: ${subtextColor};
    margin: 10px 0;
  `,
  Input: styled.input.attrs(props => ({
    type: 'text',
    ...props,
  }))`
    border-color: ${errorColor};
    border-width: ${({ error }) => error ? 2 : 0}px;
    border-radius: ${({ borderRadius }) => borderRadius || '4px'};
    border-style: solid;
    background-color: ${inputBackgroundColor};
    font-size: ${({ fontSize }) => fontSize || 18}px;
    padding: ${({ padding }) => padding || '8px'};
    border-collapse: separate;
    box-shadow: -0.5px 1px 1px 0px #dedede inset, 0.5px -0.5px 1px 0px #dedede inset;
  `,
};

const TextInput = (props) => {
  const { label, error, showErrorMessage } = props;

  return (
    <Styles.Wrapper>
      <Styles.Subtext>{label}</Styles.Subtext>
      <Styles.Input {...props} />
      {error && showErrorMessage && (
        <Styles.Subtext>{error}</Styles.Subtext>
      )}
    </Styles.Wrapper>
  );
};

export default TextInput;
