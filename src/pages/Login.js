import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  render() {
    return (
      <div>
        <input type="email" data-testid="email-input" />
        <input type="password" data-testid="password-input" />
        <button type="submit">Entrar</button>
      </div>
    );
  }
}

export default Login;
