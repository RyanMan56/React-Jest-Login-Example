import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Background from '../common/Background';
import Container from '../common/Container';
import TextInput from '../common/TextInput';
import Styles from './Styles';
import { ForgotPasswordStrings, CommonStrings } from '../../utils/strings';
import { emailRegex } from '../../utils';
import CustomLink from '../common/CustomLink';
import FilledButton from '../common/FilledButton';

class ForgotPassword extends Component {
  state = {
    email: '',
    emailValid: true,
    showEmailError: false,
    redirectToForgotPasswordActive: false,
  };

  componentDidMount() {
    this.setState({ email: this.props.location.state.email })
  }

  setEmail = (email) => {
    const emailValid = emailRegex.test(email);
    this.setState({ email, emailValid, showEmailError: false });
  }

  sendEmail = (e, email) => {
    e.preventDefault();
    const emailValid = emailRegex.test(email);
    if (!emailValid) {
      this.setState({ showEmailError: true });
    } else {
      this.setState({ redirectToForgotPasswordActive: true });
    }
  }

  render() {
    const { email, emailValid, showEmailError, redirectToForgotPasswordActive } = this.state;
    return (
      <Fragment>
        {redirectToForgotPasswordActive &&
          <Redirect to={{
            pathname: "/forgot-password-active",
            state: {
              email
            }
          }} />
        }
        <Background>
          <Container>
            <Styles.Wrapper>
              <Styles.Avatar email={email} />
              <Styles.Message>{ForgotPasswordStrings.Message}</Styles.Message>
              <form onSubmit={e => this.sendEmail(e, email)}>
                <TextInput
                  label={CommonStrings.EmailAddress}
                  name="email"
                  type="email"
                  value={email}
                  error={(showEmailError || !emailValid) && ForgotPasswordStrings.ErrorEmail}
                  showErrorMessage={showEmailError}
                  onChange={e => this.setEmail(e.target.value)}
                />
                <Styles.ButtonWrapper>
                  <CustomLink to='/'>{ForgotPasswordStrings.Back}</CustomLink>
                  <FilledButton type="submit" text={ForgotPasswordStrings.ChangePassword} />
                </Styles.ButtonWrapper>
              </form>
            </Styles.Wrapper>
          </Container>
        </Background>
      </Fragment>
    );
  }
}

export default ForgotPassword;