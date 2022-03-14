import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeExpensesAction } from '../actions';

class TabelaDespesas extends React.Component {
  render() {
    const { wallet: { expenses }, removeExpenses } = this.props;

    return (
      <div>
        {/* https://www.w3schools.com/tags/tag_th.asp */}
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.tag }</td>
                <td>{ expense.method }</td>
                <td>{ Number(expense.value).toFixed(2) }</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
                <td>
                  { (Number(expense.value).toFixed(2)
                   * Number(expense.exchangeRates[expense.currency].ask))}
                  {' '}
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => removeExpenses(expense.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

const mapDispatchToProps = (dispatch) => ({
  removeExpenses: (id) => dispatch(removeExpensesAction(id)),
});

TabelaDespesas.propTypes = {
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.object),
  }),
}.isRequired;

// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html#proptypes

export default connect(mapStateToProps, mapDispatchToProps)(TabelaDespesas);
