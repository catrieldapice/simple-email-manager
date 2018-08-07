import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Login from './screens/Login/Container';
import Main from './screens/Main/Container';
import { history } from './redux/history';
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
