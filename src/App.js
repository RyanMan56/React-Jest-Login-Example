import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Loading from './components/loading/Loading';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/loading">
          <Loading />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;