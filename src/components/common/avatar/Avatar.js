import React from 'react';
import styled from 'styled-components';
import md5 from 'js-md5';
import defaultImage from '../../../assets/face.svg';

const Styles = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: ${({ size }) => size || 130}px;
    height: ${({ size }) => size || 130}px;
    border: 6px solid #ffffff;
    border-radius: 50%;
    background-color: #f48d04;
    margin: 0 auto;
    margin-bottom: -5px;
    overflow: hidden;
  `,
  Image: styled.img.attrs(({ hash, size }) => ({
    src: hash ? getAvatar({ hash, size }) : defaultImage
  }))``,
};

const getAvatar = ({ hash, size }) => {
  return `https://www.gravatar.com/avatar/${hash}?s=${size || 130}`;
}

export const hashEmail = (email) => {
  return email
    ? md5(email.trim().toLowerCase())
    : null;
}

const Avatar = (props) => {
  const { email, size } = props;
  const hash = hashEmail(email);
  return (
    <Styles.Wrapper {...props}>
      <Styles.Image id="avatar-image" hash={hash} size={size} alt="avatar" />
    </Styles.Wrapper>
  )
};

export default Avatar;