import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Information from '../information';
import axios from 'axios';

class LoggingIn extends Component {
  state = {
    redirectToProfile: false,
    user: undefined,
  }

  componentDidMount() {
    // Mocking a slow connection, otherwise this screen doesn't appear for long enough
    setTimeout(() => {
      this.setState({ redirectToProfile: true });
    }, 3000);
    const email = this.props.location && this.props.location.state ? this.props.location.state.email : '';
    this.getUser(email);
  }

  getUser = (email) => {
    // using axios to make requests, as it has wider browser support than fetch
    // axios: https://www.npmjs.com/package/axios#browser-support
    // vanilla fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
    return axios.get('https://randomuser.me/api/')
      .then(res => {
        try {
          const { data } = res;
          const result = data.results[0];
          const name = `${result.name.title} ${result.name.first} ${result.name.last}`;
          // All generated usernames seem to be an adjective followed by a noun and three numbers
          // so here I'm trimming those numbers and using the remainder as the job title
          const role = result.login.username.slice(0, result.login.username.length - 3);
          const user = { email, name, role };
          this.setState({ user });
          return user;
        } catch (error) {
          this.setState({ user: null });
          return null;
        }
      })
      .catch(err => {
        this.setState({ user: null });
        return null;
      });
  }

  render() {
    const { email, message } = (this.props.location && this.props.location.state) || {};
    const { redirectToProfile, user } = this.state;
    return(
      <Fragment>
        {user === null && // user not found for whatever reason. Should be handled with an error message, out of scope
          <Redirect to="/" />
        }
        {redirectToProfile && user !== null &&
          <Redirect to={{
            pathname: "/profile",
            state: {
              ...user,
            }
          }} />
        }
        <Information
          hideLink
          hideTick
          showLoading
          title={message}
          subtitle={email}
          email={email}
        />
      </Fragment>
    );
  }
}

export default LoggingIn;