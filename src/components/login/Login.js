import React, { Fragment, Component } from 'react';
import { Redirect } from 'react-router-dom';
import Container from '../common/Container';
import Background from '../common/Background';
import TextInput from '../common/TextInput';
import { LoginStrings, InformationStrings } from '../../utils/strings';
import Styles from './Styles';
import CustomLink from '../common/CustomLink';
import FilledButton from '../common/FilledButton';
import ErrorBox from '../common/ErrorBox';

class Login extends Component {
  state = {
    email: '',
    emailValid: true,
    showEmailError: false,
    password: '',
    passwordValid: true,
    showPasswordError: false,
    redirectToLogin: false,
  };

  setEmail(email) {
    const emailRegex = RegExp('.+@.+[\.].+');
    const emailValid = emailRegex.test(email);
    this.setState({ email, emailValid, showEmailError: false });
  }

  setPassword(password) {
    const passwordValid = password.length > 0;
    this.setState({ password, passwordValid, showPasswordError: false });
  }

  loginUser = (e, email, password) => {
    e.preventDefault();
    const showEmailError = email === 'invalid@example.com';
    const showPasswordError = password.length <= 0;
    if (!showEmailError && !showPasswordError) {
      this.setState({ redirectToLogin: true });
    }
    this.setState({ showEmailError, showPasswordError });
  }

  setBigErrorMessage = (email, showEmailError, showPasswordError) => {
    const bigError = showEmailError
      ? LoginStrings.BigEmailError.replace('{{email}}', email)
      : showPasswordError && LoginStrings.BigPasswordError;
    return bigError;
  }

  render() {
    const { email, emailValid, showEmailError, password, passwordValid, showPasswordError, redirectToLogin } = this.state;
    const bigError = this.setBigErrorMessage(email, showEmailError, showPasswordError);
    return (
      <Fragment>
        {redirectToLogin &&
          <Redirect to={{ 
            pathname: "/logging-in", 
            state: {
              email,
              message: InformationStrings.LoggingIn,
            }
          }} push />
        }
        <Background>
          <Container>
            <Styles.Wrapper>
              <Styles.Avatar email={emailValid && email} />
              <ErrorBox error={bigError} />
              <form onSubmit={e => this.loginUser(e, email, password)} noValidate>
                <TextInput
                  label={LoginStrings.EmailAddress}
                  name='email'
                  type='email'
                  value={email}
                  error={(showEmailError || !emailValid) && LoginStrings.ErrorEmail}
                  showErrorMessage={showEmailError}
                  onChange={e => this.setEmail(e.target.value)}
                />
                <TextInput
                  label={LoginStrings.Password}
                  name='password'
                  type='password'
                  value={password}
                  error={(showPasswordError || !passwordValid) && LoginStrings.PasswordError}
                  showErrorMessage={showPasswordError}
                  onChange={e => this.setPassword(e.target.value)}
                />
                <Styles.ButtonWrapper>
                  <CustomLink to='/forgot-password'>{LoginStrings.ForgotPassword}</CustomLink>
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
