import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './styles.css';
// import CircularProgress from 'material-ui/CircularProgress';

export default class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.actions.logout();

    this.state = {
      username: '',
      pass: '',
      sending: false,
      login: false,
    };
  }

  onSubmit = () => {
    const { username, pass } = this.state;
    this.props.actions.login(username, pass);
  };

  render() {
    console.log(this.props, 'asdasd');
    return (
      <div className="main-container">
        <hgroup>
          <h1>Login</h1>
        </hgroup>
        <div className="login-form">
          <form>
            <TextField id="email" label="Email" margin="normal" type="text" />
            <br />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />
          </form>
          <div>
            <Button
              variant="contained"
              color="primary"
              className="button"
              onClick={this.onSubmit}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
