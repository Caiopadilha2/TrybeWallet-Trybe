// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { SAVE_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
      // Como é um array de objetos, tenho que dar spread no state.expenses. Ai adiciono o payload da action.
    };
  default:
    return state;
  }
};

export default walletReducer;
