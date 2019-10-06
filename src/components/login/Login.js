import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import Container from '../common/Container';
import Background from '../common/Background';
import TextInput from '../common/TextInput';
import { LoginStrings, LoadingStrings } from '../../utils/strings';
import Styles from './Styles';
import CustomLink from '../common/CustomLink';
import FilledButton from '../common/FilledButton';
import Avatar from '../common/Avatar';
import ErrorBox from '../common/ErrorBox';

class Login extends Component {
  state = {
    email: '',
    emailValid: false,
    showErrorMessage: false,
    password: '',
    redirectToLogin: false,
  };

  setEmail(email) {
    const emailRegex = RegExp('.+@.+[\.].+');
    const emailValid = emailRegex.test(email);
    this.setState({ email, emailValid, showErrorMessage: false });
  }

  setPassword(password) {
    this.setState({ password });
  }

  loginUser = (e, email, password) => {
    e.preventDefault();
    const showErrorMessage = email === 'invalid@example.com';
    if (!showErrorMessage) {
      this.setState({ redirectToLogin: true });
    }
    this.setState({ showErrorMessage });
  }

  render() {
    const { email, emailValid, showErrorMessage, password, redirectToLogin } = this.state;
    return (
      <Fragment>
        {redirectToLogin &&
          <Redirect to={{ 
            pathname: "/loading", 
            email,
            message: LoadingStrings.LoggingIn,
          }} push />
        }
        <Background>
          <Container>
            <Styles.Wrapper>
              <Avatar email={emailValid && email} />
              <ErrorBox error={showErrorMessage && LoginStrings.Error.replace('{{email}}', email)} />
              <form onSubmit={e => this.loginUser(e, email, password)} noValidate>
                <TextInput
                  label={LoginStrings.EmailAddress}
                  name='email'
                  type='email'
                  value={email}
                  error={(showErrorMessage || !emailValid) && LoginStrings.ErrorEmail}
                  showErrorMessage={showErrorMessage}
                  onChange={e => this.setEmail(e.target.value)}
                />
                <TextInput
                  label={LoginStrings.Password}
                  name='password'
                  type='password'
                  value={password}
                  onChange={e => this.setPassword(e.target.value)}
                />
                <Styles.ButtonWrapper>
                  <CustomLink href='https://www.google.com'>{LoginStrings.ForgotPassword}</CustomLink>
                  <FilledButton text={LoginStrings.Login} />
                </Styles.ButtonWrapper>
              </form>
            </Styles.Wrapper>
          </Container>
        </Background>
      </Fragment>
    );
  }
}

export default Login;
