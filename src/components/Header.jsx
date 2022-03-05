import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;

    return (
      <div>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});
// mapStateToProps é uma arrow que recebe o state (estado global). Tem que retornar um objeto.
// Escolho as props que quero retornar. No caso, só o email. Aula 15.3 Cestari 55:00.
// Vou renderizar lá no Wallet para aparecer o email da pessoa logada.

export default connect(mapStateToProps)(Header);
// mapStateToProps é para leitura

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
