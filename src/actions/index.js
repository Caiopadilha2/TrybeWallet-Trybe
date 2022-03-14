export const USER_LOGIN = 'USER_LOGIN';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const actionTypes = {
  USER_LOGIN,
  SAVE_EXPENSES,
  REMOVE_EXPENSES,
};

export const userLogin = (email) => ({
  type: USER_LOGIN,
  email,
});

export const saveExpenses = (payload) => ({
  type: SAVE_EXPENSES,
  payload,
});

export const removeExpensesAction = (expenseId) => ({
  type: REMOVE_EXPENSES,
  payload: expenseId,
});

export const actionCreators = {
  userLogin,
  saveExpenses,
  removeExpensesAction,
};

// action é um objeto que contém um type. Guardar numa constante para não ter erros de digitação.
// Se a action for deste tipo, o reducer vai ter uma lógica para isso. A chave email vai receber o valor email.
