import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import LoggingIn from './components/logging-in';
import Profile from './components/profile/Profile';
import ForgotPassword from './components/forgot-password';
import ForgotPasswordActive from './components/forgot-password-active';
import ForgotPasswordSuccess from './components/forgot-password-success';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={({ match, location }) => <Login match={match} location={location} />} />
        <Route exact path="/logging-in" children={({ match, location }) => <LoggingIn match={match} location={location} />} />
        <Route exact path="/profile" children={({ match, location }) => <Profile match={match} location={location} />} />
        <Route exact path="/forgot-password" children={({ match, location }) => <ForgotPassword match={match} location={location} />} />
        <Route exact path="/forgot-password-active" children={({ match, location }) => <ForgotPasswordActive match={match} location={location} />} />
        <Route exact path="/forgot-password-success" children={({ match, location }) => <ForgotPasswordSuccess match={match} location={location} />} />
      </Switch>
    </Router>
  );
}

export default App;