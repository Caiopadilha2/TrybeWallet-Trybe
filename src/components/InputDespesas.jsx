import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getExchangeRates from '../services/Api';
import { actionCreators } from '../actions';

class InputDespesas extends React.Component {
  constructor() {
    super();

    this.state = {
      idInput: 0,
      valueInput: '',
      descriptionInput: '',
      currencyInput: 'USD',
      methodInput: 'Dinheiro',
      tagInput: 'Alimentação',
      currencies: [],
      exchangeRates: {},
    };
  }
  // Alguns inputs são default e o requisito pede para cada despesa ter um ID, começando em 0.

  async componentDidMount() {
    const exchangeRates = await getExchangeRates();
    const currencies = Object.keys(exchangeRates);
    this.setState({
      currencies,
      exchangeRates,
    });
  }
  // Quando o componente montar na tela, pego as taxas de câmbio da API, que é aquele objeto grande e guardo.
  // Desse objeto eu pego só as keys(chaves) dele, que são as moedas. obs: Já exclui o dólar turismo lá na requisição à api.

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  }

  addExpensesButton = () => {
    const { idInput,
      valueInput,
      descriptionInput,
      currencyInput,
      methodInput,
      tagInput,
      exchangeRates,
    } = this.state;
    // Com o connect já consigo acessar as props aqui. Vou jogar lá no dispatch.
    const { addDespesa } = this.props;

    addDespesa({
      idInput,
      valueInput,
      descriptionInput,
      currencyInput,
      methodInput,
      tagInput,
      exchangeRates,
    });

    // Zerar o estado para adicionar uma nova despesa
    this.setState((prev) => ({
      idInput: prev.idInput + 1,
      valueInput: '',
      descriptionInput: '',
    }));
  }

  render() {
    const { valueInput,
      descriptionInput,
      currencyInput,
      methodInput,
      tagInput,
      currencies } = this.state;

    return (
      <form>
        <label htmlFor="value-input">
          Valor:
          <input
            data-testid="value-input"
            type="number"
            name="value-input"
            value={ valueInput }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição:
          <input
            data-testid="description-input"
            type="text"
            name="description-input"
            value={ descriptionInput }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="currency-input">
          Moeda:
          <select
            id="currency-input"
            data-testid="currency-input"
            onChange={ this.handleChange }
            name="currencyInput"
            value={ currencyInput }
          >
            {currencies.map((currency, index) => (
              <option
                data-testid={ currency }
                key={ index }
                value={ currency }
              >
                {currency}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento:
          <select
            data-testid="method-input"
            name="method-input"
            value={ methodInput }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Tag:
          <select
            data-testid="tag-input"
            name="tag-input"
            value={ tagInput }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ this.addExpensesButton }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addDespesa: (payload) => dispatch(actionCreators.saveExpenses(payload)),
});

export default connect(null, mapDispatchToProps)(InputDespesas);

InputDespesas.propTypes = {
  addDespesa: PropTypes.func.isRequired,
};
