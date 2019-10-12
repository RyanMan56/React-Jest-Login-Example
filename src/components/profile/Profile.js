import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Background from '../common/Background';
import Container from '../common/Container';
import Styles from './Styles';
import { Title } from '../common/Text';
import { ProfileStrings } from '../../utils/strings';

class Profile extends Component {
  state = {
    redirectToLogin: false,
  };

  logout = () => {
    this.setState({ redirectToLogin: true });
  }
  
  render() {
    const { email, name, role } = this.props.location.state;
    return (
      <Fragment>
        {this.state.redirectToLogin && <Redirect to="/" />}
        <Background>
          <Container>
            <Styles.Wrapper>
              <Styles.Details>
                <Styles.Avatar email={email} size={63} />
                <Styles.TextWrapper>
                  <Title>{name}</Title>
                  <Styles.Subtitle>{role}</Styles.Subtitle>
                </Styles.TextWrapper>
              </Styles.Details>
              <Styles.Message>{ProfileStrings.Congratulations}</Styles.Message>
              <Styles.LogoutButton text={ProfileStrings.Logout} onClick={this.logout} />
            </Styles.Wrapper>
          </Container>
        </Background>
      </Fragment>
    );
  }
}

export default Profile;
