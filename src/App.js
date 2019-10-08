import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Information from './components/information/Information';
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={({ match, location }) => <Login match={match} location={location} />} />
        <Route exact path="/logging-in" children={({ match, location }) => <Information match={match} location={location} />} />
        <Route exact path="/profile" children={({ match, location }) => <Profile match={match} location={location} />} />
      </Switch>
    </Router>
  );
}

export default App;