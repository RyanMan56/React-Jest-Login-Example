import React from 'react';
import Container from '../common/Container';
import Background from '../common/Background';
import TextInput from '../common/TextInput';
import { LoginStrings } from '../../utils/strings';
import Styles from './Styles';
import CustomLink from '../common/CustomLink';
import FilledButton from '../common/FilledButton';
import Avatar from '../common/Avatar';

function Login() {
  return (
    <Background>
      <Container>
        <Styles.Wrapper>
          <Avatar email="ryanman56@gmail.com" />
          <TextInput
            label={LoginStrings.EmailAddress}
            name='email'
            type='email'
          />
          <TextInput
            label={LoginStrings.Password}
            name='password'
            type='password'
          />
          <Styles.ButtonWrapper>
            <CustomLink href='https://www.google.com'>{LoginStrings.ForgotPassword}</CustomLink>
            <FilledButton text={LoginStrings.Login} />
          </Styles.ButtonWrapper>
        </Styles.Wrapper>
      </Container>
    </Background>
  );
}

export default Login;
