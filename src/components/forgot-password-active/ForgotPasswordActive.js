import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Information from '../information';
import { ForgotPasswordActiveStrings } from '../../utils/strings';

class ForgotPasswordActive extends Component {
  state = {
    redirectToForgotPasswordSuccess: false,
  }

  componentDidMount() {
    // Mocking sending an email
    setTimeout(() => {
      this.setState({ redirectToForgotPasswordSuccess: true });
    }, 3000);
  }

  render() {
    const { redirectToForgotPasswordSuccess } = this.state;
    const { email } = this.props.location.state;
    return (
      <Fragment>
        {redirectToForgotPasswordSuccess &&
          <Redirect to={{
            pathname: "forgot-password-success",
            state: {
              email
            }
          }} />
        }
        <Information
          noMargin
          hideLink
          hideTick
          showLoading
          title={ForgotPasswordActiveStrings.Message}
          subtitle={email}
          email={email}
        />
      </Fragment>
    );
  }
}

export default ForgotPasswordActive;
