import React from 'react';

class InputDespesas extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="value-input"
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="description-input"
          />
        </label>

        <label htmlFor="Moeda">
          Moeda:
          <select data-testid="currency-input" name="Moeda">
            <option value="teste">USD</option>
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select data-testid="method-input" name="method-input">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Tag:
          <select data-testid="tag-input" name="tag-input">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button type="button">Adicionar despesa</button>
      </form>
    );
  }
}

export default InputDespesas;
