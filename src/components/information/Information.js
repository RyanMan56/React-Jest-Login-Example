import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Background from '../common/Background';
import Container from '../common/Container';
import tick from '../../assets/tick.svg';
import { InformationStrings } from '../../utils/strings';
import Styles from './Styles';
import Spinner from '../common/Spinner';

class Information extends Component {
  state = {
    redirectToProfile: false,
  }

  componentDidMount() {
    // setTimeout(() => this.setState({ redirectToProfile: true }), 3000);
  }

  shouldHideLink = (pathname) => {
    return pathname !== '/forgot-password-success';
  }

  shouldHideTick = (pathname) => {
    return pathname !== '/forgot-password-success';
  }

  render() {
    const { pathname } = this.props.location;
    const { email, message } = this.props.location.state;
    const { redirectToProfile } = this.state;
    const hideLink = this.shouldHideLink(pathname);
    const hideTick = this.shouldHideTick(pathname);
    return (
      <Fragment>
        {redirectToProfile &&
          <Redirect to={{
            pathname: "/profile",
            state: {
              email,
            }
          }} />
        }
        <Background>
          <Container>
            <Styles.Wrapper>
              {pathname !== '/logging-in' &&              
                (
                  <Fragment>
                    <Styles.ReturnLink to="/" shouldHide={hideLink}>{InformationStrings.BackToLogin}</Styles.ReturnLink>
                    <Styles.Tick src={tick} alt="tick-icon" width={25} height={22} shouldHide={hideTick} />
                  </Fragment>
                )
              }
              {pathname === '/logging-in' &&
                <Styles.Spinner />
              }
              <Styles.Title>{message}</Styles.Title>
              <Styles.Subtitle>{email}</Styles.Subtitle>
              <Styles.Avatar email={email} />
            </Styles.Wrapper>
          </Container>
        </Background>
      </Fragment>
    );
  }
}

export default Information;