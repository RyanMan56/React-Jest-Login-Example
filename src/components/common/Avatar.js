import React from 'react';
import styled from 'styled-components';
import md5 from 'js-md5';
import defaultImage from '../../assets/face.svg';

const Styles = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 130px;
    height: 130px;
    border: 6px solid #ffffff;
    border-radius: 50%;
    background-color: #f48d04;
    margin: 0 auto;
    transform: translateY(-35px);
    margin-bottom: -5px;
    overflow: hidden;
  `,
  Image: styled.img.attrs(({ hash }) => ({
    src: hash ? `https://www.gravatar.com/avatar/${hash}?s=130` : defaultImage
  }))`

  `,
};

const Avatar = ({ email }) => {
  const hash = email
    ? md5(email.trim().toLowerCase())
    : null;
  return (
    <Styles.Wrapper>
      <Styles.Image hash={hash} alt="avatar" />
    </Styles.Wrapper>
  )
};

export default Avatar;