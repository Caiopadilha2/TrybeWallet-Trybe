import React from 'react';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        Valor:
        <input data-testid="value-input" type="number" />
        Descrição:
        <input data-testid="description-input" type="text" />
        {/* <label htmlFor="currency-input">
          <select data-testid="currency-input" name="currency-input" />
        </label> */}
        Método de pagamento:
        <select data-testid="method-input">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        Tag:
        <select data-testid="tag-input">
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <hr />

        <p>Descrição</p>
        <p>Tag</p>
        <p>Método de pagamento</p>
        <p>Valor</p>
        <p>Moeda</p>
        <p>Câmbio utilizado</p>
        <p>Valor convertido</p>
        <p>Moeda de conversão</p>
        <p>Editar/Excluir</p>

      </div>

    );
  }
}

export default Wallet;
