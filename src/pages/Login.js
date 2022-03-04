import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      botaoLoginDesabilitado: true,
    };
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.validarBotao);
  }
  // Tenho que chamar a validarbotao aqui toda vez para a cada alteração, ver se habilita o botão ou não.

  validarBotao = () => {
    const { email, password } = this.state;
    const MINIMO_SEIS = 6;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const emailValido = emailRegex.test(email);

    if (password.length >= MINIMO_SEIS && emailValido) {
      this.setState({ botaoLoginDesabilitado: false });
    } else {
      this.setState({ botaoLoginDesabilitado: true });
    }
  }

  clickBotaoLogin = () => {
    const { history, dispatch } = this.props;
    const { email } = this.state;

    dispatch(userLogin(email));
    history.push('/carteira');

  }

  render() {
    const { botaoLoginDesabilitado, email, password } = this.state;
    return (
      <div>
        <input
          type="email"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ this.handleInputChange }
        />
        <input
          type="password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ this.handleInputChange }
        />
        <button type="button" disabled={ botaoLoginDesabilitado }>Entrar</button>
      </div>
    );
  }
}

export default connect()(Login);
