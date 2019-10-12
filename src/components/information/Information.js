import React, { Component, Fragment } from 'react';
import Background from '../common/Background';
import Container from '../common/Container';
import tick from '../../assets/tick.svg';
import Styles from './Styles';

class Information extends Component {
  render() {
    const { noMargin, hideLink, hideTick, showLoading, title, subtitle, email, linkText, linkTo } = this.props;
    return (
      <Background>
        <Container>
          <Styles.Wrapper noMargin={noMargin}>
            {(!hideLink || !hideTick) &&
              (
                <Fragment>
                  <Styles.ReturnLink to={linkTo} shouldHide={hideLink}>{linkText}</Styles.ReturnLink>
                  <Styles.Tick src={tick} alt="tick-icon" width={25} height={22} shouldHide={hideTick} />
                </Fragment>
              )
            }
            {showLoading &&
              <Styles.Spinner />
            }
            <Styles.Title>{title}</Styles.Title>
            <Styles.Subtitle>{subtitle}</Styles.Subtitle>
            <Styles.Avatar email={email} />
          </Styles.Wrapper>
        </Container>
      </Background>
    );
  }
}

export default Information;