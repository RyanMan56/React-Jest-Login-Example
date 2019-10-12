import React, { Component } from 'react';
import Information from '../information';
import { ForgotPasswordSuccessStrings } from '../../utils/strings';

class ForgotPasswordSuccess extends Component {
  render() {
    const { email } = this.props.location.state;
    return (
      <Information
        title={ForgotPasswordSuccessStrings.EmailSent}
        subtitle={email}
        email={email}
        linkText={ForgotPasswordSuccessStrings.BackToLogin}
        linkTo="/"
      />
    );
  }
}

export default ForgotPasswordSuccess;